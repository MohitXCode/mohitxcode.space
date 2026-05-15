import type { Metadata } from 'next'
import { geist, geistMono } from '@/lib/fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'MohitXCode',
  description: 'Developer building in public — projects, blogs, experiments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var theme = stored === 'dark' || stored === 'light' ? stored : system;
                  document.documentElement.classList.add(theme);
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {
                  document.documentElement.classList.add('dark');
                }
              })()
            `,
          }}
        />
      </head>
      <body className="bg-bg-base text-text-primary font-sans">
        {children}
      </body>
    </html>
  )
}