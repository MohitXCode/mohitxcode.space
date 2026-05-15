'use client'

import { useState } from 'react'
import { Check, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        setTimeout(() => setStatus('idle'), 3000)
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-body-sm font-medium text-text-secondary mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg bg-bg-base border border-border-default text-body text-text-primary placeholder:text-text-disabled focus:outline-none focus:border-text-primary transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-body-sm font-medium text-text-secondary mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-bg-base border border-border-default text-body text-text-primary placeholder:text-text-disabled focus:outline-none focus:border-text-primary transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-body-sm font-medium text-text-secondary mb-2">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-lg bg-bg-base border border-border-default text-body text-text-primary focus:outline-none focus:border-text-primary transition-colors"
        >
          <option value="">Select a subject</option>
          <option value="collaboration">Collaboration</option>
          <option value="feedback">Feedback</option>
          <option value="question">Question</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-body-sm font-medium text-text-secondary mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg bg-bg-base border border-border-default text-body text-text-primary placeholder:text-text-disabled focus:outline-none focus:border-text-primary transition-colors resize-none"
          placeholder="What's on your mind?"
        />
      </div>

      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="w-full px-6 py-3 bg-text-primary text-bg-base rounded-lg font-medium text-body-sm hover:bg-accent-hover transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
      >
        {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
        {status === 'success' && <Check className="w-4 h-4" />}
        {status === 'success' ? 'Sent!' : status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}