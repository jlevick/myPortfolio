import React from 'react'
import { Element } from 'react-scroll'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/index/Hero'
import Works from '../sections/index/Works'
import CTA from '../sections/aspect/CTA'

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Element name="works">
          <Works />
        </Element>

        <CTA />
      </PageWrapper>
    </>
  )
}
export default IndexPage
