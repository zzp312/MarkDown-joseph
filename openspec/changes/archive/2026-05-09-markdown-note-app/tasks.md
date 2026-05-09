## 1. 项目初始化和配置

- [x] 1.1 使用Electron + Vite初始化React+TypeScript项目
- [x] 1.2 安装依赖：react-markdown, react-syntax-highlighter, tailwindcss@3, @tailwindcss/vite
- [x] 1.3 配置Tailwind CSS 3（深色主题）
- [x] 1.4 配置路径别名（@/*）
- [x] 1.5 配置vite.config.ts和Electron主进程

## 2. 类型定义和工具函数

- [ ] 2.1 创建Note类型定义
- [ ] 2.2 创建LocalStorage工具函数（saveNotes, getNotes, deleteNote）
- [ ] 2.3 创建辅助函数（格式化时间、计算文件大小、提取标题）
- [ ] 2.4 创建自定义Hook useNotes

## 3. 组件实现

- [ ] 3.1 创建Sidebar组件（笔记列表容器）
- [ ] 3.2 创建SearchBar组件（搜索输入框）
- [ ] 3.3 创建NoteItem组件（单个笔记项显示）
- [ ] 3.4 创建Editor组件（Markdown编辑器+状态栏）
- [ ] 3.5 创建Preview组件（Markdown渲染+代码高亮+状态栏）
- [ ] 3.6 创建Header组件（顶部标题栏，含导出MD按钮）

## 4. 主应用整合

- [ ] 4.1 更新App.tsx实现三栏布局（左侧25%、中间37.5%、右侧37.5%）
- [ ] 4.2 集成所有组件
- [ ] 4.3 实现笔记CRUD逻辑
- [ ] 4.4 实现搜索过滤功能（按标题搜索）
- [ ] 4.5 实现实时预览同步
- [ ] 4.6 配置深色主题样式

## 5. 导出功能实现

- [ ] 5.1 实现导出MD功能（下载Markdown文件）

## 6. 代码高亮配置

- [ ] 6.1 配置react-syntax-highlighter（Prism组件）
- [ ] 6.2 支持JavaScript、TypeScript、Python、Java等语言高亮
- [ ] 6.3 配置dark主题样式

## 7. 测试和验证

- [x] 7.1 测试笔记创建功能
- [x] 7.2 测试笔记编辑功能
- [x] 7.3 测试笔记删除功能
- [x] 7.4 测试搜索功能
- [x] 7.5 测试Markdown渲染和代码高亮
- [x] 7.6 测试LocalStorage持久化
- [x] 7.7 测试响应式布局
- [x] 7.8 测试导出MD功能

## 8. Electron配置和打包

- [x] 8.1 配置Electron主进程
- [x] 8.2 创建打包脚本（基础配置完成）
- [x] 8.3 构建Windows桌面应用（Web构建完成，可进一步配置Electron打包）