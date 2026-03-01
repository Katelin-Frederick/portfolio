'use client'

import Image from 'next/image'
import React from 'react'

import { CardDescription, CardContent, CardHeader, CardAction, CardTitle, Card, } from './ui/card'
import { Button, } from './ui/button'

type ProjectCardProps = {
  image: {
    src: string,
    alt: string,
  },
  title: string,
  description: string,
  btnLinks: {
    demo: string,
    code: string,
  },
  skills: string[],
}

const ProjectCard = ({
  image,
  title,
  description,
  btnLinks,
  skills,
}: ProjectCardProps) => (
  <div className='flex flex-col h-full'>
    <div className='relative w-full h-60 sm:h-72'>
      <Image
        src={image.src}
        fill
        alt={image.alt}
        className='rounded-t-sm border-b-gold-500 border-b-2 object-cover'
      />
    </div>

    <Card className='flex flex-col flex-1 w-full p-1.5 rounded-t-none border-t-0'>
      <CardHeader className='p-0'>
        <CardTitle className='text-center text-2xl py-3'>{title}</CardTitle>
        <CardDescription className='text-center'>
          {description}
        </CardDescription>
      </CardHeader>

      <CardAction className='flex justify-around items-center w-full px-1 mt-auto mb-2'>
        <Button size='sm' className='mr-3.5'>
          <a href={btnLinks.demo} target='_blank' rel='noopener noreferrer' tabIndex={-1}>
            View Demo
          </a>
        </Button>
        <Button size='sm'>
          <a href={btnLinks.code} target='_blank' rel='noopener noreferrer' tabIndex={-1}>
            View Code
          </a>
        </Button>
      </CardAction>

      <CardContent className='p-0'>
        <p>Skills Used:</p>
        <ul className='mt-1.5 list-none'>
          {skills.map((skill, index) => (
            <li key={index} className='border border-gray-500 bg-gray-100 p-3'>
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </div>
)


export default ProjectCard