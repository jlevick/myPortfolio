import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
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
          <Col>
            <Row>
              <Box className="d-flex flex-column align-items-center text-center">
                <div className="img-main text-center w-50 h-50 mb-5">
                  <ImgRight src={imgPhoto} alt="Laptop Image" className="img-fluid" />
                </div>
                <Title
                  variant="card"
                  mb="2.5rem"
                  mt="2.5rem"
                  fontSize="1rem"
                  className="text-uppercase"
                  css={`
                    letter-spacing: 1.63px;
                  `}
                >
                  Web Dev
                </Title>
                <Title variant="hero" mb="1.5rem">
                  Front-End Portfolio
                </Title>
                <Text
                  color="text"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  A responsive portfolio site built with HTML, CSS, and vanilla
                  JavaScript.
                </Text>
              </Box>
            </Row>
          </Col>
        </Container>
      </SectionStyled>
    </>
  );
}

export default Hero
