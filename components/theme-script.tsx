'use client'

import { useEffect } from 'react'

export default function ThemeScript() {
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      const theme = stored === 'dark' || stored === 'light' ? stored : system
      document.documentElement.classList.add(theme)
      document.documentElement.setAttribute('data-theme', theme)
    } catch {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return null
}