
import {motion} from 'framer-motion'
import { Button } from '../ui/button'
import { Mail } from 'lucide-react'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'
import heroImg from '/hero.svg'

const Hero = () => {

    const github_url = `https://github.com/princepal09`

  return (

    <section className="container py-5 mx-auto px-10 pt-32 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{opacity : 0, x: -20}} animate = {{opacity : 1, x : 0}} transition={{duration : 0.5}} 
        >

            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                Hi, I'm <span className='text-primary'>Prince Pal</span>
            </h1>

            <p className='text-xl md:text-2xl text-muted-foreground mb-8'>Full Stack Developer Crafting modern applications</p>
                 <div className='flex gap-4'>
                        <Button variant={"default"} className='gap-2'>
                            
                            <Mail className='w-4 h-4 ' />
                            Contact Me
                        </Button>
                         
                         <Link target='_blank' to={github_url}>
                         
                        <Button variant={"outline"} className='gap-2'>
                            <FaGithub/>
                            Github
                        </Button>
                        </Link>
                 </div>
        </motion.div>

        <motion.div initial={{opacity : 0, x: 20}} animate = {{opacity : 1, x : 0}} transition={{duration : 0.5}} className='flex justify-center'  >
            <img src={heroImg} alt='Developer Illustration' loading='lazy' width={500} height={500} />

        </motion.div>

      </div>
    </section>

  )
}

export default Hero
