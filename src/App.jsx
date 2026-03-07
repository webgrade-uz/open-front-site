import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import HowItWorks from './components/HowItWorks'
import RewardsSection from './components/RewardsSection'
import FaqSection from './components/FaqSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HowItWorks />
      <RewardsSection />
      <FaqSection />
      <FinalCTA />
      <Footer />
    </div>
  )
}
