import HeroSection from '@/components/home/hero-section'
import FeaturedProjects from '@/components/home/featured-projects'
import LatestBlogs from '@/components/home/latest-blogs'
import TechStack from '@/components/home/tech-stack'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <LatestBlogs />
      <TechStack />
    </>
  )
}