/* eslint-disable stylistic/max-len */
'use client'

import { zodResolver, } from '@hookform/resolvers/zod'
import { useForm, } from 'react-hook-form'
import React, { useState, } from 'react'
import { z, } from 'zod'

import { DialogDescription, DialogContent, DialogHeader, DialogTitle, Dialog, } from '@/components/ui/dialog'
import { FormControl, FormMessage, FormField, FormLabel, FormItem, Form, } from '@/components/ui/form'
import { Textarea, } from '@/components/ui/textarea'
import { Button, } from '@/components/ui/button'
import { Input, } from '@/components/ui/input'

const Contact = () => {
  const [successModalOpen, setSuccessModalOpen] = useState(false)
  const [errorModalOpen, setErrorModalOpen] = useState(false)

  const formSchema = z.object({
    ['form-name']: z.string(),
    name: z.string().min(2, { message: 'Name must be at least 2 characters.', }),
    email: z.string().email('Must be a valid email'),
    message: z.string().min(2, { message: 'Message must be at least 2 characters.', }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ['form-name']: 'contact-form',
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/__contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
        body: new URLSearchParams(values).toString(),
      })

      if (response.ok) {
        setSuccessModalOpen(true)
        form.reset()
      } else if (response.status === 405) {
        throw new Error('Method Not Allowed')
      } else {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSuccessModalOpen(false)
      setErrorModalOpen(true)
    }
  }

  return (
    <section id='contact' className='mb-24 px-7 scroll-my-20 md:scroll-my-28'>
      <h2 className='text-3xl md:text-5xl text-center m-12'>Get In Touch</h2>

      <p className='md:text-xl'>
        If you are interested in working with me or want more information about my work, I would love to hear from you! You can contact me by filling out the form or through any of the social media platforms listed below:
      </p>

      <Form {...form}>
        <form
          name='contact-form'
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 flex flex-col items-center mt-12'
        >
          <FormField
            control={form.control}
            name='form-name'
            render={({ field, }) => (
              <FormItem>
                <FormControl>
                  <Input hidden {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='name'
            render={({ field, }) => (
              <FormItem>
                <FormLabel>Name:</FormLabel>
                <FormControl>
                  <Input placeholder='Name...' className='w-[80vw] md:w-[70vw] lg:w-[50vw] max-w-2xl' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field, }) => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input placeholder='Email...' className='w-[80vw] md:w-[70vw] lg:w-[50vw] max-w-2xl' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='message'
            render={({ field, }) => (
              <FormItem>
                <FormLabel>Message:</FormLabel>
                <FormControl>
                  <Textarea placeholder='Message...' className='w-[80vw] md:w-[70vw] lg:w-[50vw] max-w-2xl' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='self-center'>Submit</Button>
        </form>
      </Form>

      <Dialog open={successModalOpen} onOpenChange={setSuccessModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='text-center'>Your Submission Has Been Received!</DialogTitle>
            <DialogDescription className='text-white text-center'>
              Thank you for your submission
            </DialogDescription>
          </DialogHeader>

          <Button onClick={() => setSuccessModalOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>

      <Dialog open={errorModalOpen} onOpenChange={setErrorModalOpen}>
        <DialogContent className='border-red-800 bg-red-500/85'>
          <DialogHeader>
            <DialogTitle className='text-center'>Error Submitting Message</DialogTitle>
            <DialogDescription className='text-white text-center'>
              Please try again
            </DialogDescription>
          </DialogHeader>

          <Button onClick={() => setErrorModalOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Contact