import React from 'react'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/fgwr/Hero'
import Fgwr1 from '../components/projects/caseStudies/fgwr'
import Works from '../sections/user/Works'
import FgwrBody from '../components/projects/caseStudies/fgwr-body'
import CTA from '../sections/aspect/CTA'

const Fgwr = () => {
  return (
    <>
      <PageWrapper lightTheme>
        <Hero />
        <Fgwr1 />
        <FgwrBody />
        <Works />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default Fgwr