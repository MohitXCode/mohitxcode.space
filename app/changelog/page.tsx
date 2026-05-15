import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Site updates, new features, and fixes.',
}

const changes = [
  {
    version: '2.0.0',
    date: '2025-05-15',
    changes: [
      'Complete site redesign with Next.js 15',
      'Added dark/light theme toggle',
      'New blog system with MDX support',
      'Command palette with ⌘K',
      'Dashboard with public stats',
    ],
  },
  {
    version: '1.5.0',
    date: '2025-04-01',
    changes: [
      'Added projects page with filtering',
      'Labs section for experiments',
      'Contact form with validation',
    ],
  },
  {
    version: '1.0.0',
    date: '2025-03-01',
    changes: [
      'Initial launch',
      'Basic portfolio layout',
      'Hero section with animations',
    ],
  },
]

export default function ChangelogPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-24 pt-32">
      <div className="mb-16">
        <h1 className="text-h1 font-bold text-text-primary mb-4">Changelog</h1>
        <p className="text-body-lg text-text-secondary">
          What changed, when, and why. This site is a living project.
        </p>
      </div>

      <div className="space-y-12">
        {changes.map((release) => (
          <div key={release.version} className="relative pl-8 border-l border-border-subtle">
            <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-text-primary -translate-x-[5px]" />
            
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-h3 font-semibold text-text-primary">{release.version}</h2>
              <span className="text-caption text-text-tertiary font-mono">{release.date}</span>
            </div>

            <ul className="space-y-2">
              {release.changes.map((change, i) => (
                <li key={i} className="text-body text-text-secondary flex items-start gap-2">
                  <span className="text-semantic-success mt-1.5">+</span>
                  {change}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}