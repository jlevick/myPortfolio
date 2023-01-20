import React from 'react'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/aspect/Hero'
import Works from '../sections/aspect/Works'
import CTA from '../sections/aspect/CTA'

const IndexPage = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Hero />
        <Works />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default IndexPage
