'use client'

import { Linkedin, Twitter, Github, } from 'lucide-react'
import { useInView, motion, } from 'motion/react'
import React from 'react'

import { Button, } from '~/components/ui/button'
import { montserrat, } from '~/fonts'
import { cn, } from '~/lib/utils'

const backgroundStyles = {
  backgroundImage: 'url(/images/background.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const Landing = () => {
  const title = 'Katelin Frederick'.split('')

  const socialLinkAnimation = {
    rotate: 360,
    scale: .9,
    duration: 0.7,
  }

  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, })

  return (
    <section
      id='landing'
      className='h-screen desktop-nav:h-[80vh] flex justify-center items-center overflow-hidden text-center border-b-6 border-gold-500'
      style={backgroundStyles}
    >
      <div id='landingOverlay' className='bg-black/50 w-full h-full flex justify-center items-center'>
        <header>

          {title.map((letter, i) => (
            <motion.span
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, }}
              transition={{
                duration: 0.10,
                delay: i / 20,
              }}
              key={i}
              className='text-[2.5em] md:text-[56px] text-white my-5'
            >
              {letter}
            </motion.span>
          ))}

          <motion.p
            id='subTitle'
            className={cn('text-3xl md:text-[40px] text-white mb-10 transition-colors', montserrat.className)}
            ref={ref}
            initial={{ filter: 'blur(20px)', opacity: 0, }}
            animate={isInView ? { filter: 'blur(0px)', opacity: 1, } : {}}
            transition={{ duration: 1.2, }}
          >
            Web Developer
          </motion.p>

          <div className='flex flex-col md:flex-row items-center justify-center'>
            <motion.div
              initial={{ x: -1000, }}
              animate={{ x: 0, }}
              transition={{ duration: 0.8, ease: 'easeOut', }}>
              <Button size='lg' className='mb-5 md:mr-6 md:mb-0'>View Projects</Button>
            </motion.div>

            <motion.div
              initial={{ x: 1000, }}
              animate={{ x: 0, }}
              transition={{ duration: 0.8, ease: 'easeOut', }}>
              <Button size='lg' className='mb-5 md:mr-6 md:mb-0'>View Resume</Button>
            </motion.div>
          </div>

          <ul className='flex justify-around items-center list-none my-10'>
            <motion.li
              initial={{ y: -1000, }}
              animate={{ y: 0, }}
              transition={{ duration: 0.5, ease: 'easeOut', }}
              whileHover={socialLinkAnimation}
            >
              <Button className='rounded-full h-auto p-3' size='lg'>
                <Github color='#9E95B7' size={32} />
              </Button>
            </motion.li>

            <motion.li
              initial={{ y: -1000, }}
              animate={{ y: 0, }}
              transition={{ duration: 0.65, ease: 'easeOut', }}
              whileHover={socialLinkAnimation}
            >
              <Button className='rounded-full h-auto p-3' size='lg'>
                <Linkedin color='#0D597F' size={32} />
              </Button>
            </motion.li>

            <motion.li
              initial={{ y: -1000, }}
              animate={{ y: 0, }}
              transition={{ duration: 0.8, ease: 'easeOut', }}
              whileHover={socialLinkAnimation}
            >
              <Button className='rounded-full h-auto p-3' size='lg'>
                <Twitter color='#40AEF0' size={32} />
              </Button>
            </motion.li>
          </ul>

          <motion.p
            className='sm:text-lg md:text-xl'
            initial={{ y: 1000, }}
            animate={{ y: 0, }}
            transition={{ duration: 0.8, ease: 'easeOut', }}
          >
            Email: <a className='text-white underline hover:text-gold-500' href='mailto:k.frederick94@gmail.com'>k.frederick94@gmail.com</a>
          </motion.p>
        </header>
      </div>
    </section>
  )
}

export default Landing