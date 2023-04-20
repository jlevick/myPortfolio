import React from 'react'
import { Element } from 'react-scroll'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/seans-legacy/Hero'
import CTA from '../sections/aspect/CTA'
import CaseStudySl from '../components/projects/caseStudies/case-study-sl'
import CaseStudySLBody from '../components/projects/caseStudies/case-study-sl-body'

const SeansLegacy = () => {
  return (
    <>
      <PageWrapper lightTheme>
        <Hero />
  
        <CTA />
      </PageWrapper>
    </>
  )
}
export default SeansLegacy
