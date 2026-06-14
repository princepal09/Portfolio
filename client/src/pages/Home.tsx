import Hero from '@/components/Sections/Hero'
import Projects from '@/components/Sections/Projects'
import Skills from '@/components/Sections/Skills'
import Testimonials from '@/components/Sections/Testimonials'

const Home = () => {
  return (
    <main className='min-h-screen bg-background'>

        <Hero/>
        <Skills/>
        <Testimonials/>
        <Projects/>
      
    </main>
  )
}

export default Home
