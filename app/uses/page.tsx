import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uses',
  description: 'The tools, hardware, and software I use daily.',
}

const sections = [
  {
    title: 'Hardware',
    items: [
      { name: 'Laptop', desc: 'MacBook Pro M3 — 14", 18GB RAM. My daily driver for everything.' },
      { name: 'Monitor', desc: '27" 4K LG UltraFine. Color accurate, sharp text, USB-C hub built-in.' },
      { name: 'Keyboard', desc: 'Keychron K3 Pro — low profile, tactile switches, wireless.' },
      { name: 'Mouse', desc: 'Logitech MX Master 3S. The scroll wheel alone is worth it.' },
    ],
  },
  {
    title: 'Editor & Terminal',
    items: [
      { name: 'VS Code', desc: 'Primary editor. Extensions: ESLint, Prettier, Tailwind IntelliSense, GitLens.' },
      { name: 'Zed', desc: 'Testing as a secondary editor. Blazing fast, minimal UI.' },
      { name: 'Terminal', desc: 'Warp — modern Rust-based terminal with AI command suggestions.' },
      { name: 'Theme', desc: 'Dark mode everywhere. VS Code: "Dark+". Terminal: "Warp Dark".' },
    ],
  },
  {
    title: 'Browser & Extensions',
    items: [
      { name: 'Arc Browser', desc: 'Primary browser. Spaces, easels, and the command bar changed how I browse.' },
      { name: 'Chrome', desc: 'Secondary for dev tools and testing.' },
      { name: 'Extensions', desc: 'uBlock Origin, React DevTools, JSON Viewer, Wappalyzer.' },
    ],
  },
  {
    title: 'AI Tools',
    items: [
      { name: 'ChatGPT', desc: 'Brainstorming, debugging, and explaining complex concepts.' },
      { name: 'Claude', desc: 'Long-form writing and code review. Better context window.' },
      { name: 'GitHub Copilot', desc: 'Inline suggestions. Saves time on boilerplate.' },
    ],
  },
  {
    title: 'Productivity',
    items: [
      { name: 'Notion', desc: 'Project docs, notes, and planning. Everything lives here.' },
      { name: 'Linear', desc: 'Issue tracking for personal projects. Fast, keyboard-first.' },
      { name: 'Figma', desc: 'UI design and prototyping. All site designs start here.' },
    ],
  },
  {
    title: 'Self-hosted / Cloud',
    items: [
      { name: 'Vercel', desc: 'Hosting for all Next.js projects. Zero-config deployments.' },
      { name: 'Upstash Redis', desc: 'Rate limiting, KV storage, session management.' },
      { name: 'Vercel Blob', desc: 'Image uploads and file storage for the admin panel.' },
    ],
  },
]

export default function UsesPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-24 pt-32">
      <div className="mb-16">
        <h1 className="text-h1 font-bold text-text-primary mb-4">Uses</h1>
        <p className="text-body-lg text-text-secondary">
          The tools I use to build, learn, and ship. Updated as my stack evolves.
        </p>
      </div>

      <div className="space-y-16">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-h3 font-semibold text-text-primary mb-6 pb-2 border-b border-border-subtle">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div key={item.name} className="flex flex-col gap-1">
                  <span className="text-body font-medium text-text-primary">{item.name}</span>
                  <span className="text-body-sm text-text-secondary leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}