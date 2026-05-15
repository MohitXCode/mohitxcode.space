import Link from 'next/link'
import { BlogPost } from '@/lib/blog'
import { readingTime } from '@/lib/blog'
import { Calendar, Clock } from 'lucide-react'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group p-6 rounded-xl bg-bg-subtle border border-border-subtle hover:border-border-default hover:bg-bg-muted transition-all duration-300">
      <div className="flex items-center gap-4 mb-4 text-caption text-text-tertiary">
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          {readingTime(post.content)}
        </span>
      </div>

      <Link href={`/blog/${post.slug}`} className="block mb-3">
        <h2 className="text-h4 font-medium text-text-primary group-hover:text-text-accent transition-colors">
          {post.title}
        </h2>
      </Link>

      <p className="text-body-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
        {post.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-md bg-accent-muted text-caption text-text-tertiary font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}