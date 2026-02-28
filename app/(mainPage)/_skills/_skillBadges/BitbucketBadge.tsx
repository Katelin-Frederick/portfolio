'use client'

import React, { useState, } from 'react'

import { PopoverContent, PopoverTrigger, Popover, } from '@/components/ui/popover'
import { Badge, } from '@/components/ui/badge'

const BitbucketBadge = () => {
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
        <Badge className='bg-bitbucket/15 border border-bitbucket m-3'>
          <svg width={24} fill='#0052CC' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Bitbucket</title><path d='M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 00.77-.646l3.27-20.03a.768.768 0 00-.768-.891zM14.52 15.53H9.522L8.17 8.466h7.561z' /></svg>
          Bitbucket
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

export default BitbucketBadge