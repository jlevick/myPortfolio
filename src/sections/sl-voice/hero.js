import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

import { Title, Section, Box, Text} from '../../components/Core'

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

const ImgRight = styled.img`
  border-radius: %;
  transition: 0.8s;
  &:hover {
    transform: scale(0.8) rotate(-2deg);
    box-shadow: 0 32px 74px rgba(68, 77, 136, 0.2);
  }
`

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
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
            <Title variant="secSm" color="dark" mb="1rem">
              Voice and Tone Development
            </Title>
            <Text>Using research to create a unique persona that aligns with Sean's Legacy's brand values and objectives.</Text>
          </Box>
        </Container>
      </SectionStyled>
    </>
  );
}

export default Hero
