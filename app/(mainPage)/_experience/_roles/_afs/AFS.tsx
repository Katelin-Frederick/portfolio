import React from 'react'

import { Accordion, } from '@/components/ui/accordion'

import ApplicationDeveloper from './ApplicationDeveloper'
import LeadDeveloper from './LeadDeveloper'
import FullStack from './FullStack'

const AFS = () => (
  <Accordion type='multiple' className='w-full' defaultValue={['afs-lead-developer']}>
    <LeadDeveloper />

    <FullStack />

    <ApplicationDeveloper />
  </Accordion>
)

export default AFS