import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myPdf from '../../../static/resume_updated.pdf'

import { Title, Button, Section, Box, Text } from '../../components/Core'

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section hero className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg="13" className="mb-5 mt-5">
              <Box mt="92px">
                <Text
                  variant="tag"
                  mb={4}
                  className="text-uppercase"
                  color="heading"
                >
                UX Writer
                </Text>
                <Title variant="Hero">
                Empowering users, one word at a time. 
                </Title>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
}

export default Hero
