import React from 'react'
import { Element } from 'react-scroll'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/samples/Hero'
import CTA from '../sections/samples/CTA'
import CaseStudySample from '../components/projects/caseStudies/case-study-sample'

const IndexPage = () => {
  return (
    <>
      <PageWrapper lightTheme>
        <Hero />
        <CaseStudySample />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default IndexPage