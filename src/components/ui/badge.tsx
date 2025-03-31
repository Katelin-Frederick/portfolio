import { type VariantProps, cva, } from 'class-variance-authority'
import { Slot, } from '@radix-ui/react-slot'
import * as React from 'react'

import { cn, } from '~/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md px-2 py-2 font-medium w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'text-primary-foreground [a&]:hover:bg-primary/90',
      },
    },
    defaultVariants: { variant: 'default', },
  }
)

const Badge = ({
  className,
  variant,
  asChild = false,
  ...props
}: VariantProps<typeof badgeVariants> &
  React.ComponentProps<'span'> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot='badge'
      className={cn(badgeVariants({ variant, }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants, }
