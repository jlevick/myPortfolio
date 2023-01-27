import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Title, Text, Span } from '../../components/Core'
import imgPhoto from '../../assets/image/jpg/photo/regular/portfolio-about-2.jpg'
import imgSignLight from '../../assets/image/png/signature.png'

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

const About = ({ hero = true, bg = 'dark', ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                <img src={imgPhoto} alt="folio" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6">
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
                  With 10+ years of experience in customer-facing roles and an educational background in sociocultural anthropology and gender studies, I have developed an affinity for enhancing every user's experience. <br />
                  <br /> 
                  I am an open and empathetic communicator who prefers to lift the figurative stone in every conversation, awed by what crawls out and the gems that always seem to be hidden underneath. <br />
                  I focus on delivering high-quality results rather than seeking recognition or accolades. I see failure as an opportunity to learn and am not afraid to ask those "silly" questions. <br />
                  <br /> I love anything I can zone in to: climbing, snowboarding, research, organization, deep abstract thinking ... you get the idea!
                </Text>
                <Text color="light" className="mt-4">
                  I strive for inclusivity and accessibility in my work.
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
