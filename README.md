# mohitxcode.space

A modern, full-featured web application built with **Next.js 16**, **React 19**, and **TypeScript**. This project serves as a personal portfolio/platform featuring MDX-based content, real-time interactions, rate limiting, and email capabilities.

## 📋 Overview

**mohitxcode.space** is a Next.js application that combines:
- **Content Management**: MDX-based blog/content system using `next-mdx-remote`
- **Forms & Validation**: React Hook Form with Zod schema validation
- **Styling**: Modern UI with Tailwind CSS 4 and Framer Motion animations
- **Rate Limiting**: Upstash-based request rate limiting for API endpoints
- **Email Services**: Resend for transactional emails
- **Caching**: Redis integration for performance optimization
- **Code Highlighting**: Syntax highlighting with `rehype-pretty-code`
- **Search**: Full-text search with Fuse.js

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ or **Bun** runtime
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd mohitxcode.space
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the project root with required variables (see [Environment Setup](#environment-setup) section).

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📦 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Framework** | Next.js 16.2.6, React 19.2.4 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4, PostCSS 4 |
| **Content** | MDX with `next-mdx-remote`, `remark-gfm`, `rehype-pretty-code` |
| **Forms** | React Hook Form 7.75.0 with Zod validation |
| **UI Components** | Lucide React icons, Framer Motion animations |
| **Backend Services** | Redis 5.12.1, Upstash rate limiting |
| **Email** | Resend 6.12.3 |
| **Search** | Fuse.js 7.3.0 |
| **HTML Sanitization** | isomorphic-dompurify 3.13.0 |
| **Code Quality** | ESLint 9, Prettier 3.8.3 |
| **Password Security** | bcryptjs 3.0.3 |

---

## 📁 Project Structure

```
mohitxcode.space/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Main homepage
│   ├── layout.tsx           # Root layout
│   └── [...routes]/         # Dynamic routes
├── components/              # Reusable React components
├── config/                  # Configuration files
├── content/                 # MDX content (blog posts, docs)
├── lib/                     # Utility functions and helpers
├── styles/                  # Global styles
├── public/                  # Static assets (images, fonts)
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.ts          # Next.js configuration
├── eslint.config.mjs       # ESLint configuration
└── AGENTS.md               # Agent-specific documentation
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload on port 3000 |
| `npm run build` | Build optimized production bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint on project files |

---

## ⚙️ Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
# Redis/Upstash Configuration
UPSTASH_REDIS_REST_URL=<your-redis-url>
UPSTASH_REDIS_REST_TOKEN=<your-redis-token>

# Resend Email Configuration
RESEND_API_KEY=<your-resend-api-key>

# Rate Limiting Configuration
UPSTASH_RATELIMIT_LIMIT=<requests-per-window>
UPSTASH_RATELIMIT_WINDOW=<time-window-in-ms>

# Other Environment Variables
# Add additional variables as needed for your deployment
```

---

## 🔧 Development Workflow

### Editing Content
- **MDX Files**: Place content in the `content/` directory. The app automatically processes and renders MDX pages.
- **Page Files**: Edit `app/page.tsx` or create new routes in the `app/` directory.
- **Components**: Reusable components go in `components/`.
- **Styling**: Use Tailwind CSS classes; global styles in `styles/`.

### Hot Reload
The development server supports:
- **Page edits**: Automatically refresh in the browser
- **Component changes**: Hot Module Replacement (HMR) for instant updates
- **Styles**: Tailwind CSS changes applied in real-time

### Code Quality
- Run `npm run lint` to check for code quality issues.
- Use Prettier for automatic code formatting (configured in `package.json`).

---

## 📧 Form & Validation

### React Hook Form + Zod
This project uses **React Hook Form** for form management and **Zod** for schema validation:

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

export function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}
```

---

## 🌐 API & Rate Limiting

### Rate Limiting with Upstash
Rate limiting is configured using **Upstash** to protect API endpoints:

```typescript
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '1 h'),
});

export async function GET(request: Request) {
  const { success } = await ratelimit.limit('identifier');
  if (!success) return new Response('Too Many Requests', { status: 429 });
  // Handle request
}
```

---

## 📨 Email Integration

### Resend
Send transactional emails using **Resend**:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'noreply@mohitxcode.space',
  to: 'user@example.com',
  subject: 'Welcome!',
  html: '<p>Hello, welcome to mohitxcode.space!</p>',
});
```

---

## 🔍 Search Functionality

### Fuse.js
Implement full-text search with **Fuse.js**:

```typescript
import Fuse from 'fuse.js';

const items = [
  { id: 1, title: 'First Post', content: 'Content...' },
  { id: 2, title: 'Second Post', content: 'More content...' },
];

const fuse = new Fuse(items, {
  keys: ['title', 'content'],
  threshold: 0.3,
});

const results = fuse.search('keyword');
```

---

## 🎨 Styling with Tailwind CSS

### Configuration
Tailwind CSS 4 is configured in `tailwind.config.ts`. The project also uses:
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons

```typescript
// Example: Using Framer Motion
import { motion } from 'framer-motion';

export function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Content
    </motion.div>
  );
}
```

---

## 🚀 Deployment

### Deploy on Vercel (Recommended)

Vercel is the official platform for Next.js and provides seamless deployment:

1. **Push your repository to GitHub** (if not already done):
   ```bash
   git remote add origin <github-repo-url>
   git push -u origin main
   ```

2. **Create a Vercel account** at [vercel.com](https://vercel.com)

3. **Import your project**:
   - Visit [vercel.com/new](https://vercel.com/new)
   - Select your GitHub repository
   - Configure environment variables (add your `.env.local` variables)
   - Click "Deploy"

4. **Set up environment variables in Vercel**:
   - Go to Project Settings → Environment Variables
   - Add all variables from your `.env.local`

5. **Your app is live!** 🎉
   - Production URL will be provided by Vercel

### Alternative Deployments
- **Docker**: Build a Docker image and deploy to cloud platforms (AWS, Google Cloud, Azure)
- **Self-hosted**: Use `npm run build` and `npm start` with any Node.js-compatible hosting

---

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form Docs](https://react-hook-form.com)
- [Zod Documentation](https://zod.dev)

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📝 License

This project is provided as-is. Check the repository for specific license information.

---

## 📞 Support & Contact

For questions, issues, or suggestions:
- **Open an Issue**: Create an issue on GitHub
- **Contact**: Reach out via mohitxcode.space

---

## ✨ Additional Notes

- **Next.js Version**: This project uses Next.js 16.2.6. Be aware that newer versions may have breaking changes.
- **MDX Support**: The app uses `next-mdx-remote` for processing MDX files. Store content in the `content/` directory.
- **Security**: Sensitive data like API keys should only be stored in `.env.local` and never committed to version control.
- **Performance**: Redis caching and Upstash rate limiting help optimize performance and protect against abuse.

---

**Happy coding! 🚀**
