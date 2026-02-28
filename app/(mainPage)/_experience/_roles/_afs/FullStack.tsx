import { Terminal, Code, } from 'lucide-react'
import React from 'react'

import { AccordionContent, AccordionTrigger, AccordionItem, } from '@/components/ui/accordion'

const FullStack = () => (
  <AccordionItem value='afs-full-stack-engineer'>
    <AccordionTrigger>
      <div className='flex items-center'>
        <Terminal className='inline mr-3' />
        <div>
          <h4 className='text-xl'>Full-Stack Engineer</h4>
          <span className='text-sm'>03/2021 - 03/2023</span>
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
              Designed, built, and implemented applications based on business requirements and design
              wireframes.
            </p>
          </div>
        </li>

        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Worked closely with design teams to meet and surpass user experience standards. Ensured visual
              design and user interface were intuitive, accessible, and aligned with user needs.
            </p>
          </div>
        </li>

        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Implemented serverless architecture using Serverless Framework and AWS resources, including
              Lambda, API Gateway, S3, and DynamoDB. This approach increased application scalability,
              reduced operational overhead, and optimized cost-efficiency.
            </p>
          </div>
        </li>

        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Collaborated with testing teams to troubleshoot and resolve defects in a timely manner. Conducted
              root cause analysis and implemented effective solutions ensuring stability and reliability of
              applications.
            </p>
          </div>
        </li>

        <li className='mb-5'>
          <div className='flex'>
            <div className='mr-5'>
              <Code size={18} className='text-gold-500 self-start' />
            </div>
            <p className=''>
              Created and maintained comprehensive documentation, including technical specifications, API
              documentation, user guides, and troubleshooting manuals.
            </p>
          </div>
        </li>
      </ul>
    </AccordionContent>
  </AccordionItem>
)

export default FullStack