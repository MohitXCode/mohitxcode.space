'use client'

import { AlertTriangle } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="bg-bg-base text-text-primary font-sans min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-semantic-error/10">
              <AlertTriangle className="w-8 h-8 text-semantic-error" />
            </div>
          </div>
          
          <h2 className="text-h2 font-bold text-text-primary mb-4">Critical Error</h2>
          <p className="text-body text-text-secondary mb-8">
            The application encountered a critical error. Please refresh the page.
          </p>
          
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-bg-base rounded-lg font-medium text-body-sm hover:bg-accent-hover transition-colors"
          >
            Refresh page
          </button>
        </div>
      </body>
    </html>
  )
}