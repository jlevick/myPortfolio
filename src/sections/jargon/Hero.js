import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

import { Title, Section, Box, Text } from '../../components/Core'

import bgHeroPattern from '../../assets/image/webp/hero-pattern.webp'

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: '';
    width: 100%;
    height: 120%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
            <Box
              className="text-center text-lg-right position-relative"
              
            >
              <div className="img-main text-center">
                
              </div>
            </Box>
          <Box mt="92px" className="d-flex flex-column text-center">
            <Title
              variant="card"
              mb="1.5rem"
              fontSize="1rem"
              className="text-uppercase"
              css={`
                letter-spacing: 1.63px;
              `}
            >
              UX Writing
            </Title>
            <Title variant="secSm" mb="1.5rem">
              Clarifying Jargon
            </Title>
             <Text>Users don't understand what <i>Whisper Technology</i> means. This confusion decreases trust and lowers conversion rates.</Text>
          </Box>
        </Container>
      </SectionStyled>
    </>
  );
}

export default Hero