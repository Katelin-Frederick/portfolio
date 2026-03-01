'use client'

import { Linkedin, Twitter, Github, } from 'lucide-react'
import { useInView, motion, } from 'motion/react'
import Link from 'next/link'
import React from 'react'

import { Button, } from '@/components/ui/button'
import { montserrat, } from '@/fonts'
import { cn, } from '@/lib/utils'

const backgroundStyles = {
  backgroundImage: 'url(/images/background.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const Landing = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, })

  return (
    <section
      id='landing'
      className='h-screen desktop-nav:h-[80vh] flex justify-center items-center overflow-hidden text-center border-b-2 border-gold-500'
      style={backgroundStyles}
    >
      <div id='landingOverlay' className='bg-black/50 w-full h-full flex justify-center items-center'>
        <header>
          <motion.h1
            initial={{ opacity: 0, y: 20, }}
            animate={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.6, ease: 'easeOut', }}
            className='text-[2.5em] md:text-[56px] text-white my-5'
          >
            Katelin Frederick
          </motion.h1>

          <motion.p
            id='subTitle'
            className={cn('text-3xl md:text-[40px] text-white mb-10 transition-colors', montserrat.className)}
            ref={ref}
            initial={{ filter: 'blur(20px)', opacity: 0, }}
            animate={isInView ? { filter: 'blur(0px)', opacity: 1, } : {}}
            transition={{ duration: 1.2, }}
          >
            Full-Stack Engineer
          </motion.p>

          <div className='flex flex-col md:flex-row items-center justify-center'>
            <motion.div
              initial={{ x: -1000, }}
              animate={{ x: 0, }}
              transition={{ duration: 0.8, ease: 'easeOut', }}>
              <Button size='lg' className='mb-5 md:mr-6 md:mb-0'>
                <Link href='/#projects'>View Projects</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ x: 1000, }}
              animate={{ x: 0, }}
              transition={{ duration: 0.8, ease: 'easeOut', }}>
              <Button size='lg' className='mb-5 md:mr-6 md:mb-0'>
                <Link href='/Resume.pdf' target='_blank'>
                  View Resume
                </Link>
              </Button>
            </motion.div>
          </div>

          <ul className='flex justify-around items-center list-none my-10'>
            <motion.li
              initial={{ y: -1000, }}
              animate={{ y: 0, }}
              transition={{ duration: 0.5, ease: 'easeOut', }}
              whileHover={{ y: -4, scale: 1.05, transition: { duration: 0.2, }, }}
            >
              <Button className='rounded-full h-auto p-3' size='lg'>
                <a
                  href='https://github.com/Katelin-Frederick'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github color='#9E95B7' size={32} />
                </a>
              </Button>
            </motion.li>

            <motion.li
              initial={{ y: -1000, }}
              animate={{ y: 0, }}
              transition={{ duration: 0.65, ease: 'easeOut', }}
              whileHover={{ y: -4, scale: 1.05, transition: { duration: 0.2, }, }}
            >
              <Button className='rounded-full h-auto p-3' size='lg'>
                <a
                  href='https://www.linkedin.com/in/katelin-frederick'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin color='#0D597F' size={32} />
                </a>
              </Button>
            </motion.li>

            <motion.li
              initial={{ y: -1000, }}
              animate={{ y: 0, }}
              transition={{ duration: 0.8, ease: 'easeOut', }}
              whileHover={{ y: -4, scale: 1.05, transition: { duration: 0.2, }, }}
            >
              <Button className='rounded-full h-auto p-3' size='lg'>
                <a
                  href='https://x.com/KatieNFrederick'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Twitter color='#40AEF0' size={32} />
                </a>
              </Button>
            </motion.li>
          </ul>

          <motion.p
            className='sm:text-lg md:text-xl'
            initial={{ y: 1000, }}
            animate={{ y: 0, }}
            transition={{ duration: 0.8, ease: 'easeOut', }}
          >
            Email: <Link className='text-white underline hover:text-gold-500' href='mailto:k.frederick94@gmail.com'>k.frederick94@gmail.com</Link>
          </motion.p>
        </header>
      </div>
    </section>
  )
}

export default Landing
