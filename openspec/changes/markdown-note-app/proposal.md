## Why

用户需要一个简洁高效的Markdown笔记应用，支持实时预览、本地数据存储和笔记管理功能。现有的在线笔记工具往往需要网络连接，而用户希望有一个可以直接在桌面打开的离线应用，提高写作效率和数据安全性。

## What Changes

- 创建一个基于React+TypeScript+Vite的Markdown笔记应用
- 实现三栏布局：左侧25%为笔记列表，中间37.5%为编辑器，右侧37.5%为实时预览
- 支持笔记的创建、编辑、删除和搜索功能
- 使用LocalStorage进行本地数据持久化
- 集成react-markdown实现Markdown解析
- 使用react-syntax-highlighter实现代码高亮
- 使用Tailwind CSS进行样式设计
- **注意**：纯React项目只能在浏览器中运行，如需桌面端应用需额外集成Electron

## Capabilities

### New Capabilities

- `note-management`: 笔记的创建、编辑、删除和列表展示
- `markdown-preview`: 实时Markdown渲染和预览
- `note-search`: 笔记搜索功能
- `local-storage`: LocalStorage数据持久化

### Modified Capabilities

- 无

## Impact

- 技术栈：React 19 + TypeScript + Vite
- 依赖：react-markdown, react-syntax-highlighter, Tailwind CSS 3
- 数据存储：浏览器LocalStorage
- 桌面端打包：Electron（可选）