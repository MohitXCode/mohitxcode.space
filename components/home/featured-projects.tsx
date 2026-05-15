import { projects } from '@/config/projects'
import { ExternalLink } from 'lucide-react'

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-h2 font-bold text-text-primary">Featured Projects</h2>
          <a href="/projects" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors">
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project) => (
            <div
              key={project.slug}
              className="group p-6 rounded-xl bg-bg-subtle border border-border-subtle hover:border-border-default hover:bg-bg-muted transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2.5 py-1 rounded-full text-caption font-medium border ${
                  project.status === 'Live' ? 'bg-semantic-success/10 text-semantic-success border-semantic-success/20' :
                  project.status === 'In Progress' ? 'bg-semantic-warning/10 text-semantic-warning border-semantic-warning/20' :
                  'bg-text-disabled/10 text-text-disabled border-text-disabled/20'
                }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-h4 font-medium text-text-primary mb-2 group-hover:text-text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-body-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center gap-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors">
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-body-sm text-text-secondary hover:text-text-primary transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}