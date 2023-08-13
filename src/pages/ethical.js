import React from 'react'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/ethical/Hero'
import Works from '../sections/ethical/Works'
import Ethical from '../components/projects/caseStudies/ethical'
import EthicalBody from '../components/projects/caseStudies/ethical-body'

const ethical = () => {
  return (
    <>
      <PageWrapper lightTheme>
        <Hero />
        <Ethical />
        <EthicalBody />
        <Works />
      </PageWrapper>
    </>
  )
}
export default ethical 
