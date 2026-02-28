import { Terminal, Code, } from 'lucide-react'
import React from 'react'

import { AccordionContent, AccordionTrigger, AccordionItem, } from '@/components/ui/accordion'

const LeadDeveloper = () => (
  <AccordionItem value='afs-lead-developer'>
    <AccordionTrigger>
      <div className='flex items-center'>
        <Terminal className='inline mr-3' />
        <div>
          <h4 className='text-xl'>Lead Developer</h4>
          <span className='text-sm'>04/2023 - Present</span>
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <ul className='list-inside ml-3 mt-5'>
        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Led an agile team of four developers, fostering a collaborative and productive work environment.
              Supported team members by providing technical guidance and ensuring alignment with project
              goals.
            </p>
          </div>
        </li>

        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Oversaw the development and enhancement of a comprehensive suite of applications allowing
              users to upload documents digitally with ease and efficiency. The suite had over 1 million
              submissions in 2024 and saved over 4 million pages of paper.
            </p>
          </div>
        </li>

        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Developed and enhanced accompanying suite of admin applications allowing over 20,000 users to
              manage submissions, streamlining internal workflows and reducing processing times.
            </p>
          </div>
        </li>

        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Directed the strategic migration of the codebase from JavaScript to TypeScript, significantly
              enhancing error handling and code maintainability, leading to a more robust and scalable
              application architecture.
            </p>
          </div>
        </li>

        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Designed, implemented, and consumed RESTful APIs for seamless data exchange between
              administrative and public applications, ensuring data consistency and integrity across different
              platforms.
            </p>
          </div>
        </li>

        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Provided guidance and mentorship to junior and mid-level developers, fostering a collaborative and
              growth-oriented environment. Conducted code reviews, shared best practices, provided
              performance feedback, and supported career development.
            </p>
          </div>
        </li>

        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Delegated tickets and tasks to team members, ensuring work was distributed according to individual
              strengths and project requirements.
            </p>
          </div>
        </li>

        <li>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Conducted comprehensive and interactive application demonstrations for clients, highlighting key
              features, functionalities, and benefits of developed solutions.
            </p>
          </div>
        </li>
      </ul>
    </AccordionContent>
  </AccordionItem>
)

export default LeadDeveloper