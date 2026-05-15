import { Metadata } from 'next'
import Timeline from '@/components/about/timeline'
import ReadingList from '@/components/about/reading-list'

export const metadata: Metadata = {
  title: 'About',
  description: 'Who I am, why I code, and what I am building toward.',
}

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-24 pt-32">
      {/* Opening paragraph */}
      <section className="mb-24">
        <p className="text-body-lg text-text-secondary leading-relaxed">
          I started coding because I wanted to build things that mattered. Not just websites — 
          tools that solve real problems, experiences that feel magical, and systems that scale. 
          Every line I write is a step toward that.
        </p>
      </section>

      {/* Who I am */}
      <section className="mb-24">
        <h2 className="text-h2 font-bold text-text-primary mb-6">Who I am</h2>
        <div className="space-y-4 text-body text-text-secondary leading-relaxed">
          <p>
            I am a developer who builds in public. I learn by shipping, break things intentionally 
            to understand them, and document every step of the journey. No corporate speak, no 
            buzzwords — just honest work and real progress.
          </p>
          <p>
            When I am not coding, you will find me watching anime, exploring new tech, or 
            deep-diving into something I do not yet understand. Curiosity drives everything I do.
          </p>
        </div>
      </section>

      {/* Why I started coding */}
      <section className="mb-24">
        <h2 className="text-h2 font-bold text-text-primary mb-6">Why I started coding</h2>
        <div className="space-y-4 text-body text-text-secondary leading-relaxed">
          <p>
            It started with a simple question: "How does this work?" I was fascinated by how 
            websites came to life — the buttons, the animations, the logic behind it all. I 
            wanted to create that magic myself.
          </p>
          <p>
            So I picked up a tutorial, wrote my first HTML page, and never stopped. Every project 
            since then has been a lesson. Every failure taught me more than any success could.
          </p>
        </div>
      </section>

      {/* What I am building toward */}
      <section className="mb-24">
        <h2 className="text-h2 font-bold text-text-primary mb-6">What I am building toward</h2>
        <p className="text-body text-text-secondary leading-relaxed mb-6">
          I want to build products that people love to use. Not just functional — delightful. 
          Products that make complex things feel simple and boring tasks feel fun.
        </p>
        <blockquote className="border-l-2 border-text-primary pl-6 py-2 my-8">
          <p className="text-body-lg text-text-primary italic">
            "The best code is the code that never needs to be explained."
          </p>
        </blockquote>
      </section>

      {/* Learning philosophy */}
      <section className="mb-24">
        <h2 className="text-h2 font-bold text-text-primary mb-6">My learning philosophy</h2>
        <div className="space-y-4 text-body text-text-secondary leading-relaxed">
          <p>
            I believe in learning by doing. No amount of tutorials replace the lessons from 
            building something real, breaking it, and fixing it. Public building keeps me 
            accountable and connects me with people who push me to be better.
          </p>
          <p>
            Every project is a bet on myself. Some fail, some succeed — all teach.
          </p>
        </div>
      </section>

      {/* Beyond coding */}
      <section className="mb-24">
        <h2 className="text-h2 font-bold text-text-primary mb-6">Beyond coding</h2>
        <div className="space-y-4 text-body text-text-secondary leading-relaxed">
          <p>
            Anime keeps my imagination alive. Music keeps me focused. Books expand my worldview. 
            Games remind me that challenge is fun. Movies show me what great storytelling looks like.
          </p>
          <p>
            These are not distractions — they are fuel. The best ideas come when you are not 
            staring at a screen.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-24">
        <h2 className="text-h2 font-bold text-text-primary mb-12">Journey</h2>
        <Timeline />
      </section>

      {/* Reading list */}
      <section className="mb-24">
        <h2 className="text-h2 font-bold text-text-primary mb-12">Books that changed how I think</h2>
        <ReadingList />
      </section>

      {/* Setup link */}
      <section className="mb-24">
        <h2 className="text-h2 font-bold text-text-primary mb-6">My setup</h2>
        <p className="text-body text-text-secondary leading-relaxed">
          Curious about the tools I use? Check out my <a href="/uses" className="text-text-primary underline hover:text-text-accent transition-colors">/uses</a> page for the full breakdown — 
          from hardware to software to the extensions I cannot live without.
        </p>
      </section>

      {/* Colophon */}
      <section className="pt-12 border-t border-border-subtle">
        <h2 className="text-h4 font-medium text-text-primary mb-4">Colophon</h2>
        <p className="text-body-sm text-text-tertiary leading-relaxed">
          This site is built with Next.js 15, TypeScript, and Tailwind CSS. Hosted on Vercel. 
          Designed to be fast, accessible, and intentionally minimal. No tracking, no bloat — 
          just content.
        </p>
      </section>
    </main>
  )
}