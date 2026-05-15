'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'
import { Project } from '@/config/projects'

const statusColors = {
  Live: 'bg-semantic-success/10 text-semantic-success border-semantic-success/20',
  'In Progress': 'bg-semantic-warning/10 text-semantic-warning border-semantic-warning/20',
  Archived: 'bg-text-disabled/10 text-text-disabled border-text-disabled/20',
  Experiment: 'bg-semantic-info/10 text-semantic-info border-semantic-info/20',
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group p-6 rounded-xl bg-bg-subtle border border-border-subtle hover:border-border-default hover:bg-bg-muted transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <span className={`px-2.5 py-1 rounded-full text-caption font-medium border ${statusColors[project.status]}`}>
          {project.status}
        </span>
        <div className="flex gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-caption text-text-tertiary font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-h4 font-medium text-text-primary mb-2 group-hover:text-text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-body-sm text-text-secondary leading-relaxed mb-6 line-clamp-2">
        {project.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span 
            key={tag}
            className="px-2 py-1 rounded-md bg-accent-muted text-caption text-text-tertiary font-mono"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        {project.githubUrl && (
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-body-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <Code2 className="w-4 h-4" />
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-body-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}