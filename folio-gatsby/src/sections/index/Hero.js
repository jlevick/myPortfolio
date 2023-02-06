import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-scroll'

import { Title, Button, Section, Box, Text } from '../../components/Core'


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
            <Col lg="11" className="mb-5 mb-lg-0">
              <Box>
                <Text
                  variant="tag"
                  mb={4}
                  className="text-uppercase"
                  color="heading"
                >
                  UX Research and Content Design
                </Text>
                <Title variant="hero">
                Enhancing UX through clear, concise content.
                </Title>
                <Box mt="52px">
                <a target='_blank' rel="noreferrer" href={'static/levick_oxner_resume.pdf'}>
                    <Button variant={'#FF00FF'}  arrowRight>Download my resume</Button>
                </a>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Hero
