
'use client'

import { domAnimation, LazyMotion, m, } from 'motion/react'
import { Menu, X, } from 'lucide-react'
import { useState, } from 'react'
import Link from 'next/link'

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const navigationLinks = [
    {
      href: '/#landing',
      text: 'Home',
    },
    {
      href: '/#aboutMe',
      text: 'About',
    },
    {
      href: '/#experience',
      text: 'Experience',
    },
    {
      href: '/#skills',
      text: 'Skills',
    },
    {
      href: '/#projects',
      text: 'Projects',
    },
    {
      href: '/#contact',
      text: 'Contact',
    },
    {
      href: '/blog',
      text: 'Blog',
    }
  ]

  return (
    <LazyMotion features={domAnimation}>
      <nav className='flex justify-between items-center min-h-[8vh] bg-gray-800/90 backdrop-blur-sm border-b-2 border-gold-500 w-full fixed px-8 z-10'>
        <div className='uppercase tracking-[5px] text-[1em] md:text-xl transition ease-in'>
          <m.h4 whileHover={{ scale: .95, color: '#965f33', }} transition={{ duration: 0.3, ease: 'easeOut', }}>
            <Link className='font-bold' href='/#landing'>Katelin Frederick</Link>
          </m.h4>
        </div>

        <button
          className='inline desktop-nav:hidden'
          onClick={() => {
            setMenuIsOpen(!menuIsOpen)
          }}
        >
          {menuIsOpen ? (
            <X size={32} />
          ) : (
            <Menu size={32} />
          )}
        </button>

        {/* DESKTOP MENU */}
        <ul className='hidden desktop-nav:flex justify-around w-[65%]'>
          {navigationLinks.map((link, index) => (
            <m.li key={index} whileHover={{ scale: .95, color: '#965f33', }} transition={{ duration: 0.3, ease: 'easeOut', }}>
              <Link className='hover:text-gold-500 transition ease-in' href={link.href}>{link.text}</Link>
            </m.li>
          ))}

          <m.li whileHover={{ scale: .95, color: '#965f33', }} transition={{ duration: 0.3, ease: 'easeOut', }}>
            <Link
              className='hover:text-gold-500 transition ease-in'
              href={'/Resume.pdf'}
              target='_blank'
            >
              Resume
            </Link>
          </m.li>
        </ul>

        {/* MOBILE MENU */}
        {menuIsOpen && (
          <ul className='absolute right-0 h-[92vh] top-[8vh] desktop-nav:hidden flex flex-col items-center w-[50%] bg-gray-800/90'>
            {navigationLinks.map((link, index) => (
              <li
                key={index}
                className='w-full h-full flex justify-center items-center border-b-2 border-gray-100'
              >
                <m.div
                  whileHover={{ color: '#965f33', }}
                  transition={{ duration: 0.3, ease: 'easeOut', }}
                >
                  <Link className='ease-in' href={link.href}>{link.text}</Link>
                </m.div>
              </li>
            ))}

            <li
              className='w-full h-full flex justify-center items-center border-b-2 border-gray-100'
            >
              <m.div
                whileHover={{ color: '#965f33', }}
                transition={{ duration: 0.3, ease: 'easeOut', }}
              >
                <Link
                  className='ease-in'
                  href={'/Resume.pdf'}
                  target='_blank'
                >
                  Resume
                </Link>
              </m.div>
            </li>
          </ul>
        )}
      </nav>
    </LazyMotion>
  )
}

export default NavBar
