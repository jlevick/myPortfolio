import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Title, Text, Span } from '../../components/Core'
import imgPhoto from '../../assets/image/png/jaime_small.png'

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.dark} !important;
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

const About = ({ hero = true, bg = 'light', ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="4">
              <div>
                <img src={imgPhoto} alt="folio" className="img-fluid" />
              </div>
            </Col>
            <Col lg="8">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                  Hi! I'm Jaime.
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: .07;
                  `}
                >
                  With 10+ years experience in customer-facing roles and a background in anthropology and gender studies, I have developed an affinity for enhancing every user's experience. <br />
                  <br />
                  To ensure useful and positive experiences, I seek to bring clarity to every interaction. 
                  I'm an open and empathetic communicator who strives for inclusivity and accessibility in my work.  
                  In conversation I endeavor to lift the figurative stone, awed by what may crawl out and the gems that always seem to be hidden underneath. 
                  <br />
                  <br /> While happily autonomous, my creativity thrives when given clear parameters.
                  Focused on delivering high-quality results rather than seeking recognition, I see failure as an opportunity to grow and I'll happily ask the silly questions. <br />
                  <br /> I enjoy anything I can zone in to: 
                  <li>climbing</li>
                  <li>snowboarding</li>
                  <li>research</li>
                  <li>writing</li>
                  <li>organization</li>
                  <li>learning to code</li>
                  <li>deep abstract thinking</li>
                  <br/>... you get the idea!
                </Text>
                <Text color="light" className="mt-4">
                  
                </Text>
                <div className="mt-4">
                  <Text color="light">Want to learn more? Send me a message!</Text>

                  <Text variant="p">
                    <a
                      href="mailto:jaimelevick@gmail.com"
                      className="font-weight-bold"
                    >
                      <Span color="light">jaimelevick@gmail.com</Span>
                    </a>
                  </Text>
                </div>
                <div className="mt-5">
                </div>
                <Text color="light" className="mt-3 font-weight-bold">
                </Text>
                <Text color="light" variant="small">
                </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default About
