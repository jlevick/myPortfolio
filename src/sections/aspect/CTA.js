import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import {
  Title,
  Section,
  Box,
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
              <Box mt="42px" mb="22px">
                <Title variant="secSm">
                  Contact me
                </Title>

                <Box
                  className="text-center d-flex justify-content-center"
                  mt={['3rem', null, '4rem']}
                >
                  <div className="d-flex flex-column flex-lg-row justify-content-center">
                    <LinkContact
                      href={`mailto: jaimelevick@gmail.com`}
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
                    <span className="divider mx-2 mx-lg-4 d-none d-lg-block">
                      |
                    </span>
                    <LinkContact
                      href="https://github.com/jlevick"
                      target="_blank"
                    >
                      GitHub
                    </LinkContact>
                    <span className="divider mx-2 mx-lg-4 d-none d-lg-block">
                      |
                    </span>
                    <LinkContact
                      href="tel:3072211069"
                      target="_blank"
                    >
                      Call me
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
