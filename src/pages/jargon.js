import React from 'react'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/jargon/Hero'
import Works from '../sections/jargon/Works'
import Jargon from '../components/projects/caseStudies/jargon'
import JargonBody from '../components/projects/caseStudies/jargon-body'

const jargon = () => {
  return (
    <>
      <PageWrapper lightTheme>
        <Hero />
        <Jargon />
        <JargonBody />
        <Works />
      </PageWrapper>
    </>
  )
}
export default jargon
