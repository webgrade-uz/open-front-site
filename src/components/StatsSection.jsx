import { motion } from 'framer-motion'
import { FaLock, FaBolt, FaMobileScreen, FaCircleCheck } from 'react-icons/fa6'
import useCountUp from '../hooks/useCountUp'
import { useConfig } from '../context/ConfigContext'

function StatCard({ stat, index }) {
  const { count, ref } = useCountUp(stat.value, 2200)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 text-center"
    >
      <p className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-brand-neon mb-1">
        {count.toLocaleString('ru-RU')}{stat.suffix}
      </p>
      <p className="text-sm text-gray-400 dark:text-slate-500">{stat.label}</p>
    </motion.div>
  )
}

const trustItems = [
  { icon: FaLock, text: "To'lovlar himoyalangan" },
  { icon: FaBolt, text: "Bir necha daqiqada" },
  { icon: FaMobileScreen, text: "Istalgan karta" },
  { icon: FaCircleCheck, text: "97% muvaffaqiyat" },
]

export default function StatsSection() {
  const { stats, successRate: _ } = useConfig()

  const STATS = [
    { value: stats.votesCount, suffix: '', label: "Ovoz berildi" },
    { value: Number(stats.totalPaid), suffix: '', label: "So'm to'landi" },
    { value: stats.participantsCount, suffix: '', label: "Qatnashuvchi" },
    { value: stats.successRate, suffix: '%', label: "To'lovni oldi" },
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-10"
        >
          Shunchaki raqamlar emas
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-2 glass-card px-4 py-2.5"
            >
              <item.icon className="w-4 h-4 text-brand-green" />
              <span className="text-sm text-gray-600 dark:text-slate-300">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
