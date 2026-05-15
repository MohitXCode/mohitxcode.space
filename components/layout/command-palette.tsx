'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, FileText, Folder, Home, Mail, BarChart3, FlaskConical, Wrench } from 'lucide-react'

const navigationItems = [
  { icon: Home, label: 'Home', href: '/', shortcut: 'H' },
  { icon: FileText, label: 'Blog', href: '/blog', shortcut: 'B' },
  { icon: Folder, label: 'Projects', href: '/projects', shortcut: 'P' },
  { icon: FlaskConical, label: 'Labs', href: '/labs', shortcut: 'L' },
  { icon: Wrench, label: 'Uses', href: '/uses', shortcut: 'U' },
  { icon: BarChart3, label: 'Dashboard', href: '/dashboard', shortcut: 'D' },
  { icon: Mail, label: 'Contact', href: '/contact', shortcut: 'C' },
]

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
  const close = useCallback(() => {
    setIsOpen(false)
    setSearch('')
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        toggle()
      }
      if (e.key === 'Escape') close()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggle, close])

  const filtered = search.trim()
    ? navigationItems.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
      )
    : navigationItems

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg-base/60 backdrop-blur-sm z-50"
            onClick={close}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[20vh] left-1/2 -translate-x-1/2 w-full max-w-lg z-50 px-4"
          >
            <div className="bg-bg-elevated border border-border-default rounded-xl shadow-2xl overflow-hidden">
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-border-subtle">
                <Search className="w-5 h-5 text-text-tertiary" />
                <input
                  type="text"
                  placeholder="Search pages..."
                  className="flex-1 bg-transparent text-body text-text-primary placeholder:text-text-disabled outline-none"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                />
                <button
                  onClick={close}
                  className="p-1 rounded-md hover:bg-accent-muted text-text-tertiary hover:text-text-secondary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-72 overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <div className="px-4 py-8 text-center text-body-sm text-text-tertiary">
                    No results found
                  </div>
                ) : (
                  <div className="px-2">
                    <div className="px-2 py-1.5 text-caption text-text-tertiary uppercase tracking-wider">
                      Navigation
                    </div>
                    {filtered.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={close}
                        className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-body-sm text-text-secondary hover:text-text-primary hover:bg-accent-muted transition-colors group"
                      >
                        <item.icon className="w-4 h-4 text-text-tertiary group-hover:text-text-secondary" />
                        <span className="flex-1">{item.label}</span>
                        <span className="text-caption text-text-disabled border border-border-subtle px-1.5 py-0.5 rounded">
                          {item.shortcut}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2.5 border-t border-border-subtle flex items-center justify-between text-caption text-text-tertiary">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-accent-muted border border-border-subtle">↑↓</kbd>
                    <span>Navigate</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-accent-muted border border-border-subtle">↵</kbd>
                    <span>Select</span>
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-accent-muted border border-border-subtle">Esc</kbd>
                  <span>Close</span>
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}