import { ThemeProvider, useTheme } from './context/ThemeContext'
import { ConfigProvider } from './context/ConfigContext'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import HowItWorks from './components/HowItWorks'
import RewardsSection from './components/RewardsSection'
import FaqSection from './components/FaqSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function AppInner() {
  const { dark } = useTheme()
  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-950 text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <HowItWorks />
        <RewardsSection />
        <FaqSection />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <ConfigProvider>
        <AppInner />
      </ConfigProvider>
    </ThemeProvider>
  )
}
