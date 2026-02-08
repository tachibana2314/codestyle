import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import WorksSection from '@/components/WorksSection'
import BlogSection from '@/components/BlogSection'
import InstagramSection from '@/components/InstagramSection'
import ConceptSection from '@/components/ConceptSection'
import ServiceSection from '@/components/ServiceSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WorksSection />
      <BlogSection />
      <InstagramSection />
      <ConceptSection />
      <ServiceSection />
      <Footer />
    </main>
  )
}