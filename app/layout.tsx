import type { Metadata, } from 'next'

import NavBar from '@/components/NavBar'

import './globals.css'
import Footer from '@/components/Footer'
import { oxygen, } from '@/fonts'
import { cn, } from '@/lib/utils'

export const metadata: Metadata = {
  title: {
    default: 'Your Name — Developer',
    template: '%s | Your Name',
  },
  description: 'Full-stack developer portfolio and blog.',
}

const RootLayout = ({ children, }: Readonly<{
  children: React.ReactNode
}>) => (
  <html lang='en' className={cn(`${oxygen.className}`, 'scroll-smooth')}>
    <body className='flex flex-col min-h-screen'>
      <NavBar />
      <div className='flex-1'>
        {children}
      </div>
      <Footer />
    </body>
  </html>
)

export default RootLayout
