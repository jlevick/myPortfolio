import React from 'react'
import { Element } from 'react-scroll'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/sl-voice/hero'
import CTA from '../sections/aspect/CTA'
import CaseStudySLVoice from '../components/projects/caseStudies/case-study-slvoice'
import CaseStudySLVoiceBody from '../components/projects/caseStudies/case-study-slvoice-body'

const slvoice = () => {
  return (
    <>
      <PageWrapper lightTheme>
        <Hero />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default slvoice
