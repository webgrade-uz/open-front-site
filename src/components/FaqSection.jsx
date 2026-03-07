import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: "To'lov rostdan tushadi?",
    a: "Ha. Har bir tasdiqlangan ovoz uchun avtomatik tarzda to'lov amalga oshiriladi. 9 000+ odam allaqachon oldi.",
  },
  {
    q: "Qaysi kartaga tushadi?",
    a: "Uzcard va Humo kartalariga. Bot orqali karta raqamingizni kiritasiz — pul o'sha yerga tushadi.",
  },
  {
    q: "Ro'yxatdan o'tish kerakmi?",
    a: "Yo'q. Faqat Telegram kerak. Botni ochib /start bosasiz — hammasi shu.",
  },
  {
    q: "Bir kishi necha marta ovoz bera oladi?",
    a: "Har bir Telegram akkaunt bir marta. Lekin har kim o'z do'stlarini taklif qilib qo'shimcha bonus olishi mumkin.",
  },
  {
    q: "To'lov kechiksa nima qilaman?",
    a: "Odatda 5 daqiqa ichida tushadi. Kechiksa bot ichidagi qo'llab-quvvatlash bo'limiga murojaat qiling.",
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-gray-900 dark:text-white font-semibold pr-4">{item.q}</span>
        <span className="flex-shrink-0 text-brand-green">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <p className="px-6 pb-6 text-gray-500 dark:text-slate-400 leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/30 to-transparent dark:from-dark-950 dark:via-dark-900/30 dark:to-dark-950" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">Savollarga javob</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <FaqItem
                item={item}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
