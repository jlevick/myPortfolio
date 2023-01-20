import React from 'react'
import { Element } from 'react-scroll'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/front-end-portfolio/Hero'
import Works from '../sections/front-end-portfolio/Works'
import CTA from '../sections/front-end-portfolio/CTA'

const IndexPage = () => {
  return (
    <>
      <PageWrapper darkTheme>
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
