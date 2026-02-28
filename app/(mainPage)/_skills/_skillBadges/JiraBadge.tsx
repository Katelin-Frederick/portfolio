'use client'

import React, { useState, } from 'react'

import { PopoverContent, PopoverTrigger, Popover, } from '@/components/ui/popover'
import { Badge, } from '@/components/ui/badge'

const JiraBadge = () => {
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
        <Badge className='bg-jira/15 border border-jira m-3'>
          <svg width={24} fill='#0052CC' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Jira</title><path d='M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z' /></svg>
          JIRA
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

export default JiraBadge