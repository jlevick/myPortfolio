import React from 'react'
import { Element } from 'react-scroll'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/samples/Hero'
import Works from '../sections/samples/Works'
import CTA from '../sections/samples/CTA'
import CaseStudySample from '../components/projects/caseStudies/case-study-sample'

const IndexPage = () => {
  return (
    <>
      <PageWrapper lightTheme>
        <Hero />
        <CaseStudySample />
        <Works />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default IndexPage