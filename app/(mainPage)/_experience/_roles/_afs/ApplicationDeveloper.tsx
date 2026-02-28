import { Terminal, Code, } from 'lucide-react'
import React from 'react'

import { AccordionContent, AccordionTrigger, AccordionItem, } from '@/components/ui/accordion'

const ApplicationDeveloper = () => (
  <AccordionItem value='afs-full-application-developer'>
    <AccordionTrigger>
      <div className='flex items-center'>
        <Terminal className='inline mr-3' />
        <div>
          <h4 className='text-xl'>Application Developer</h4>
          <span className='text-sm'>07/2019 - 02/2021</span>
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
              Worked as a developer re-writing several Java Spring Boot applications with React and Next.js,
              delivering a modern user interface with improved user experience, application performance, and
              maintainability.
            </p>
          </div>
        </li>

        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Collaborated closely with design teams ensuring applications adhered to UI/UX standards, for
              consistent and seamless user experience. Participated in design discussions to align technical
              implementation with design goals.
            </p>
          </div>
        </li>

        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Implemented multilingual functionality into applications, enabling users to view and interact with
              applications in seven different languages. This enhancement expanded the user base and improved
              accessibility for non-English speaking users.
            </p>
          </div>
        </li>

        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Created application interfaces from wireframes provided by design teams, ensuring accurate
              translation of design concepts into functional and visually appealing user interfaces.
            </p>
          </div>
        </li>

        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Worked with the 508 testing team to ensure applications met accessibility standards.
            </p>
          </div>
        </li>

        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Actively participated in agile ceremonies, activities, and planning, including daily stand-ups, sprint
              reviews, retrospectives, and sprint planning sessions. Contributed to team discussions and
              collaborative problem-solving to achieve project goals.
            </p>
          </div>
        </li>
      </ul>
    </AccordionContent>
  </AccordionItem>
)

export default ApplicationDeveloper