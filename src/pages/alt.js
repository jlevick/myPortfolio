import React from 'react'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/alt/Hero'
import Works from '../sections/user/Works'
import Alt1 from '../components/projects/caseStudies/alt-text'
import AltBody from '../components/projects/caseStudies/alt-text-body'
import CTA from '../sections/aspect/CTA'

const Alt = () => {
  return (
    <>
      <PageWrapper lightTheme>
        <Hero />
        <Alt1 />
        <AltBody />
        <Works />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default Alt 