import React from 'react'

import PageWrapper from '../components/PageWrapper'
import { Box } from '../components/Core'
import About from '../sections/others/About'

const AboutPage = () => {
  return (
    <>
      <PageWrapper>
        <Box pt={5}>
          <About />
        </Box>
      </PageWrapper>
    </>
  )
}

export default AboutPage
