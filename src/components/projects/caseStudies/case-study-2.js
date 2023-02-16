import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Section, Title, Text, Button } from '../../../components/Core'

const CaseStudy2 = ({ hero = true, bg = 'dark', ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row>
            <Col lg="6">
              <div>
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
            <Col lg="6">
              <div>
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
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="justify-content-center">
              <div>
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
          <div className="pt-5">
            <Title variant="cardBig">Problem</Title>
            <Text className="mb-4 mt-4">
              Designers and developers are working toward the same goal, but problems can arise when design decisions don't take into account the technical limitations and challenges involved in bringing a design to life.   
            </Text>
            <Text className="mb-4 mt-4">
            By becoming familiar with coding concepts, designers can better understand the capabilities and limitations of the development process.  This leads to smoother collaboration, easier design hand-offs, and more successful projects.
            </Text>
          </div>
        </Row>
      </Container>
      <Container>
        <Row className="pl-4 mt-5 mb-5 justify-content-center">
          <div>
            <a target='_blank' rel="noreferrer" href={'https://jlevick.github.io/portfolio-website/index.html'}>
                <Button variant={'#7155ff'}>Finished Website</Button>
            </a>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default CaseStudy2
