import { Metadata } from 'next'
import { Mail, Code2, AtSign } from 'lucide-react'
import ContactForm from '@/components/contact/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch. I read every message.',
}

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-24 pt-32">
      <div className="mb-16">
        <h1 className="text-h1 font-bold text-text-primary mb-4">Contact</h1>
        <p className="text-body-lg text-text-secondary">
          Have a question, idea, or just want to say hi? I read every message.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-h4 font-medium text-text-primary mb-4">Email</h2>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-text-tertiary" />
              <a 
                href="mailto:hello@mohitxcode.space" 
                className="text-body text-text-secondary hover:text-text-primary transition-colors"
              >
                hello@mohitxcode.space
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-h4 font-medium text-text-primary mb-4">Social</h2>
            <div className="space-y-3">
              <a 
                href="https://github.com/mohitxcode" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body text-text-secondary hover:text-text-primary transition-colors"
              >
                <Code2 className="w-5 h-5" />
                GitHub
              </a>
              <a 
                href="https://x.com/mohitxcode" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body text-text-secondary hover:text-text-primary transition-colors"
              >
                <AtSign className="w-5 h-5" />
                X / Twitter
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-h4 font-medium text-text-primary mb-4">Availability</h2>
            <p className="text-body text-text-secondary leading-relaxed">
              Currently open for collaborations, freelance projects, and interesting conversations. 
              Response time: usually within 24 hours.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-bg-subtle border border-border-subtle">
          <ContactForm />
        </div>
      </div>
    </main>
  )
}