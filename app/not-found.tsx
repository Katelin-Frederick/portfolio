import Image from 'next/image'
import Link from 'next/link'

import { Button, } from '@/components/ui/button'

const NotFound = () => (
  <div className='flex min-h-[70vh] flex-col items-center justify-center px-6 pt-[calc(8vh+2rem)] text-center'>
    <Image
      src='/images/undraw_to-the-moon_w1wa.svg'
      alt='Astronaut floating in space'
      width={300}
      height={300}
      unoptimized
      className='mb-6'
    />

    <p className='text-8xl font-bold text-gold-500'>404</p>

    <h1 className='mt-4 text-2xl font-semibold'>Houston, we have a problem.</h1>

    <p className='mt-2 max-w-sm text-white/50'>
      The page you&apos;re looking for has drifted beyond the known universe.
      Mission Control cannot locate it.
    </p>

    <Button asChild size='lg' className='mt-8'>
      <Link href='/'>Return to Earth</Link>
    </Button>
  </div>
)

export default NotFound
