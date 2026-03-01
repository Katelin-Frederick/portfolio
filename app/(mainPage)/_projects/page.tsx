import React from 'react'

import ProjectCard from '@/components/ProjectCard'

import projectData from './projectData'

const Projects = () => (
  <section id='projects' className='mb-24 scroll-my-20 md:scroll-my-28'>
    <h2 className='text-3xl md:text-5xl text-center m-12'>Projects</h2>

    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto px-12'>
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
)

export default Projects
