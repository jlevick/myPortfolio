import React from 'react'

import PageWrapper from '../components/PageWrapper'
import { Box } from '../components/Core'
import About from '../sections/others/About'
import CTA from '../sections/samples/CTA'

const AboutPage = () => {
  return (
    <>
      <PageWrapper>
        <Box pt={2}>
          <About />
          <CTA />
        </Box>
      </PageWrapper>
    </>
  )
}

export default AboutPage
