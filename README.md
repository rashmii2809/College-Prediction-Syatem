# Programmatic SEO Platform

A production-grade React application demonstrating programmatic SEO at scale. This platform generates SEO-optimized pages from structured datasets (colleges, stocks, crypto, jobs) with rich metadata and schema markup.

## 🎨 Design Archetype

**Swiss International + Modern Editorial**

This platform combines rational, grid-based Swiss design with modern editorial typography:
- Clean, data-centric interface inspired by Bloomberg Terminal meets Stripe Docs
- Premium color palette: Deep charcoal (#0F1419) with warm cream (#F7F4ED) and saturated teal (#00D9C0)
- Typography: Space Grotesk (display), Newsreader (body), JetBrains Mono (code)
- Bento grid layout with generous whitespace and tactile depth

## ✨ Features

### Core Components
- **Dynamic Route Pages** – Detail pages with full SEO metadata, JSON-LD schema, and OpenGraph tags
- **Index/Listing Pages** – Filterable, searchable grids with sort capabilities
- **SEO Dashboard** – Visual keyword research showing primary/secondary keywords and search volume
- **Metadata Preview Cards** – Live preview of Google search results and social shares
- **Schema Markup Visualizer** – Collapsible JSON-LD viewer for each page type
- **Performance Metrics Panel** – Lighthouse scores and SEO verification
- **Documentation Sidebar** – Setup instructions and architectural decisions

### Dataset Types
1. **Colleges** – University profiles with admissions data, rankings, and campus information
2. **Stocks** – Real-time stock prices, market data, and sector analysis
3. **Cryptocurrency** – Live crypto prices, market caps, and blockchain insights
4. **Jobs** – Tech job listings with salary ranges and company details

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── DatasetCard.tsx
│   ├── DocumentationSidebar.tsx
│   ├── MetadataPreview.tsx
│   ├── PerformanceMetrics.tsx
│   ├── SchemaVisualizer.tsx
│   └── SEODashboard.tsx
├── data/
│   └── mockData.ts     # Dataset definitions
├── lib/
│   ├── seo.ts          # SEO metadata generation
│   └── utils.ts        # Utility functions
├── pages/              # Route pages
│   ├── CollegesPage.tsx
│   ├── CollegeDetailPage.tsx
│   ├── StocksPage.tsx
│   ├── StockDetailPage.tsx
│   ├── CryptoPage.tsx
│   ├── CryptoDetailPage.tsx
│   ├── JobsPage.tsx
│   └── JobDetailPage.tsx
└── types/
    └── datasets.ts     # TypeScript interfaces
```

## 🔍 SEO Strategy

### Keyword Optimization
- **Primary Keywords**: Target high-volume keywords in H1 and meta titles
- **Secondary Keywords**: Natural incorporation in H2/H3 headings
- **Long-tail Keywords**: Embedded in content descriptions

### Technical SEO
- **Dynamic Metadata**: Unique titles, descriptions, and canonical URLs per page
- **Schema Markup**: JSON-LD structured data (EducationalOrganization, Product, JobPosting)
- **OpenGraph Tags**: Optimized social sharing previews
- **Semantic HTML**: Proper document structure with HTML5 tags

### Performance
- **Code Splitting**: Lazy loading for route pages
- **Optimized Assets**: Efficient image loading and font delivery
- **Core Web Vitals**: Optimized for LCP, FID, and CLS metrics

## 🎯 Routes

- `/` - Homepage with dashboard and dataset overview
- `/colleges` - College listing page
- `/college/:slug` - Individual college detail page
- `/stocks` - Stock listing page
- `/stock/:symbol` - Individual stock detail page
- `/crypto` - Cryptocurrency listing page
- `/crypto/:slug` - Individual crypto detail page
- `/jobs` - Job listing page
- `/job/:slug` - Individual job detail page

## 🛠️ Technologies

- **React 18** with TypeScript
- **React Router** for routing
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Lucide React** for icons
- **Vite** for build tooling

## 📊 SEO Verification

### Check Server-Side Rendering
1. View page source (Ctrl+U or Cmd+U)
2. Verify content is visible in HTML before JavaScript execution
3. Confirm meta tags and schema markup are present

### Validate Schema Markup
1. Use [Google's Rich Results Test](https://search.google.com/test/rich-results)
2. Check the Schema Visualizer component on each page
3. Verify structured data validity

### Test Metadata
1. Use the Metadata Preview component on detail pages
2. Check OpenGraph previews with social media debuggers
3. Verify title and description lengths

## 🎨 Design System

### Colors
- **Background**: `#F7F4ED` (warm cream) / `#0F1419` (dark mode)
- **Primary**: `#00D9C0` (saturated teal)
- **Foreground**: `#0F1419` / `#F7F4ED` (dark mode)

### Typography Scale
- **H1**: 3.5rem (56px) - Page titles
- **H2**: 2rem (32px) - Section headings
- **H3**: 1.5rem (24px) - Subsection headings
- **Body**: 1.125rem (18px) - Content text

### Spacing
- **Section gaps**: 64px (4rem)
- **Card padding**: 32px (2rem)
- **Grid gaps**: 24px (1.5rem)

## 📝 Content Strategy

Each dataset page includes:
- **Optimized title** with primary keyword
- **Meta description** under 160 characters
- **Structured content** with keyword-rich headings
- **Internal links** to related pages
- **Schema markup** for rich snippets

## 🚀 Deployment

The platform is configured for Vite deployment. For production:

```bash
npm run build
```

The `dist/` folder contains the production-ready build.

## 📄 License

This is a demonstration project showcasing programmatic SEO techniques.

---

**Built with Tempo** • Swiss International Design + Modern Editorial
