import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-bold text-body text-text-primary">{siteConfig.name}</span>
          <span className="text-caption text-text-tertiary">
            Building in public · {siteConfig.url.replace('https://', '')}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href={siteConfig.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-body-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
          <a 
            href={siteConfig.links.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-body-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            X
          </a>
          <a 
            href="/changelog" 
            className="text-body-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Changelog
          </a>
          <a 
            href="/api/rss" 
            className="text-body-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            RSS
          </a>
        </div>

        <div className="text-caption text-text-tertiary text-center md:text-right">
          <span>Made with Next.js · Deployed on Vercel · © 2024–present</span>
        </div>
      </div>
    </footer>
  )
}