import React from 'react'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/aspect/Hero'
import Works from '../sections/aspect/Works'
import CTA from '../sections/aspect/CTA'
import CaseStudy1 from '../components/projects/caseStudies/case-study-1'

const IndexPage = () => {
  return (
    <>
      <PageWrapper lightTheme>
        <Hero />
        <CaseStudy1 />
        <Works />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default IndexPage
