'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-semantic-error/10">
            <AlertTriangle className="w-8 h-8 text-semantic-error" />
          </div>
        </div>
        
        <h2 className="text-h2 font-bold text-text-primary mb-4">Something went wrong</h2>
        <p className="text-body text-text-secondary mb-8">
          An unexpected error occurred. Try refreshing the page or go back home.
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-bg-base rounded-lg font-medium text-body-sm hover:bg-accent-hover transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try again
          </button>
        </div>
        
        {error.digest && (
          <p className="mt-8 text-caption text-text-tertiary font-mono">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}