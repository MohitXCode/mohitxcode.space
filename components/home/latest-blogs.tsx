import { getAllPosts } from '@/lib/blog'
import { readingTime } from '@/lib/blog'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

export default function LatestBlogs() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section className="py-24 px-4 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-h2 font-bold text-text-primary">Latest Blogs</h2>
          <a href="/blog" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors">
            Read all →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group p-6 rounded-xl bg-bg-subtle border border-border-subtle hover:border-border-default hover:bg-bg-muted transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 text-caption text-text-tertiary">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {readingTime(post.content)}
                </span>
              </div>

              <Link href={`/blog/${post.slug}`} className="block mb-3">
                <h3 className="text-h4 font-medium text-text-primary group-hover:text-text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </Link>

              <p className="text-body-sm text-text-secondary line-clamp-2">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}