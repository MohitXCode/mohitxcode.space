import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Labs',
  description: 'Experiments, mini-apps, and weird ideas. The workshop.',
}

const labs = [
  {
    title: 'Terminal Easter Egg',
    description: 'Type "mohit" anywhere on the site to unlock a fullscreen terminal experience.',
    category: 'UI Concept',
    status: 'Live',
    tags: ['React', 'Framer Motion'],
  },
  {
    title: 'AI Prompt Optimizer',
    description: 'Tool that refines and structures AI prompts for better outputs.',
    category: 'AI',
    status: 'WIP',
    tags: ['Next.js', 'OpenAI', 'TypeScript'],
  },
  {
    title: 'CSS Grid Generator',
    description: 'Visual tool for generating complex CSS grid layouts with drag-and-drop.',
    category: 'Tool',
    status: 'Live',
    tags: ['React', 'CSS'],
  },
  {
    title: 'Vibe Coded Calculator',
    description: 'A calculator built entirely through AI prompts. Testing vibe coding limits.',
    category: 'Weird',
    status: 'Broken (intentionally)',
    tags: ['AI', 'Experiment'],
  },
  {
    title: 'Git Commit Visualizer',
    description: 'Turn your git history into an animated tree visualization.',
    category: 'Tool',
    status: 'WIP',
    tags: ['D3.js', 'Git', 'Node.js'],
  },
  {
    title: 'Markdown Previewer',
    description: 'Real-time markdown editor with custom syntax highlighting.',
    category: 'Mini App',
    status: 'Live',
    tags: ['React', 'Markdown'],
  },
]

const statusColors = {
  Live: 'bg-semantic-success/10 text-semantic-success border-semantic-success/20',
  WIP: 'bg-semantic-warning/10 text-semantic-warning border-semantic-warning/20',
  'Broken (intentionally)': 'bg-semantic-error/10 text-semantic-error border-semantic-error/20',
  Retired: 'bg-text-disabled/10 text-text-disabled border-text-disabled/20',
}

const categoryColors = {
  AI: 'bg-semantic-info/10 text-semantic-info',
  Tool: 'bg-semantic-success/10 text-semantic-success',
  'Mini App': 'bg-semantic-warning/10 text-semantic-warning',
  'UI Concept': 'bg-accent-muted text-text-secondary',
  Weird: 'bg-semantic-error/10 text-semantic-error',
  Automation: 'bg-semantic-info/10 text-semantic-info',
}

export default function LabsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-24 pt-32">
      <div className="mb-16">
        <h1 className="text-h1 font-bold text-text-primary mb-4">Labs</h1>
        <p className="text-body-lg text-text-secondary max-w-lg">
          Experiments, mini-apps, and weird ideas. Some work, some break, all teach.
        </p>
      </div>

      <div className="mb-12 p-8 rounded-2xl bg-bg-subtle border border-border-default">
        <span className="px-3 py-1 rounded-full text-caption font-medium bg-semantic-warning/10 text-semantic-warning mb-4 inline-block">
          Lab of the Month
        </span>
        <h2 className="text-h2 font-bold text-text-primary mb-3">Terminal Easter Egg</h2>
        <p className="text-body text-text-secondary leading-relaxed max-w-xl mb-6">
          Type "mohit" anywhere on the site to unlock a fullscreen terminal overlay with realistic boot sequence and hidden commands.
        </p>
        <div className="flex flex-wrap gap-2">
          {['React', 'Framer Motion', 'Canvas API'].map((tag) => (
            <span key={tag} className="px-2 py-1 rounded-md bg-accent-muted text-caption text-text-tertiary font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {labs.map((lab, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl bg-bg-subtle border border-border-subtle hover:border-border-default hover:bg-bg-muted transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <span className={`px-2.5 py-1 rounded-full text-caption font-medium border ${statusColors[lab.status as keyof typeof statusColors]}`}>
                {lab.status}
              </span>
              <span className={`px-2 py-1 rounded-md text-caption font-medium ${categoryColors[lab.category as keyof typeof categoryColors]}`}>
                {lab.category}
              </span>
            </div>

            <h3 className="text-h4 font-medium text-text-primary mb-2 group-hover:text-text-accent transition-colors">
              {lab.title}
            </h3>
            <p className="text-body-sm text-text-secondary leading-relaxed mb-6">
              {lab.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {lab.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 rounded-md bg-accent-muted text-caption text-text-tertiary font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}