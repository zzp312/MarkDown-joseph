# MarkDown-joseph

> 一款优雅的 Markdown 笔记桌面应用，专为开发者和技术写作者打造

## 🌟 功能特性

### 核心功能
- **三栏布局**：左侧笔记列表、中间编辑器、右侧实时预览，高效写作体验
- **实时预览**：所见即所得，Markdown 语法即时渲染
- **代码高亮**：支持 JavaScript、TypeScript、Python、Java、Go 等 20+ 种编程语言
- **悬浮目录**：自动生成文章大纲，点击快速跳转
- **智能搜索**：支持标题和内容全文搜索

### 文件管理
- **导入/导出**：支持打开本地 Markdown 文件，导出为 `.md` 格式
- **PDF 导出**：一键导出为 PDF 文件
- **自动保存**：LocalStorage 实时持久化，数据永不丢失

### 用户体验
- **深色主题**：护眼的深色配色方案，绿色强调色
- **响应式设计**：自适应窗口大小
- **简洁界面**：专注写作，无干扰

## 🛠 技术栈

| 分类 | 技术 | 版本 | 说明 |
|------|------|------|------|
| 前端框架 | React | 19.x | 现代前端框架 |
| 语言 | TypeScript | 5.x | 类型安全 |
| 构建工具 | Vite | 6.x | 极速构建 |
| 样式 | Tailwind CSS | 3.x | 原子化 CSS |
| Markdown | react-markdown | 9.x | Markdown 解析 |
| 代码高亮 | react-syntax-highlighter | 15.x | 语法高亮 |
| 桌面应用 | Electron | 34.x | 跨平台桌面应用 |

## 📦 快速开始

### 环境要求
- Node.js >= 20.x
- npm >= 10.x

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
# 启动开发服务器（Web）
npm run dev

# 启动 Electron 开发模式（桌面）
npm run electron:dev
```

### 生产构建

```bash
# 构建 Web 版本
npm run build

# 构建 Windows 桌面应用
npm run dist:win
```

## 📁 项目结构

```
MarkDown-joseph/
├── src/                    # 源代码目录
│   ├── components/         # React 组件
│   │   ├── Editor.tsx      # Markdown 编辑器
│   │   ├── Preview.tsx     # 实时预览组件
│   │   ├── Sidebar.tsx     # 侧边栏（笔记列表）
│   │   ├── Header.tsx      # 顶部标题栏
│   │   ├── TableOfContents.tsx  # 目录导航组件
│   │   ├── NoteItem.tsx    # 笔记项组件
│   │   └── SearchBar.tsx   # 搜索栏组件
│   ├── hooks/              # 自定义 Hooks
│   │   └── useNotes.ts     # 笔记管理 Hook
│   ├── types/              # TypeScript 类型定义
│   │   └── index.ts        # 类型声明
│   ├── utils/              # 工具函数
│   │   └── storage.ts      # 存储操作工具
│   ├── App.tsx             # 主应用组件
│   ├── main.tsx            # 应用入口
│   └── index.css           # 全局样式
├── electron/               # Electron 主进程
│   └── main.js            # Electron 入口文件
├── openspec/               # OpenSpec 规范文档
│   └── changes/           # 变更记录
├── dist/                   # Web 构建输出
├── dist-electron/          # Electron 构建输出
└── package.json            # 项目配置
```

## 🎨 设计规范

### 布局比例

| 区域 | 宽度 | 功能 |
|------|------|------|
| 左侧边栏 | 25% | 笔记列表、搜索、操作按钮 |
| 中间编辑器 | 37.5% | Markdown 编辑区 |
| 右侧预览 | 37.5% | 渲染结果预览 |

### 颜色方案

- 侧边栏背景：`#1a1a1a`
- 编辑器/预览背景：`#2d2d2d`
- 文字颜色：`#ffffff`
- 强调色（标题、链接）：`#00ff00`（绿色）
- 边框颜色：`#3d3d3d`

## 📖 使用指南

### 基本操作

1. **创建笔记**：点击侧边栏「新建笔记」按钮
2. **打开文件**：点击「打开文件」按钮导入本地 `.md` 文件
3. **编辑笔记**：在中间编辑器输入内容，右侧实时预览
4. **搜索笔记**：在侧边栏搜索框输入关键词
5. **删除笔记**：点击笔记右侧的删除按钮（需确认）

### 快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+S` | 保存笔记（自动保存） |
| `Ctrl+E` | 导出 Markdown |
| `Ctrl+P` | 导出 PDF |

### Markdown 支持

支持标准 Markdown 语法：
- 标题（# ~ ######）
- 粗体/斜体（**bold** / *italic*）
- 列表（有序/无序）
- 链接（[text](url)）
- 图片（![alt](url)）
- 代码块（```language）
- 引用（> quote）
- 表格

## 🔧 开发指南

### 代码规范

- 使用 TypeScript，严格模式
- 遵循 ESLint 规则
- 使用 React Hooks 进行状态管理
- 组件命名采用 PascalCase
- 文件命名采用 kebab-case

### 测试命令

```bash
# 类型检查
npm run typecheck

# 代码格式化
npm run format

# 构建验证
npm run build
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

如有问题或建议，欢迎在 GitHub Issues 中反馈。

---

**Made with ❤️ by zzp312**