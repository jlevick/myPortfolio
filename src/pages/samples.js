import React from 'react'
import { Element } from 'react-scroll'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/front-end-portfolio/Hero'
import Works from '../sections/front-end-portfolio/Works'
import CTA from '../sections/aspect/CTA'
import CaseStudy2 from '../components/projects/caseStudies/case-study-2'
import CaseStudy2Body from '../components/projects/caseStudies/case-study-2-body'

const IndexPage = () => {
  return (
    <>
      <PageWrapper lightTheme>
        <Hero />
        
        <CTA />
      </PageWrapper>
    </>
  )
}
export default IndexPage