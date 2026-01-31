import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import HeroSection from '@/components/sections/HeroSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import StackSection from '@/components/sections/StackSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export default function HomePage() {
  return (
    <main className="bg-[var(--background-color)] text-[var(--text-primary)]">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <StackSection />
      <ExperienceSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </main>
  )
}
