import React from 'react'
import styled from 'styled-components'
import { Container, Row } from 'react-bootstrap'
import { Title, Section, Box, Text } from '../../components/Core'
import imgPhoto from "../../assets/image/png/portfolio_index@2x.png";

const SectionStyled = styled(Section)`
  &::before {
    opacity: 0;
    position: absolute;
    top: 0;
    content: '';
    width: 100%;
    height: 100%;
    background-size: cover;
    z-index: -1;
  }
`
const ImgRight = styled.img`
  border-radius: 10%;
  transition: 0.8s;
  &:hover {
    transform: scale(0.8) rotate(-2deg);
    box-shadow: 0 32px 74px rgba(68, 77, 136, 0.2);
  }
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled
        hero
        className="position-relative"
        pt={["25px", null, "25px", "30px"]}
      >
        <Container>
            <Row>
            <Box mt="" className="d-flex flex-column text-center">
            <Box
              className="text-center text-lg-right position-relative"
              pb=""
            >
              <div className="img-main text-center">
                <ImgRight src={imgPhoto} alt="" className="w-25" />
              </div>
            </Box>
            <Title
              variant="card"
              mb="1.5rem"
              fontSize="1rem"
              className="text-uppercase"
              css={`
                letter-spacing: 1.63px;
              `}
            >
              Web Dev
            </Title>
            <Title variant="secSm" mb="1.5rem">
              Frontend Development
            </Title>
            <Text>
              Building a responsive portfolio site with HTML, CSS, and vanilla JavaScript.
            </Text>
          </Box>
            </Row>
        </Container>
      </SectionStyled>
    </>
  );
}

export default Hero
