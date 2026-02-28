'use client'

import React, { useState, } from 'react'

import { PopoverContent, PopoverTrigger, Popover, } from '@/components/ui/popover'
import { Badge, } from '@/components/ui/badge'

const Html5Badge = () => {
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
        <Badge className='bg-html5/15 border border-html5 m-3'>
          <svg width='24px' fill='#E34F26' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>HTML5</title><path d='M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z' /></svg>
          HTML5
        </Badge>
      </PopoverTrigger>
      <PopoverContent>
        <div className=' p-3 bg-gray-500 rounded-sm'>
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

export default Html5Badge