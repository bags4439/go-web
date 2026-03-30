import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Sources } from '@/components/sections/Sources'
import { Features } from '@/components/sections/Features'
import { About } from '@/components/sections/About'
import { Download } from '@/components/sections/Download'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <HowItWorks />
        <Sources />
        <Features />
        <About />
        <Download />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
