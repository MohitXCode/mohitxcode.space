import type { Metadata } from 'next'
import { geist, geistMono } from '@/lib/fonts'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import CommandPalette from '@/components/layout/command-palette'
import ScrollProgress from '@/components/layout/scroll-progress'
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
      <body className="bg-bg-base text-text-primary font-sans min-h-screen flex flex-col">
        <ScrollProgress />
        <Navbar />
        <CommandPalette />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}