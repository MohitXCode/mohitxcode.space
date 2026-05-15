'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Command } from 'lucide-react'
import ThemeToggle from '@/components/ui/theme-toggle'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/labs', label: 'Labs' },
  { href: '/uses', label: 'Uses' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      
      if (currentY > 80) {
        setIsScrolled(true)
        setIsHidden(currentY > lastScrollY && currentY > 200)
      } else {
        setIsScrolled(false)
        setIsHidden(false)
      }
      
      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-bg-base/80 backdrop-blur-xl border-b border-border-subtle' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-center relative">
          {/* Logo - absolute left */}
          <a href="/" className="absolute left-4 font-bold text-body text-text-primary hover:text-text-accent transition-colors">
            MohitXCode
          </a>

          {/* Desktop nav - centered */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body-sm text-text-secondary hover:text-text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-text-primary group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </div>

          {/* Right actions - absolute right */}
          <div className="absolute right-4 hidden md:flex items-center gap-3 pl-4">
            <a 
              href="/dashboard" 
              className="text-body-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Dashboard ↗
            </a>
            
            <button 
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-accent-muted text-caption text-text-secondary hover:bg-accent-hover transition-colors"
              onClick={() => {/* TODO: open command palette */}}
            >
              <Command className="w-3.5 h-3.5" />
              <span>⌘K</span>
            </button>
            
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <button 
            className="md:hidden absolute right-4 p-2 text-text-secondary hover:text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-bg-base/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-bg-elevated border-l border-border-subtle z-50 p-6 pt-20 md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-body text-text-secondary hover:text-text-primary transition-colors py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <hr className="border-border-subtle my-2" />
                <a 
                  href="/dashboard" 
                  className="text-body text-text-secondary hover:text-text-primary transition-colors py-2"
                >
                  Dashboard ↗
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}