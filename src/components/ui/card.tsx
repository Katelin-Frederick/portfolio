import * as React from 'react'

import { cn, } from '~/lib/utils'

const Card = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot='card'
    className={cn(
      'flex flex-col gap-6 rounded-sm border-2 border-gray-100 px-3 pb-3 pt-6 shadow-sm',
      className
    )}
    {...props}
  />
)

const CardHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot='card-header'
    className={cn(
      '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
      className
    )}
    {...props}
  />
)

const CardTitle = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot='card-title'
    className={cn('leading-none font-semibold', className)}
    {...props}
  />
)

const CardDescription = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot='card-description'
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
)

const CardAction = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot='card-action'
    className={cn(
      'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
      className
    )}
    {...props}
  />
)

const CardContent = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot='card-content'
    className={cn('px-6', className)}
    {...props}
  />
)

const CardFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot='card-footer'
    className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
    {...props}
  />
)

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
