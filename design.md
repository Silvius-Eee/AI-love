# 项目设计文档

## 目录结构 

.
├── src/
│ ├── app/
│ │ ├── layout.tsx # 根布局
│ │ ├── page.tsx # 首页
│ │ └── globals.css # 全局样式
│ ├── components/ # 组件目录
│ └── pages/ # 页面目录
├── public/ # 静态资源
└── 配置文件
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs


## 技术栈

- **框架**: Next.js 15.1.0
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **代码规范**: ESLint
- **包管理**: npm/yarn/pnpm/bun

## 核心特性

- App Router 架构
- 字体优化 (next/font)
- 图片优化 (next/image)
- 暗黑模式支持
- TypeScript 严格模式
- CSS 模块化

## 配置说明

### TypeScript 配置
- 严格模式开启
- 模块解析使用 bundler
- 路径别名 @/* -> src/*

### Tailwind 配置
- 自定义颜色变量支持
- 响应式设计支持
- JIT 模式

### ESLint 配置
- Next.js 推荐规则
- TypeScript 支持

## 开发注意事项

1. 代码规范
   - 使用 TypeScript 严格模式
   - 遵循 ESLint 规则

2. 样式开发
   - 优先使用 Tailwind 类
   - 自定义样式写在 globals.css

3. 性能优化
   - 使用 next/image 优化图片
   - 使用 next/font 优化字体

4. 部署
   - 推荐使用 Vercel 部署
   - 支持环境变量配置