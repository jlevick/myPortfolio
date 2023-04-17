import React from 'react'
import { Element } from 'react-scroll'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/seans-legacy/Hero'
import CTA from '../sections/aspect/CTA'
import CaseStudySl from '../components/projects/caseStudies/case-study-sl'

const SeansLegacy = () => {
  return (
    <>
      <PageWrapper lightTheme>
        <Hero />
        <CaseStudySl />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default SeansLegacy
