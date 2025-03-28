import * as React from 'react'

import { cn, } from '~/lib/utils'

const Textarea = ({ className, ...props }: React.ComponentProps<'textarea'>) => (
  <textarea
    data-slot='textarea'
    className={cn(
      'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-38 w-full rounded-sm border bg-white px-3 py-2 text-black shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      className
    )}
    {...props}
  />
)

export { Textarea, }
