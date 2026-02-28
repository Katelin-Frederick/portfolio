'use client'

import React, { useState, } from 'react'

import { PopoverContent, PopoverTrigger, Popover, } from '@/components/ui/popover'
import { Badge, } from '@/components/ui/badge'

const NextBadge = () => {
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
        <Badge className='bg-next/15 border border-next m-3'>
          <svg width={24} fill='#000000' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Next.js</title><path d='M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z' /></svg>
          Next
        </Badge>
      </PopoverTrigger>
      <PopoverContent>
        <div className='p-3 bg-gray-500 rounded-sm'>
          <p className='mb-3'><span className='font-bold'>Used Since:</span> 2021</p>

          <p className='font-bold'>Experience:</p>
          <ul className='list-inside ml-3'>
            <li>Accenture Federal Services</li>
            <ol className='list-decimal list-inside ml-3'>
              <li>Lead Developer</li>
              <li>Full-Stack Engineer</li>
            </ol>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default NextBadge