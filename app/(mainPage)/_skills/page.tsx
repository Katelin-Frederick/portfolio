
import React from 'react'

import JavaScriptBadge from './_skillBadges/JavaScriptBadge'
import TypeScriptBadge from './_skillBadges/TypeScriptBadge'
import CloudWatchBadge from './_skillBadges/CloudWatchBadge'
import ConfluenceBadge from './_skillBadges/ConfluenceBadge'
import BitbucketBadge from './_skillBadges/BitbucketBadge'
import TailwindBadge from './_skillBadges/TailwindBadge'
import DynamoDbBadge from './_skillBadges/DynamoDbBadge'
import ExpressBadge from './_skillBadges/ExpressBadge'
import CognitoBadge from './_skillBadges/CognitoBadge'
import LambdaBadge from './_skillBadges/LambdaBadge'
import GitHubBadge from './_skillBadges/GitHubBadge'
import Html5Badge from './_skillBadges/Html5Badge'
import ReactBadge from './_skillBadges/ReactBadge'
import CSS3Badge from './_skillBadges/CSS3Badge'
import NextBadge from './_skillBadges/NextBadge'
import NodeBadge from './_skillBadges/NodeBadge'
import JiraBadge from './_skillBadges/JiraBadge'
import GitBadge from './_skillBadges/GitBadge'
import S3Badge from './_skillBadges/S3Badge'

const Skills = () => (
  <section id='skills' className='mb-24 px-7 scroll-my-20 md:scroll-my-28'>
    <h2 className='text-3xl md:text-5xl text-center m-12'>Skills</h2>

    <h3 className='text-xl text-center'>Frontend</h3>
    <div className='flex flex-wrap justify-center items-center mt-3 mb-8'>
      <Html5Badge />
      <JavaScriptBadge />
      <TypeScriptBadge />
      <CSS3Badge />
      <TailwindBadge />
    </div>

    <h3 className='text-xl text-center'>Libraries and Frameworks</h3>
    <div className='flex flex-wrap justify-center items-center mt-3 mb-8'>
      <ReactBadge />
      <NextBadge />
    </div>

    <h3 className='text-xl text-center'>Backend</h3>
    <div className='flex flex-wrap justify-center items-center mt-3 mb-8'>
      <NodeBadge />
      <ExpressBadge />
    </div>

    <h3 className='text-xl text-center'>AWS</h3>
    <div className='flex flex-wrap justify-center items-center mt-3 mb-8'>
      <DynamoDbBadge />
      <S3Badge />
      <LambdaBadge />
      <CloudWatchBadge />
      <CognitoBadge />
    </div>

    <h3 className='text-xl text-center'>Code Management and Collaboration</h3>
    <div className='flex flex-wrap justify-center items-center mt-3 mb-8'>
      <GitBadge />
      <GitHubBadge />
      <BitbucketBadge />
    </div>

    <h3 className='text-xl text-center'>Tools</h3>
    <div className='flex flex-wrap justify-center items-center mt-3 mb-8'>
      <JiraBadge />
      <ConfluenceBadge />
    </div>
  </section>
)

export default Skills