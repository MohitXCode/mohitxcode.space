'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } }
}

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />
      
      <motion.div
        className="relative z-10 text-center max-w-3xl"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Availability badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-muted text-caption text-text-secondary border border-border-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-semantic-success animate-pulse" />
            Available for collabs
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 
          variants={fadeUp}
          className="text-display font-bold tracking-tight text-text-primary mb-6"
        >
          MohitXCode
        </motion.h1>

        {/* Tagline */}
        <motion.p 
          variants={fadeUp}
          className="text-body-lg text-text-secondary mb-12 max-w-lg mx-auto"
        >
          Developer in public — learning, building, shipping, documenting
        </motion.p>

        {/* CTAs */}
        <motion.div 
          variants={fadeUp}
          className="flex items-center justify-center gap-4"
        >
          <a 
            href="/projects" 
            className="px-6 py-3 bg-text-primary text-bg-base rounded-lg font-medium text-body-sm hover:bg-accent-hover transition-colors"
          >
            View Projects
          </a>
          <a 
            href="/blog" 
            className="px-6 py-3 border border-border-default rounded-lg font-medium text-body-sm text-text-primary hover:bg-accent-muted transition-colors"
          >
            Read Blog
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-5 border-b-2 border-r-2 border-text-tertiary rotate-45"
        />
      </motion.div>
    </main>
  )
}