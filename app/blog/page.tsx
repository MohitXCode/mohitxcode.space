import { Metadata } from 'next'
import { getAllPosts, getAllTags } from '@/lib/blog'
import BlogCard from '@/components/blog/blog-card'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on building, learning, and shipping in public.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <main className="max-w-3xl mx-auto px-4 py-24 pt-32">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-h1 font-bold text-text-primary mb-4">Blog</h1>
        <p className="text-body-lg text-text-secondary max-w-lg">
          Thoughts on building, learning, and shipping in public. No fluff, just honest notes.
        </p>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="px-3 py-1.5 rounded-lg bg-text-primary text-bg-base text-body-sm font-medium">
            All
          </span>
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-lg bg-accent-muted text-body-sm text-text-secondary hover:bg-accent-hover hover:text-text-primary transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Empty state */}
      {posts.length === 0 && (
        <div className="text-center py-24">
          <p className="text-body text-text-tertiary">No posts yet. Check back soon.</p>
        </div>
      )}
    </main>
  )
}