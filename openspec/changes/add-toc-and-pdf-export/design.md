## Context

当前Markdown笔记应用已实现基础功能：三栏布局、笔记CRUD、实时预览、LocalStorage存储、代码高亮、导出MD。但用户需要两个新功能：

1. **目录导航（TOC）**：用户编辑长文档时需要快速定位和跳转，期望悬浮在编辑器/预览区顶部的目录导航栏
2. **PDF导出**：通过Electron系统打印对话框实现PDF导出

**技术约束：**
- LocalStorage限制约5MB（不存储图片，用户确认）
- Electron应用需配置打印权限
- 悬浮目录需实时解析Markdown标题结构

## Goals / Non-Goals

**Goals:**
- 实现悬浮目录导航组件，自动提取Markdown中的H1-H6标题
- 目录支持点击跳转到对应章节
- 实现PDF导出功能，使用Electron原生打印对话框
- 保持现有功能稳定，不破坏已有特性

**Non-Goals:**
- 不实现图片上传功能（用户明确不需要）
- 不实现复杂的PDF样式定制（使用系统打印，保持一致）
- 不实现目录拖拽排序或手动编辑

## Decisions

### 1. 悬浮目录导航实现方案

**选择：自定义Hook解析 + React组件渲染**

| 方案 | 优点 | 缺点 |
|------|------|------|
| 第三方库（tocbot等） | 功能完善 | 增加依赖，可能与react-markdown冲突 |
| 自定义正则解析 | 轻量、无依赖、可控性强 | 需处理边界情况 |
| remark插件 | 与react-markdown集成好 | 配置复杂 |

**决策**：使用自定义正则解析Markdown标题，简单高效：
```typescript
// 匹配 # ## ### 等标题行
const headingRegex = /^(#{1,6})\s+(.+)$/gm;
```

### 2. 目录渲染位置

**选择：悬浮在预览区顶部中央**

- 目录容器使用`position: sticky; top: 0`固定在预览区顶部
- 深色半透明背景，不遮挡内容
- 点击目录项跳转到对应标题位置（使用锚点或scrollIntoView）

### 3. PDF导出实现

**选择：Electron BrowserWindow.print() + 系统打印对话框**

```javascript
// electron/main.js
const { dialog } = require('electron');

// 在渲染进程调用
window.print({ silent: false, printBackground: true });
```

**优点：**
- Electron原生支持，无需第三方库
- 系统打印对话框用户熟悉
- 支持选择打印机或另存为PDF

**配置：**
- 设置`webPreferences`允许打印
- 隐藏打印对话框中的"打印"按钮只保留"另存为PDF"

### 4. 目录数据结构

```typescript
interface TocItem {
  level: number;      // 1-6 对应 # 到 ######
  text: string;       // 标题文本
  id: string;         // 用于锚点跳转的唯一ID
}
```

生成规则：
- `id` = 标题文本转slug（如"Getting Started" → "getting-started"）
- 保持层级关系用于缩进显示

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Markdown解析可能遗漏某些标题格式（如多行标题） | 使用多行匹配或简单截取第一行 |
| 系统打印PDF样式可能与预览不一致 | 打印样式表单独处理，优化排版 |
| 目录点击跳转在长文档中可能不精准 | 使用scrollIntoView配合offset调整 |
| 标题ID重复导致跳转错误 | 生成唯一ID（添加序号后缀） |
