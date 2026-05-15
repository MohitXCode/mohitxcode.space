const books = [
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    impact: 'Taught me to treat coding as craft, not just typing.',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    impact: 'Changed how I think about readability and maintenance.',
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    impact: 'Opened my eyes to how distributed systems actually work.',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    impact: 'Small improvements compound. This applies to code and life.',
  },
]

export default function ReadingList() {
  return (
    <div className="space-y-6">
      {books.map((book, index) => (
        <div 
          key={index}
          className="p-6 rounded-lg bg-bg-subtle border border-border-subtle hover:border-border-default transition-colors"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
            <h3 className="text-h4 font-medium text-text-primary">
              {book.title}
            </h3>
            <span className="text-caption text-text-tertiary font-mono shrink-0">
              {book.author}
            </span>
          </div>
          <p className="text-body-sm text-text-secondary leading-relaxed">
            {book.impact}
          </p>
        </div>
      ))}
    </div>
  )
}