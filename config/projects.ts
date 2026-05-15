export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  category: 'AI' | 'Web' | 'Tools' | 'Experiments' | 'Vibe Coded' | 'Learning'
  status: 'Live' | 'In Progress' | 'Archived' | 'Experiment'
  featured: boolean
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'ai-image-generator',
    title: 'AI Image Generator',
    description: 'Generate images from text prompts using OpenAI DALL-E API. Built with Next.js and TypeScript.',
    tags: ['Next.js', 'TypeScript', 'OpenAI'],
    category: 'AI',
    status: 'Live',
    featured: true,
    githubUrl: 'https://github.com/mohitxcode/ai-image-generator',
    liveUrl: 'https://ai-image-generator.vercel.app',
  },
  {
    slug: 'dev-tools-cli',
    title: 'Dev Tools CLI',
    description: 'A command-line toolkit for common developer tasks. File formatting, git helpers, and more.',
    tags: ['Node.js', 'TypeScript', 'CLI'],
    category: 'Tools',
    status: 'Live',
    featured: true,
    githubUrl: 'https://github.com/mohitxcode/dev-tools-cli',
  },
  {
    slug: 'portfolio-v2',
    title: 'Portfolio v2',
    description: 'This very site. Built from scratch with Next.js 15, Framer Motion, and a custom design system.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    category: 'Web',
    status: 'In Progress',
    featured: true,
    githubUrl: 'https://github.com/mohitxcode/mohitxcode.space',
    liveUrl: 'https://mohitxcode.space',
  },
  {
    slug: 'react-experiments',
    title: 'React Experiments',
    description: 'A collection of UI experiments and component patterns. Testing new React features and hooks.',
    tags: ['React', 'TypeScript', 'Vite'],
    category: 'Experiments',
    status: 'Experiment',
    featured: false,
    githubUrl: 'https://github.com/mohitxcode/react-experiments',
  },
  {
    slug: 'learning-rust',
    title: 'Learning Rust',
    description: 'Documenting my journey learning Rust. Small programs, notes, and mistakes along the way.',
    tags: ['Rust', 'Learning'],
    category: 'Learning',
    status: 'In Progress',
    featured: false,
    githubUrl: 'https://github.com/mohitxcode/learning-rust',
  },
  {
    slug: 'vibe-coded-app',
    title: 'Vibe Coded App',
    description: 'An app built entirely through AI-assisted coding. Testing the limits of vibe coding.',
    tags: ['AI', 'Next.js', 'Vibe Coded'],
    category: 'Vibe Coded',
    status: 'Live',
    featured: false,
    liveUrl: 'https://vibe-coded.vercel.app',
  },
]