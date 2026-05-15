'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, Project } from '@/config/projects'
import ProjectCard from '@/components/projects/project-card'

const categories = ['All', 'AI', 'Web', 'Tools', 'Experiments', 'Vibe Coded', 'Learning'] as const

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<typeof categories[number]>('All')

  const filtered = activeFilter === 'All' 
    ? projects 
    : projects.filter((p) => p.category === activeFilter)

  return (
    <main className="max-w-6xl mx-auto px-4 py-24 pt-32">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-h1 font-bold text-text-primary mb-4">Projects</h1>
        <p className="text-body-lg text-text-secondary max-w-lg">
          Things I have built, broken, and learned from. Mostly experiments, some production-ready.
        </p>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-lg text-body-sm font-medium transition-all duration-200 ${
              activeFilter === cat
                ? 'bg-text-primary text-bg-base'
                : 'bg-accent-muted text-text-secondary hover:bg-accent-hover hover:text-text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-24">
          <p className="text-body text-text-tertiary">No projects in this category yet.</p>
        </div>
      )}
    </main>
  )
}