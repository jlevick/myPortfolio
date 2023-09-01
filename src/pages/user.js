import React from 'react'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/user/Hero'
import Works from '../sections/user/Works'
import User from '../components/projects/caseStudies/user'
import UserBody from '../components/projects/caseStudies/user-body'
import CTA from '../sections/aspect/CTA'

const user = () => {
  return (
    <>
      <PageWrapper lightTheme>
        <Hero />
        <User />
        <UserBody />
        <Works />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default user 
