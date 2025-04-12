
'use client'

import { Menu, X, } from 'lucide-react'
import { motion, } from 'motion/react'
import { useState, } from 'react'
import Link from 'next/link'
import React from 'react'

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
    }
    // {
    //   href: '/blog',
    //   text: 'Blog',
    // }
  ]

  return (
    <nav className='flex justify-between items-center min-h-[8vh] bg-gray-800/90 border-b-6 border-gold-500 w-full fixed px-8 z-10'>
      <div className='uppercase tracking-[5px] text-[1em] md:text-xl transition ease-in'>
        <motion.h4 whileHover={{ scale: .95, color: '#965f33', }} transition={{ duration: 0.3, ease: 'easeOut', }}>
          <Link className='font-bold' href='/#landing'>Katelin Frederick</Link>
        </motion.h4>
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
          <motion.li key={index} whileHover={{ scale: .95, color: '#965f33', }} transition={{ duration: 0.3, ease: 'easeOut', }}>
            <Link className='hover:text-gold-500 transition ease-in' href={link.href}>{link.text}</Link>
          </motion.li>
        ))}

        <motion.li whileHover={{ scale: .95, color: '#965f33', }} transition={{ duration: 0.3, ease: 'easeOut', }}>
          <Link
            className='hover:text-gold-500 transition ease-in'
            href={'/Resume.pdf'}
            target='_blank'
          >
            Resume
          </Link>
        </motion.li>
      </ul>

      {/* MOBILE MENU */}
      {menuIsOpen && (
        <ul className='absolute right-0 h-[92vh] top-[8vh] desktop-nav:hidden flex flex-col items-center w-[50%] bg-gray-800/90'>
          {navigationLinks.map((link, index) => (
            <li
              key={index}
              className='w-full h-full flex justify-center items-center border-b-2 border-gray-100'
            >
              <motion.div
                whileHover={{ color: '#965f33', }}
                transition={{ duration: 0.3, ease: 'easeOut', }}
              >
                <Link className='ease-in' href={link.href}>{link.text}</Link>
              </motion.div>
            </li>
          ))}

          <li
            className='w-full h-full flex justify-center items-center border-b-2 border-gray-100'
          >
            <motion.div
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
            </motion.div>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar