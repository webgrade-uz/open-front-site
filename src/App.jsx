import { Routes, Route, useLocation } from 'react-router-dom'
import { ConfigProvider } from './context/ConfigContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StickyBottomCTA from './components/StickyBottomCTA'
import HomePage from './pages/HomePage'
import StatsPage from './pages/StatsPage'
import HowItWorksPage from './pages/HowItWorksPage'
import RewardsPage from './pages/RewardsPage'
import FaqPage from './pages/FaqPage'

function AppContent() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className={`bg-gray-50 text-gray-900 overflow-hidden ${isHome ? 'pb-[72px] sm:pb-0' : ''}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
      {isHome && <Footer />}
      {isHome && <StickyBottomCTA />}
    </div>
  )
}

export default function App() {
  return (
    <ConfigProvider>
      <AppContent />
    </ConfigProvider>
  )
}
