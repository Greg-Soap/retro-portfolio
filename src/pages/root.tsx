import Layout from '@/layout/layout'
import HeroSection from '@/components/hero-section'
import BannerSection from '@/components/banner-section'
import ExpertiseSection from '@/components/expertise-section'
import ServicesGrid from '@/components/services-grid'
import ProcessSection from '@/components/process-section'
import QuoteSection from '@/components/quote-section'
import ProjectsShowcase from '@/components/projects-showcase'
import ReadyToWork from '@/components/ready-to-work'

export default function Root() {
  return (
    <Layout>
      <HeroSection />
      <BannerSection />
      <ProcessSection />
      <ExpertiseSection />
      <ServicesGrid />
      <QuoteSection />
      <ProjectsShowcase />
      <ReadyToWork />
    </Layout>
  )
}
