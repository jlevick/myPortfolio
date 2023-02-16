import React from 'react'
import { Element } from 'react-scroll'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/seans-legacy/Hero'
import CTA from '../sections/aspect/CTA'

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
