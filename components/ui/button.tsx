import { type VariantProps, cva, } from 'class-variance-authority'
import { Slot, } from '@radix-ui/react-slot'
import * as React from 'react'

import { cn, } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none  outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition ease-in hover:scale-97',
  {
    variants: {
      variant: {
        primary:
          'bg-gray-800/90 text-primary-foreground shadow-xs hover:bg-white/25 border-2 border-white',
        link: 'underline-offset-4 hover:underline hover:text-gray-100',
      },
      size: {
        default: 'px-3 py-2',
        sm: 'p-2 text-sm',
        lg: 'px-3 py-2 text-xl',
        icon: 'text-3xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: VariantProps<typeof buttonVariants>
  & React.ComponentProps<'button'> & {
    asChild?: boolean
  }) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className, }))}
      {...props}
    />
  )
}

export { Button, buttonVariants, }
