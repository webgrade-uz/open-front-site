import { motion } from 'framer-motion'
import { Send, ArrowRight } from 'lucide-react'
import { FaCircleCheck } from 'react-icons/fa6'
import { useConfig } from '../context/ConfigContext'

const points = [
  "Ro'yxatdan o'tish kerak emas",
  "To'lov bir necha daqiqada",
  "Istalgan Uzcard yoki Humo kartaga",
]

export default function FinalCTA() {
  const { telegramLink } = useConfig()
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-green/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 sm:p-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-4 py-1.5 rounded-full mb-8">
            Hali kech emas
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
            Ovoz bering.<br />
            <span className="text-brand-green dark:text-brand-neon">Pul oling.</span> Shu.
          </h2>

          <p className="text-lg text-gray-500 dark:text-slate-400 mb-10">
            9 000 dan ortiq odam allaqachon to'lov oldi. Navbat sizda.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            {points.map((p, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-300">
                <FaCircleCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                {p}
              </div>
            ))}
          </div>

          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-10 py-4 inline-flex"
          >
            <Send className="w-5 h-5" />
            Hoziroq boshlash
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
