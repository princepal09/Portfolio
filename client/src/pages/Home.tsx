import Contact from '@/components/Sections/Contact'
import Github from '@/components/Sections/Github'
import Hero from '@/components/Sections/Hero'
import Projects from '@/components/Sections/Projects'
import Skills from '@/components/Sections/Skills'
import Testimonials from '@/components/Sections/Experience'

const Home = () => {
  return (
    <main className='min-h-screen bg-background'>

        <Hero/>
        <Skills/>
        <Projects/>
        <Testimonials/>
        <Github/>
        <Contact/>
      
    </main>
  )
}

export default Home
