import React from 'react'
import Box from './Box'

const Section = ({ hero, children, ...rest }) => {
  return (
    <Box py={['20px', null, '25px', '30px']} {...rest} px={"20px"}>
      {hero && <Box mt={['20px', null, '35px', '45px']}></Box>}
      {children}
    </Box>
  )
}

export default Section
