import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Title, Section, Box, Text } from '../../components/Core'

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
                Content Designer and UX Writer
                </Text>
                <Title variant="Hero">
                Empowering people, one word at a time. 
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
