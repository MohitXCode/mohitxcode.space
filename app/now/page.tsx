import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Now',
  description: 'What I am building, reading, and watching right now.',
}

export default function NowPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-24 pt-32">
      <div className="mb-16">
        <h1 className="text-h1 font-bold text-text-primary mb-4">Now</h1>
        <p className="text-body-lg text-text-secondary">
          What I am up to right now. Updated manually when life changes.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Currently building</h2>
          <p className="text-body text-text-secondary leading-relaxed">
            MohitXCode v2 — full redesign with Next.js 15, Framer Motion, and a custom design system.
            Also experimenting with AI tools and vibe coding workflows.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Currently reading</h2>
          <p className="text-body text-text-secondary leading-relaxed">
            "The Pragmatic Programmer" — re-reading for the third time. Still finding new lessons.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Currently watching</h2>
          <p className="text-body text-text-secondary leading-relaxed">
            Frieren: Beyond Journey's End. Slow, beautiful, deeply emotional. The kind of story that stays with you.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Mood / Status</h2>
          <p className="text-body text-text-secondary leading-relaxed">
            Deep in build mode. Minimal comms, maximum output. Shipping daily.
          </p>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-border-subtle">
        <p className="text-caption text-text-tertiary">
          Last updated: May 2025
        </p>
      </div>
    </main>
  )
}