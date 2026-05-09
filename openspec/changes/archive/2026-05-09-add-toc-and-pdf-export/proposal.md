## Why

当前Markdown笔记应用缺少目录导航功能，用户在阅读长文档时无法快速定位和跳转。另外，用户需要将笔记导出为PDF格式以便分享和存档，现有的导出MD功能已不能满足所有使用场景。

## What Changes

- 新增悬浮目录导航组件，自动解析Markdown内容生成文章大纲
- 目录支持点击跳转，点击标题可滚动到对应位置
- 新增PDF导出功能，通过系统打印对话框实现
- 修改导出按钮逻辑，同时支持导出MD和PDF两种格式

## Capabilities

### New Capabilities

- `table-of-contents`: 悬浮目录导航，自动提取Markdown标题生成可点击的大纲
- `pdf-export`: PDF导出功能，通过Electron系统打印实现

### Modified Capabilities

- `note-management`: 修改现有笔记管理功能，新增打开现有MD文档的支持

## Impact

- 技术栈：React + TypeScript + Vite + Electron
- 新增依赖：可能需要额外库解析Markdown标题结构
- 现有组件：Header组件需修改以支持PDF导出按钮
- Electron配置：可能需要配置打印功能权限
