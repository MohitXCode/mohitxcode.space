import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-h1 font-bold text-text-primary mb-4">404</h1>
        <p className="text-body-lg text-text-secondary mb-2">Page not found</p>
        <p className="text-body text-text-tertiary mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-bg-base rounded-lg font-medium text-body-sm hover:bg-accent-hover transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>
    </div>
  )
}