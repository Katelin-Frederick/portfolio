import React from 'react'

import { CarouselPrevious, CarouselContent, CarouselItem, CarouselNext, Carousel, } from '@/components/ui/carousel'
import ProjectCard from '@/components/ProjectCard'

import projectData from './projectData'

const Projects = () => (
  <section id='projects' className='mb-24 snap-start scroll-my-20 md:scroll-my-28'>
    <h2 className='text-3xl md:text-5xl text-center m-12'>Projects</h2>

    <div className='max-w-screen px-12'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {projectData.map((project, index) => (
            <CarouselItem key={index} className='flex justify-center xl:basis-1/2 2xl:basis-1/3'>
              <div className='flex flex-col w-full max-w-[384px] items-center'>
                <ProjectCard {...project} />
              </div>
            </CarouselItem>

          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
)

export default Projects