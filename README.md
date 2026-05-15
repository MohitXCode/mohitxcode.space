<div align="center">

# ✨ MohitXCode

### `mohitxcode.space` · Developer Building in Public

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-EF44A1?style=flat-square&logo=framer)](https://framer.com/motion)

<p align="center">
  <img src="https://img.shields.io/badge/Lighthouse-95+-brightgreen?style=flat-square" alt="Lighthouse Score">
  <img src="https://img.shields.io/badge/WCAG-2.2_AA-blue?style=flat-square" alt="Accessibility">
  <img src="https://img.shields.io/badge/Security-A+-red?style=flat-square" alt="Security">
</p>

**A production-grade portfolio built with obsessive attention to detail.**

[🌐 Live Site](https://mohitxcode.space) · [📖 Blog](https://mohitxcode.space/blog) · [💻 GitHub](https://github.com/mohitxcode)

</div>

---

## 🎯 Philosophy

> *"Build every line as if a security researcher is running a pentest the day it launches, a Google engineer is checking Core Web Vitals live, and a senior designer from Linear is reviewing the UI in a code review."*

This isn't a template. It's a statement. Every animation, every color token, every API route is intentional.

---

## 🏗️ Architecture

```
mohitxcode.space/
├── 🎨 Design System
│   ├── Dark-first color tokens (WCAG AA compliant)
│   ├── 8pt spacing grid (zero exceptions)
│   ├── Geist + Geist Mono typography (zero CLS)
│   └── Framer Motion animation library
│
├── 📄 Pages (ISR + Static)
│   ├── /              → Hero + Featured Projects + Blogs + Tech Stack
│   ├── /about         → Long-form story + Timeline + Reading List
│   ├── /projects      → Filterable grid (AI/Web/Tools/Experiments)
│   ├── /blog          → MDX blog with search + tags
│   ├── /blog/[slug]   → Individual posts with reading time
│   ├── /labs          → Bento grid experiments
│   ├── /uses          → Hardware/software stack
│   ├── /dashboard     → Public stats + contribution graph
│   ├── /contact       → Form with validation + honeypot
│   ├── /now           → What I'm doing right now
│   └── /changelog     → Site evolution history
│
├── 🔧 API Routes (Edge Runtime)
│   ├── /api/contact        → Rate-limited form handler
│   ├── /api/rss            → RSS 2.0 feed
│   ├── /api/og             → Dynamic OG images (1200×630)
│   ├── /api/resume.json    → JSONResume schema
│   ├── /api/card           → curl-able terminal business card
│   ├── /api/__health       → Health check endpoint
│   └── /api/__version      → Deploy info (git SHA, branch)
│
├── 🛡️ Security
│   ├── Zod validation (client + server)
│   ├── Honeypot fields (anti-spam)
│   ├── CSP headers
│   ├── Input sanitization
│   └── No secrets in git history
│
└── ⚡ Performance
    ├── ISR (Incremental Static Regeneration)
    ├── next/image optimization (AVIF/WebP)
    ├── Font preloading (zero layout shift)
    ├── Code splitting + lazy loading
    └── Edge runtime where possible
```

---

## ✨ Features

| Feature | Implementation |
|---------|---------------|
| **🎭 Theme Toggle** | Dark / Light / System with instant switch, no flash |
| **⌘K Command Palette** | Fuzzy search across all pages, keyboard navigation |
| **📊 Scroll Progress** | Animated progress bar on every page |
| **🔄 Text Rotator** | "building in public" → "learning by shipping" → ... |
| **🎴 Dynamic OG Images** | Auto-generated per page with title, type, tags |
| **📱 Responsive** | Mobile-first, 1→2→3 column grids |
| **♿ Accessibility** | WCAG 2.2 AA, keyboard navigation, screen reader support |
| **🎨 Design Tokens** | Zero raw hex values, all via semantic tokens |
| **🚀 Edge APIs** | Sub-100ms response times globally |

---

## 🛠️ Tech Stack

```json
{
  "Framework": "Next.js 15 (App Router, Turbopack)",
  "Language": "TypeScript 5.5 (strict mode)",
  "Styling": "Tailwind CSS 4 + CSS custom properties",
  "Animation": "Framer Motion 11",
  "Icons": "Lucide React",
  "Content": "MDX + gray-matter",
  "Validation": "Zod",
  "Deployment": "Vercel (Edge Runtime)"
}
```

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/mohitxcode/mohitxcode.space.git
cd mohitxcode.space

# 2. Install
npm install

# 3. Environment
cp .env.example .env.local
# Fill in your values

# 4. Dev server
npm run dev
# → http://localhost:3000

# 5. Production build
npm run build
npm run start
```

---

## 📁 Content Management

Blog posts and projects are MDX files:

```
content/
├── blog/
│   └── my-post.mdx      ← Write here
└── projects/
    └── my-project.mdx   ← Add here
```

**Frontmatter schema:**
```yaml
---
title: 'Post Title'
description: 'SEO description (50-160 chars)'
date: '2025-05-15'
tags: ['Next.js', 'TypeScript']
published: true
slug: 'custom-slug'
---
```

---

## 🧪 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Form submission with validation |
| `/api/rss` | GET | RSS 2.0 feed of all posts |
| `/api/og?title=...` | GET | Dynamic OG image (PNG) |
| `/api/resume.json` | GET | JSONResume v1.0 schema |
| `/api/card` | GET | Terminal business card (plain text) |
| `/api/__health` | GET | `{ status: "ok" }` |
| `/api/__version` | GET | `{ version, sha, branch }` |

---

## 🎨 Design System

```ts
// Colors (dark-first)
bg: {
  base:     '#0a0a0a',    // page root
  subtle:   '#111111',    // cards
  muted:    '#1a1a1a',    // hover
  elevated: '#222222',    // modals
}

text: {
  primary:   '#ededed',   // headings
  secondary: '#a1a1aa',   // body
  tertiary:  '#71717a',   // captions
}

// Spacing (8pt grid)
4px → 8px → 16px → 24px → 32px → 48px → 64px → 96px → 128px
```

---

## 🛡️ Security Checklist

- [x] `npm audit` — zero high/critical vulnerabilities
- [x] No secrets in git history
- [x] `.env.local` in `.gitignore`
- [x] Zod validation on all API routes
- [x] Honeypot fields on contact form
- [x] Input sanitization (DOMPurify ready)
- [x] CSP headers configured
- [x] Rate limiting ready (Upstash)

---

## 📊 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| LCP | < 1.2s | ✅ |
| INP | < 100ms | ✅ |
| CLS | < 0.05 | ✅ |
| Lighthouse | ≥ 95 | ✅ |

---

## 📝 License

MIT — Built with curiosity and shipped with confidence.

---

<div align="center">

**Built by [MohitXCode](https://mohitxcode.space)**

*Still learning. Always shipping.*

</div>
