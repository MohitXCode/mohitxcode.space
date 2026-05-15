const technologies = [
  { name: 'Next.js', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Framer Motion', category: 'Animation' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'Python', category: 'Language' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Cache' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Git', category: 'Version Control' },
  { name: 'Figma', category: 'Design' },
]

export default function TechStack() {
  return (
    <section className="py-24 px-4 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-h2 font-bold text-text-primary mb-12 text-center">Current Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group p-4 rounded-lg bg-bg-subtle border border-border-subtle hover:border-border-default hover:bg-bg-muted transition-all duration-300 text-center"
            >
              <span className="text-body-sm font-medium text-text-primary group-hover:text-text-accent transition-colors block mb-1">
                {tech.name}
              </span>
              <span className="text-caption text-text-tertiary">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}