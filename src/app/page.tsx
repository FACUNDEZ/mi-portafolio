import AboutMeSection from '@/components/AboutMeSection'
import ContactSection from '@/components/ContactSection'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <AboutMeSection />
    <ProjectsSection />
    <ContactSection />
    </>
  )
}
