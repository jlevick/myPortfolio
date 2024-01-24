import React from 'react'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/seans-legacy/Hero'
import Works from '../sections/seans-legacy/Works'
import CTA from '../sections/aspect/CTA'
import CaseStudySl from '../components/projects/caseStudies/case-study-sl'
import CaseStudySLBody from '../components/projects/caseStudies/case-study-sl-body'

const SeansLegacy = () => {
  return (
    <>
      <PageWrapper lightTheme>
        <Hero />
        <CaseStudySl />
        <CaseStudySLBody />
        <Works />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default SeansLegacy
