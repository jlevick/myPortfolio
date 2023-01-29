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
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                <img src={imgPhoto} alt="folio" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                Project Overview
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: .07;
                  `}
                >
                  In order to improve my communication with developers and facilitate smooth design hand-offs, I sought to deepen my understanding of the dynamic between UX designers and developers by learning HTML, CSS, and vanilla JavaScript. In order to exercise my front-end skills, I coded a responsive portfolio website from scratch. 

                  <br /> 
                  I'm an open and empathetic communicator who strives for inclusivity and accessibility in my work.
                  I prefer to lift the figurative stone in every conversation, awed by what crawls out and the gems that always seem to be hidden underneath. <br />
                  <br /> Focused on delivering high-quality results rather than seeking recognition, I see failure as an opportunity to grow and I'm not afraid to ask the "silly" questions. <br />
                  <br /> I enjoy anything I can zone in to: climbing, snowboarding, research, writing, organization, deep abstract thinking ... you get the idea.
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

export default CaseStudy2
