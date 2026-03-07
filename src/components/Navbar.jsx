import { useState, useEffect } from 'react'
import { Send, Sun, Moon } from 'lucide-react'
import { TELEGRAM_LINK } from '../config/campaign'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 dark:bg-dark-950/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5'
        : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-green/20 border border-brand-green/30 flex items-center justify-center">
            <span className="text-brand-green font-black text-sm">V</span>
          </div>
          <span className="font-bold text-gray-900 dark:text-white">Open</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-500 dark:text-slate-400">
          <a href="#how-it-works" className="hover:text-gray-900 dark:hover:text-white transition-colors">Qanday ishlaydi</a>
          <a href="#rewards" className="hover:text-gray-900 dark:hover:text-white transition-colors">Mukofotlar</a>
          <a href="#faq" className="hover:text-gray-900 dark:hover:text-white transition-colors">Savollar</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
            aria-label="Temani almashtirish"
          >
            {dark
              ? <Sun className="w-4 h-4 text-brand-gold" />
              : <Moon className="w-4 h-4 text-brand-blue" />
            }
          </button>

          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-green/20 transition-all"
          >
            <Send className="w-4 h-4" />
            Boshlash
          </a>
        </div>
      </div>
    </header>
  )
}
