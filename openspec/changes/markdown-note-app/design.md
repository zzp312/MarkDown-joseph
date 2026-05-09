## Context

用户需要一个Windows桌面端的Markdown笔记应用，具有以下特点：
- 三栏布局（左侧笔记列表、中间编辑器、右侧实时预览）
- 深色主题设计
- 笔记列表和搜索功能
- 本地数据持久化（LocalStorage）
- 支持笔记的增删改操作
- 代码语法高亮支持

当前项目是一个基础的React项目（Create React App），需要重新配置为Vite+TypeScript项目。

## Goals / Non-Goals

**Goals:**
- 创建React+TypeScript+Vite项目
- 实现三栏布局：左侧笔记列表、中间Markdown编辑器、右侧实时预览
- 实现笔记管理功能（CRUD）
- 使用LocalStorage持久化数据
- 实现笔记搜索功能（按标题搜索）
- 使用Tailwind CSS进行样式设计
- 配置react-syntax-highlighter支持多语言代码高亮
- 深色主题设计

**Non-Goals:**
- 不实现用户认证
- 不实现云端同步
- 不支持团队协作
- 不支持导出功能（可作为后续扩展）

## Decisions

### 1. 项目结构设计

```
src/
├── components/
│   ├── Sidebar/           # 左侧边栏（笔记列表+搜索+新建按钮）
│   │   ├── index.tsx
│   │   ├── NoteList.tsx
│   │   ├── NoteItem.tsx
│   │   └── SearchBar.tsx
│   ├── Editor/            # Markdown编辑器（含状态栏）
│   │   └── index.tsx
│   ├── Preview/           # 实时预览（含状态栏）
│   │   └── index.tsx
│   └── Header/            # 顶部标题栏
│       └── index.tsx
├── hooks/                 # 自定义hooks
│   └── useNotes.ts        # 笔记管理hook
├── types/                 # TypeScript类型定义
│   └── index.ts
├── utils/                 # 工具函数
│   ├── storage.ts         # LocalStorage操作
│   └── helpers.ts         # 辅助函数
├── App.tsx
├── main.tsx
└── index.css
```

### 2. 数据模型设计

```typescript
interface Note {
  id: string;           // 唯一标识（UUID）
  title: string;        // 笔记标题
  content: string;      // Markdown内容
  createdAt: number;    // 创建时间戳
  updatedAt: number;    // 更新时间戳
}
```

### 3. 布局设计

根据参考图，采用三栏布局：

| 区域 | 宽度 | 内容 |
|------|------|------|
| 左侧边栏 | 25% | 搜索框、笔记列表、新建笔记按钮 |
| 中间编辑器 | 37.5% | Markdown编辑区域、底部状态栏 |
| 右侧预览 | 37.5% | 渲染后的Markdown、底部状态栏 |

**颜色方案（深色主题）：**
- 侧边栏背景：#1a1a1a
- 编辑器/预览背景：#2d2d2d
- 文字颜色：#ffffff
- 强调色（标题、链接）：#00ff00（绿色）
- 边框颜色：#3d3d3d

### 4. 技术栈选择

| 分类 | 技术 | 版本 | 理由 |
|------|------|------|------|
| 框架 | React | 19.x | 成熟稳定，生态完善 |
| 语言 | TypeScript | 5.x | 类型安全，开发体验好 |
| 构建工具 | Vite | 6.x | 快速构建，HMR支持好 |
| 样式 | Tailwind CSS | 3.x | 原子化CSS，开发效率高 |
| Markdown解析 | react-markdown | 9.x | 轻量，可扩展 |
| 代码高亮 | react-syntax-highlighter | 15.x | 支持多种主题和语言 |

### 5. 代码高亮配置

使用react-syntax-highlighter的`Prism`组件，配合`dark`主题。支持的语言包括：
- JavaScript
- TypeScript
- Python
- Java
- Go
- Ruby
- PHP
- C/C++
- JSON
- HTML/CSS

### 6. 状态管理

使用React Hooks（useState, useEffect）进行状态管理，配合LocalStorage进行持久化。无需引入复杂的状态管理库（如Redux），因为应用复杂度较低。

### 7. 桌面端方案选择

采用Electron方案直接开发桌面应用：
- 技术栈：Electron + Vite + React + TypeScript
- 优点：真正的桌面应用，可直接打开
- 使用成熟的Electron + Vite方案（如electron-vite-vue模板或create-vite-app）

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| LocalStorage存储大小限制（约5MB） | 提示用户定期清理旧笔记，或考虑IndexedDB作为备选 |
| Markdown解析性能问题 | 使用react-markdown的懒加载特性，优化大文档渲染 |
| 浏览器兼容性 | 目标现代浏览器（Chrome, Edge, Firefox），不支持IE |
| Electron打包配置复杂 | 提供详细的打包文档和脚本 |

## Open Questions

已解答：
1. 用户需要桌面版应用 → 采用Electron方案开发
2. 不需要笔记分类/标签功能
3. 不需要Markdown扩展语法
4. 需要导出MD功能，不需要导出PDF功能