import React from 'react'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/work/Hero'
import Works from '../sections/work/Works'
import Contact from '../sections/work/Contact'

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Works />
        <Contact />
      </PageWrapper>
    </>
  )
}
export default IndexPage
