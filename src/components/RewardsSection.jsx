import { motion } from 'framer-motion'
import { FaSquarePollVertical, FaStar, FaTrophy } from 'react-icons/fa6'
import { useConfig } from '../context/ConfigContext'
import { Send } from 'lucide-react'

export default function RewardsSection() {
  const { voteAmount, bonusAmount, bonusMinVotes, grandPrize, telegramLink } = useConfig()

  const fmt = (n) => Number(n).toLocaleString('ru-RU')

  const rewards = [
    {
      icon: FaSquarePollVertical,
      title: 'Har bir ovoz',
      amount: fmt(voteAmount),
      unit: "so'm",
      desc: "Har bir ovoz berganda avtomatik hisobingizga tushadi.",
      cardClass: 'glass-card-green',
      amountClass: 'text-brand-green dark:text-brand-neon',
      iconBg: 'bg-brand-green/20',
      tag: 'Asosiy',
      tagClass: 'bg-brand-green/10 text-brand-green border-brand-green/20',
      dividerClass: 'border-green-200 dark:border-white/5',
      descClass: 'text-green-700 dark:text-slate-400',
    },
    {
      icon: FaStar,
      title: 'Faol ishtirokchi',
      amount: fmt(bonusAmount),
      unit: "so'm",
      desc: `${bonusMinVotes} ta ovoz bergan foydalanuvchilarga qo'shimcha bonus.`,
      cardClass: 'glass-card-gold',
      amountClass: 'text-brand-gold',
      iconBg: 'bg-brand-gold/20',
      tag: 'Bonus',
      tagClass: 'bg-brand-gold/10 text-brand-gold border-brand-gold/20',
      dividerClass: 'border-amber-200 dark:border-white/5',
      descClass: 'text-amber-700 dark:text-slate-400',
    },
    {
      icon: FaTrophy,
      title: 'Top ishtirokchi',
      amount: grandPrize,
      unit: '',
      desc: "Oylik eng faol ishtirokchi maxsus sovg'a oladi.",
      cardClass: 'glass-card-blue',
      amountClass: 'text-brand-blue',
      iconBg: 'bg-brand-blue/20',
      tag: 'Grand sovrin',
      tagClass: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
      dividerClass: 'border-blue-200 dark:border-white/5',
      descClass: 'text-blue-700 dark:text-slate-400',
    },
  ]

  return (
    <section id="rewards" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Nima olasiz</h2>
          <p className="section-subtitle">Ovoz bergandan so'ng avtomatik to'lanadi.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {rewards.map((reward, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`${reward.cardClass} p-7 flex flex-col`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl ${reward.iconBg} flex items-center justify-center`}>
                  <reward.icon className={`w-7 h-7 ${reward.amountClass}`} />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${reward.tagClass}`}>
                  {reward.tag}
                </span>
              </div>

              <p className="text-gray-500 dark:text-slate-400 text-sm mb-2">{reward.title}</p>
              <p className={`text-4xl font-black ${reward.amountClass} mb-1`}>{reward.amount}</p>
              {reward.unit && <p className="text-gray-400 dark:text-slate-500 text-sm mb-4">{reward.unit}</p>}

              <p className={`text-sm leading-relaxed mt-auto pt-4 border-t ${reward.dividerClass} ${reward.descClass}`}>
                {reward.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <Send className="w-5 h-5" />
            Mukofot olishni boshlash
          </a>
        </motion.div>
      </div>
    </section>
  )
}
