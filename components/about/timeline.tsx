const milestones = [
  {
    date: '2024',
    title: 'Started building in public',
    description: 'Made the decision to share every project, failure, and lesson openly.',
  },
  {
    date: '2024',
    title: 'First production deployment',
    description: 'Shipped something real that real people used. The addiction began.',
  },
  {
    date: '2025',
    title: 'Deep dive into system design',
    description: 'Moved beyond tutorials to understanding how scalable systems actually work.',
  },
  {
    date: '2025',
    title: 'Launched mohitxcode.space',
    description: 'Built this portfolio from scratch as a testament to what I have learned.',
  },
]

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border-default md:-translate-x-px" />
      
      <div className="space-y-12">
        {milestones.map((item, index) => (
          <div key={index} className="relative flex items-start md:items-center gap-4 md:gap-0">
            {/* Dot */}
            <div className="absolute left-0 md:left-1/2 w-2 h-2 rounded-full bg-text-primary md:-translate-x-px -translate-x-[3px] mt-2 md:mt-0" />
            
            {/* Content */}
            <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
              <span className="text-caption text-text-tertiary font-mono mb-1 block">
                {item.date}
              </span>
              <h3 className="text-h4 font-medium text-text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-body-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}