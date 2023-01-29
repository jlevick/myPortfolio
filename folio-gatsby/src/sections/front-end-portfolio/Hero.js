import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { Link } from 'react-scroll'

import { Title, Section, Box, Text, Button } from '../../components/Core'
import IconCircle from '../../components/IconCircle'

import bgHero from '../../assets/image/png/portfolio_mockup_index@2x.png'

const SectionStyled = styled(Section)`
  &::before {
    opacity: 0;
    position: absolute;
    top: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: url(${bgHero}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled
        hero
        className="position-relative"
        pt={['50px', null, '75px', '100px']}
        pb={['100px', null, '150px', '200px']}
      >
        <Container>
          <Box className="d-flex flex-column align-items-center text-center">
            

            <Title variant="hero" mb="1.5rem">
              Front-End Portfolio
            </Title>
            <Text
              color="text"
              css={`
                line-height: 1.5;
              `}
              mb="2.5rem"
            >
              A responsive portfolio site built with HTML, CSS, and vanilla JavaScript.
            </Text>
            <Link
              to="works"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
             
            </Link>
          </Box>
        </Container>
      </SectionStyled>
    </>
  )
}

export default Hero
