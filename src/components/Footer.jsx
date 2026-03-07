import { Send } from 'lucide-react'
import { TELEGRAM_LINK } from '../config/campaign'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-green/20 border border-brand-green/30 flex items-center justify-center">
            <span className="text-brand-green font-black text-xs">V</span>
          </div>
          <span className="font-bold text-white text-sm">Open</span>
        </div>

        <p className="text-xs text-slate-600 text-center">
          To'lovlar Telegram bot orqali amalga oshiriladi. Barcha huquqlar himoyalangan.
        </p>

        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-brand-green text-sm font-medium hover:opacity-80 transition-opacity"
        >
          <Send className="w-4 h-4" />
          @ncrmdbbot
        </a>
      </div>
    </footer>
  )
}
