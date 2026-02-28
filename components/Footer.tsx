import { Linkedin, Twitter, Github, MapPin, } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => (
  <footer className='bg-gray-800 backdrop-blur-sm border-t-6 border-gold-500 py-12'>
    <div className='grid grid-cols-1 md:grid-cols-2 container mx-auto'>
      <div className='text-center md:text-left'>
        <h5 className='font-bold text-xl mb-4'>Katelin Frederick</h5>

        <div>
          <p><MapPin className='inline mr-1' />Location: Toledo, OH</p>
        </div>
      </div>

      <div className='text-center md:text-right'>
        <div className='flex justify-center md:justify-end mb-4 mt-4 md:mt-0'>
          <a
            href='https://github.com/Katelin-Frederick'
            target='_blank'
            rel='noopener noreferrer'
            className='mx-4'
          >
            <Github color='#9E95B7' size={28} />
          </a>

          <a
            href='https://www.linkedin.com/in/katelin-frederick'
            target='_blank'
            rel='noopener noreferrer'
            className='mx-4'
          >
            <Linkedin color='#0D597F' size={28} />
          </a>

          <a
            href='https://x.com/KatieNFrederick'
            target='_blank'
            rel='noopener noreferrer'
            className='ml-4'
          >
            <Twitter color='#40AEF0' size={28} />
          </a>
        </div>

        <Link
          className='text-white underline hover:text-gold-500'
          href='mailto:k.frederick94@gmail.com'
        >
          k.frederick94@gmail.com
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer