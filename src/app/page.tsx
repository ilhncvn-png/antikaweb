import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import MobileCtaBar from '@/components/layout/MobileCtaBar'
import HeroSection from '@/components/sections/HeroSection'
import ProcessSection from '@/components/sections/ProcessSection'
import CategoriesSection from '@/components/sections/CategoriesSection'
import RugSection from '@/components/sections/RugSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import TrustSection from '@/components/sections/TrustSection'
import FaqSection from '@/components/sections/FaqSection'
import ContactSection from '@/components/sections/ContactSection'
import ScrollRevealInit from '@/components/ScrollRevealInit'

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <HeroSection />
        <ProcessSection />
        <CategoriesSection />
        <RugSection />
        <WhyUsSection />
        <TrustSection />
        <FaqSection />
        <ContactSection />
      </main>

      <SiteFooter />
      <WhatsAppButton />
      <MobileCtaBar />
      <ScrollRevealInit />
    </>
  )
}
