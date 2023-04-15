import React from 'react'
import { Element } from 'react-scroll'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/front-end-portfolio/Hero'
import Works from '../sections/samples/Works'
import CTA from '../sections/samples/CTA'

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