import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, readingTime } from '@/lib/blog'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post not found',
    }
  }
  
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-24 pt-32">
      {/* Back link */}
      <Link 
        href="/blog"
        className="inline-flex items-center gap-2 text-body-sm text-text-secondary hover:text-text-primary transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6 text-caption text-text-tertiary">
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

        <h1 className="text-h1 font-bold text-text-primary mb-4">{post.title}</h1>
        <p className="text-body-lg text-text-secondary leading-relaxed">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md bg-accent-muted text-caption text-text-tertiary font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        <div className="text-body text-text-secondary leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </div>
    </main>
  )
}