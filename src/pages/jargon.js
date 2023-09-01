import React from 'react'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/jargon/Hero'
import Works from '../sections/jargon/Works'
import Jargon from '../components/projects/caseStudies/jargon'
import JargonBody from '../components/projects/caseStudies/jargon-body'
import CTA from '../sections/aspect/CTA'

const jargon = () => {
  return (
    <>
      <PageWrapper lightTheme>
        <Hero />
        <Jargon />
        <JargonBody />
        <Works />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default jargon
