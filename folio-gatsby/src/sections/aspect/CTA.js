import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  LinkContact,
} from '../../components/Core'

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section className="position-relative">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="11" xl="10" className="text-center">
              <Box>
                <Title variant="secSm">
                  Let's connect!
                </Title>

                <Box
                  className="text-center d-flex justify-content-center"
                  mt={['3rem', null, '4rem']}
                >
                  <div className="d-flex flex-column flex-lg-row justify-content-center">
                    <LinkContact
                      href="jaimelevick@gmail.com"
                      target="_blank"
                      className="mb-2 mb-lg-0"
                    >
                      Email 
                    </LinkContact>
                    <span className="divider mx-2 mx-lg-4 d-none d-lg-block">
                      |
                    </span>
                    <LinkContact
                      href="https://www.linkedin.com/in/jaimelevickoxner/"
                      target="_blank"
                    >
                      LinkedIn
                    </LinkContact>
                  </div>
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
