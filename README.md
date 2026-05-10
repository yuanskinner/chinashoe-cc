# ChinaShoe.cc

B2B Footwear Knowledge Hub - China Shoe Source Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D18.14.1-green.svg)
![Astro](https://img.shields.io/badge/astro-5.1.6-purple.svg)

## Overview

ChinaShoe.cc is a B2B footwear vertical content website targeting designers, wholesalers, and retailers worldwide. The platform provides:

- **Footwear Encyclopedia**: Comprehensive knowledge base covering shoe types, materials, manufacturing processes
- **Supplier Directory**: Verified manufacturers from China's major production regions
- **Industry News**: Latest updates on footwear manufacturing, trade, and trends
- **Design Inspiration**: Color palettes, trends, and creative concepts
- **Market Data**: Pricing guides, industry reports, and market analysis
- **Sourcing Guides**: Step-by-step guides for importing from China

## Tech Stack

- **Framework**: [Astro 5.x](https://astro.build/)
- **Styling**: [Tailwind CSS 3.x](https://tailwindcss.com/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Package Manager**: npm

## Project Structure

```
chinashoe-cc/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Breadcrumb.astro
│   │   └── Sidebar.astro
│   ├── layouts/          # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/             # Route pages
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── encyclopedia/
│   │   ├── suppliers/
│   │   ├── news/
│   │   ├── inspiration/
│   │   ├── market/
│   │   └── sourcing/
│   ├── content/           # Content collections
│   ├── styles/            # Global styles
│   ├── utils/             # Utility functions
│   └── assets/            # Static assets
├── public/                # Static public assets
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18.14.1 or higher
- npm 9.x or higher

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

```bash
# Start local development server
npm run dev

# The site will be available at http://localhost:4321
```

## Deployment to Cloudflare Pages

### Method 1: Direct Deployment

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Navigate to Workers & Pages → Create application
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
6. Add environment variable: `NODE_VERSION`: `18`
7. Click **Deploy**

### Method 2: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist
```

### Build Configuration

The `astro.config.mjs` is pre-configured for Cloudflare Pages:

- Site URL: `https://chinashoe.cc`
- Sitemap generation enabled
- Tailwind CSS integration
- HTML compression enabled

## SEO Features

The project includes comprehensive SEO optimization:

- ✅ Sitemap generation (`/sitemap-index.xml`)
- ✅ Robots.txt with AI crawler permissions
- ✅ Open Graph meta tags
- ✅ Twitter Card meta tags
- ✅ Schema.org structured data (Organization, WebSite, BreadcrumbList)
- ✅ AI crawler friendly (GPTBot, ClaudeBot, PerplexityBot allowed)

## Content Collections

Content is organized using Astro's Content Collections:

- `encyclopedia`: Footwear knowledge articles
- `news`: Industry news and updates
- `suppliers`: Supplier directory entries
- `guides`: Sourcing and procurement guides

## Customization

### Site Configuration

Edit `astro.config.mjs` to update:
- Site URL
- Sitemap settings
- Build options

### Styling

Tailwind CSS configuration is in `tailwind.config.mjs`. Custom colors and fonts can be added there.

### Adding New Pages

Create new `.astro` files in the `src/pages/` directory. Use existing pages as templates.

## License

This project is licensed under the MIT License.

## Contact

- **Email**: contact@chinashoe.cc
- **Website**: https://chinashoe.cc
- **LinkedIn**: https://linkedin.com/company/chinashoe
- **Twitter**: https://twitter.com/chinashoecc
