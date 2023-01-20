import React from 'react'
import { Element } from 'react-scroll'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/index/Hero'
import Works from '../sections/index/Works'
import Contact from '../sections/index/Contact'

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Element name="works">
          <Works />
        </Element>

        <Contact />
      </PageWrapper>
    </>
  )
}
export default IndexPage
