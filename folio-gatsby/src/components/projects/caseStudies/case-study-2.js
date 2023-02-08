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

const CaseStudy2 = ({ hero = true, bg = 'dark', ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row>
            <Col lg="5">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                  Duration
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  2 months
                </Text>
                <Title color="light" variant="secSm">
                  My Role
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  Developer and Designer
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
                    line-height: 0.07;
                  `}
                >
                  VS Code, Github, Codepen.io, Figma
                </Text>
                <Title color="light" variant="secSm">
                  Project Goal
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                    Code a responsive portfolio website in order to learn front
                    end skills.
                  </Text>
                </div>
                <div className="mt-4 mb-5"></div>
                <Text color="light" className="mt-3 font-weight-bold"></Text>
                <Text color="light" variant="small"></Text>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="justify-content-center">
              <div className="pl-4 pl-lg-4">
                <Title color="light" variant="secSm">
                  Project Overview
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  In order to improve my communication with developers and
                  facilitate smooth design hand-offs, I sought to deepen my
                  understanding of the dynamic between UX designers and
                  developers by learning HTML, CSS, and vanilla JavaScript. In
                  order to exercise my front-end skills, I coded a responsive
                  portfolio website from scratch.
                </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Container>
        <Row className="pl-4 mt-5">
          <div className="pt-5 pt-lg-0">
            <Title variant="cardBig">Problem</Title>
            <Text color="dark" variant="secSm" className="mb-4 mt-4">
              Although designers and developers are both working toward the
              same goal, problems can arise when design decisions don’t take
              into account the technical limitations and challenges involved
              in bringing a design to life.
            </Text>
            <Text color="dark" variant="secSm">
              By familiarizing themselves with coding concepts, designers can
              better understand the capabilities and limitations of the
              development process, leading to smoother collaboration, easier
              design hand-offs, and more successful projects.
            </Text>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default CaseStudy2
