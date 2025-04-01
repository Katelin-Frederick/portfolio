'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'

import { cn, } from '~/lib/utils'

const Popover = ({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>) => <PopoverPrimitive.Root data-slot='popover' {...props} />

const PopoverTrigger = ({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) => <PopoverPrimitive.Trigger data-slot='popover-trigger' {...props} />

const PopoverContent = ({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      data-slot='popover-content'
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'bg-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border-2 border-gray-100 shadow-md outline-hidden',
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
)

const PopoverAnchor = ({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) => <PopoverPrimitive.Anchor data-slot='popover-anchor' {...props} />

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, }
