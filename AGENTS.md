## 项目概述

ChinaShoe.cc 是一个 B2B 鞋类行业垂直内容网站，面向全球设计师、批发商和零售商，提供鞋类百科、供应商目录、行业新闻、设计灵感和采购指南。

## 技术栈

- **框架**：Astro 5.x（静态站点生成器）
- **样式**：Tailwind CSS 3.x
- **语言**：TypeScript
- **部署**：Cloudflare Pages
- **包管理器**：pnpm（平台要求）

## 目录结构

```
/workspace/projects/          # 工作区根目录 = 技术项目根目录
├── src/
│   ├── components/          # 可复用 UI 组件
│   ├── layouts/             # 页面布局
│   ├── pages/               # 路由页面
│   ├── content/             # 内容集合（Markdown）
│   ├── data/                # 静态数据
│   └── assets/              # 静态资源
├── public/                  # 公开静态资源
├── scripts/                 # 脚本（coze-preview-*, coze-deploy-*）
├── data/                    # 生成的数据（本地，不推送）
├── output/                  # 构建输出（本地，不推送）
├── docs/                    # 文档
├── .coze                    # Coze 项目配置
├── astro.config.mjs         # Astro 配置
├── tailwind.config.mjs      # Tailwind 配置
├── wrangler.toml            # Cloudflare Pages 配置
└── tsconfig.json            # TypeScript 配置
```

## 关键入口 / 核心模块

- **页面入口**：`src/pages/index.astro`
- **基础布局**：`src/layouts/BaseLayout.astro`
- **导航组件**：`src/components/Header.astro`、`src/components/Sidebar.astro`
- **内容集合**：`src/content/` 目录下的 encyclopedia、news、suppliers 等

## 运行与预览

```bash
# 安装依赖（使用 pnpm）
pnpm install

# 开发模式（默认端口 4321）
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## 预览链路

- **预览端口**：5000
- **预览脚本**：
  - `scripts/coze-preview-build.sh` - 安装依赖（pnpm install）
  - `scripts/coze-preview-run.sh` - 启动 Astro dev server（0.0.0.0:5000）
- **验证方式**：curl http://localhost:5000 返回 200
- **预览绑定**：必须监听 0.0.0.0:5000（IPv4 全接口）

## 部署配置

- **部署类型**：静态站点服务（service/web）
- **运行时**：nodejs-24
- **构建脚本**：`scripts/coze-deploy-build.sh` - 执行 `pnpm build`
- **运行脚本**：`scripts/coze-deploy-run.sh` - 使用 `serve` 提供 dist 目录静态服务（端口 5000）
- **依赖**：`serve`（devDependency，用于静态服务）

## 用户偏好与长期约束

1. **Cloudflare Pages 部署**：所有更改需确保 Cloudflare Pages 兼容
2. **推送前验证**：每次推送前必须本地运行 `pnpm build` 确保构建通过
3. **脚本规则**：Python 脚本本地运行，不使用模拟数据；抓取失败必须报错
4. **禁止推送**：`scripts/`、`data/`、`output/`、`node_modules/`、`.env` 不推送

## 常见问题和预防

1. **端口冲突**：开发服务器默认 4321，预览端口 5000，确保端口可用
2. **依赖安装**：必须使用 `pnpm`，不要使用 `npm` 或 `yarn`
3. **构建失败**：检查 `astro.config.mjs` 和 `wrangler.toml` 是否兼容 Cloudflare Pages
