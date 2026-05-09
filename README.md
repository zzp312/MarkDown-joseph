# MarkDown-joseph

一个基于 React + Electron 的 Markdown 笔记桌面应用。

## 功能特性

- ✅ 三栏布局：笔记列表、编辑器、实时预览
- ✅ Markdown 实时预览
- ✅ 代码语法高亮
- ✅ 悬浮目录导航
- ✅ 导入/导出 Markdown 文件
- ✅ PDF 导出
- ✅ LocalStorage 数据持久化

## 技术栈

- **前端框架**：React 19 + TypeScript
- **构建工具**：Vite 6
- **桌面应用**：Electron
- **样式方案**：Tailwind CSS
- **Markdown**：react-markdown + react-syntax-highlighter

## 快速开始

### 开发模式

```bash
npm install
npm run electron:dev
```

### Web 模式

```bash
npm install
npm run dev
```

### 打包应用

```bash
npm run dist:win
```

## 使用说明

### 基本操作

- 点击「新建笔记」创建新笔记
- 点击「打开文件」导入本地 Markdown 文件
- 在编辑器中输入内容，右侧实时预览
- 点击目录项快速跳转

### 导出功能

- 导出 MD：点击头部「导出 MD」按钮
- 导出 PDF：点击头部「导出 PDF」按钮（通过系统打印）

## 项目结构

```
MarkDown-joseph/
├── src/
│   ├── components/       # React 组件
│   ├── hooks/           # 自定义 Hook
│   ├── types/           # TypeScript 类型
│   ├── utils/           # 工具函数
│   ├── App.tsx          # 主应用组件
│   └── main.tsx         # 入口文件
├── electron/            # Electron 主进程
├── openspec/            # OpenSpec 规范文档
├── package.json
└── vite.config.ts
```

## License

MIT