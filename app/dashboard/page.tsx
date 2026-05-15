import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Public stats and growth metrics.',
}

const stats = [
  {
    label: 'GitHub Repos',
    value: '12',
    subtext: 'Public repositories',
    trend: '+3 this month',
  },
  {
    label: 'Total Commits',
    value: '847',
    subtext: 'Last 30 days',
    trend: '+156 this week',
  },
  {
    label: 'Stars Earned',
    value: '234',
    subtext: 'Across all projects',
    trend: '+45 this month',
  },
  {
    label: 'LeetCode Solved',
    value: '156',
    subtext: 'Problems total',
    trend: 'Easy: 89 | Med: 52 | Hard: 15',
  },
  {
    label: 'Current Streak',
    value: '42',
    subtext: 'Days coding',
    trend: 'Longest: 67 days',
  },
  {
    label: 'Blog Posts',
    value: '8',
    subtext: 'Published articles',
    trend: '+2 this month',
  },
]

export default function DashboardPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-24 pt-32">
      <div className="mb-16">
        <h1 className="text-h1 font-bold text-text-primary mb-4">Dashboard</h1>
        <p className="text-body-lg text-text-secondary max-w-lg">
          Transparency about growth. Data as identity. Updated manually for now.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-bg-subtle border border-border-subtle hover:border-border-default transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-caption text-text-tertiary uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
            
            <div className="mb-2">
              <span className="text-h2 font-bold text-text-primary">{stat.value}</span>
            </div>
            
            <p className="text-body-sm text-text-secondary mb-3">{stat.subtext}</p>
            
            <span className="text-caption text-semantic-success font-mono">
              {stat.trend}
            </span>
          </div>
        ))}
      </div>

      {/* Contribution graph placeholder */}
      <div className="mt-12 p-6 rounded-xl bg-bg-subtle border border-border-subtle">
        <h2 className="text-h4 font-medium text-text-primary mb-4">Contribution Graph</h2>
        <div className="h-32 flex items-end gap-1">
          {Array.from({ length: 52 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-accent-muted hover:bg-semantic-success/50 transition-colors"
              style={{ height: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
        <p className="text-caption text-text-tertiary mt-4 text-center">
          Live GitHub contribution graph coming soon
        </p>
      </div>
    </main>
  )
}