import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Title, Text, Span } from '../../components/Core'
import imgPhoto from '../../assets/image/png/jaime_small.png'

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

const About = ({ hero = true, bg = 'light', ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="justify-content-center align-items-center py-5">
              <div className='w-25'>
                <img src={imgPhoto} alt="folio" className="img-fluid" />
              </div>
          </Row> 
          <Row>
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                  Hi! I'm Jaime.
                </Title>
                <Title color="light" variant="cardSm">(and that's Cricket in the photo)
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: .07;
                  `}
                >
                  With 10+ years in customer-facing roles and a background in anthropology and gender studies, I have an affinity for understanding and enhancing every user's experience. To ensure a useful and positive experience, I seek to bring clarity to every interaction. <br />
                  <br /> 
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
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default About
