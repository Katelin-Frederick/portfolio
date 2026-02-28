'use client'

import React, { useState, } from 'react'

import { PopoverContent, PopoverTrigger, Popover, } from '@/components/ui/popover'
import { Badge, } from '@/components/ui/badge'

const CSS3Badge = () => {
  const [open, setOpen] = useState(false)

  const handleMouseEnter = () => {
    setOpen(true)
  }

  const handleMouseLeave = () => {
    setOpen(false)
  }

  return (
    <Popover
      open={open} onOpenChange={setOpen}
    >
      <PopoverTrigger
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Badge className='bg-css3/15 border border-css3 m-3'>
          <svg width={24} fill='#1572B6' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>CSS3</title><path d='M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z' /></svg>
          CSS3
        </Badge>
      </PopoverTrigger>
      <PopoverContent>
        <div className='p-3 bg-gray-500 rounded-sm'>
          <p className='mb-3'><span className='font-bold'>Used Since:</span> 2019</p>

          <p className='font-bold'>Experience:</p>
          <ul className='list-inside ml-3'>
            <li>Accenture Federal Services</li>
            <ol className='list-decimal list-inside ml-3'>
              <li>Lead Developer</li>
              <li>Full-Stack Engineer</li>
              <li>Application Developer</li>
            </ol>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default CSS3Badge