import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Title, Text, Span } from '../../../components/Core'
import imgPhoto from '../../../assets/image/png/aspect_index2@2x.png'

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`

const CaseStudy1 = ({ hero = true, bg = 'dark', ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-start justify-content-start">
            <Col lg="5">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                  <Title color="light" variant="secSm">
                    Duration
                  </Title>
                  <Text
                    color="light"
                    className="mt-4 mb-5"
                    css={`
                      line-height: .07;
                    `}
                    >
                      6 months
                  </Text>
                  <Title color="light" variant="secSm">
                    My Role
                  </Title>
                  <Text
                    color="light"
                    className="mt-4 mb-5"
                    css={`
                      line-height: .07;
                    `}
                  >
                    UX/UI Designer
                  </Text>
              </div>
            </Col>
            <Col lg="5">
              <div className="pl-4 pl-lg-4">
                <Title color="light" variant="secSm">
                Tools
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: .07;
                  `}
                >
                  Figma, Miro, UsabilityHub, Optimal Workshop
                </Text>
                <Title color="light" variant="secSm">
                  Type
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">Independent Project for CareerFoundry's UX Immersive</Text>
                </div>
                <div className="mt-4 mb-5">
                </div>
                <Text color="light" className="mt-3 font-weight-bold">
                </Text>
                <Text color="light" variant="small">
                </Text>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className='justify-content-center'>
              <div className="pl-4 pl-lg-4">
                <Title color="light" variant="secSm">
                  The Challenge
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: .07;
                    `}
                  >
                    Design the minimum viable product (MVP) of a mobile app that allows users to instantly connect with astrologers in order to ask astro-related questions.
                </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default CaseStudy1
