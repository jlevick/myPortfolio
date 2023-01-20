import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-scroll'

import { Title, Button, Section, Box, Text } from '../../components/Core'

import { device } from '../../utils'
import imgL from '../../../../doc/assets/images/aspect_profile_image_background@1x.png'

const ImgRight = styled.img`
  max-width: 100%;
`

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section hero className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg="7" className="mb-5 mb-lg-0">
              <Box>
                <Text
                  variant="tag"
                  mb={4}
                  className="text-uppercase"
                  color="heading"
                >
                  UX DESIGNER WITH FRONT-END SKILLS
                </Text>
                <Title variant="hero">
                  I'm a UX designer with web development experience and a love
                  for research. I am passionate about utilizing copywriting to
                  make things easier for people.
                </Title>

                <Box mt="52px">
                  <Link
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                  >
                    <Button arrowRight>Check out my work</Button>
                  </Link>
                </Box>
              </Box>
            </Col>
            <Col lg="5" md="8" sm="9">
              <div className="text-center text-lg-right position-relative">
                <div className="img-main">
                  <ImgRight src={imgL} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Hero
