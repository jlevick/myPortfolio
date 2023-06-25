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
            <Col lg="11" className="mb-5 mt-5">
              <Box mt="92px">
                <Text
                  variant="tag"
                  mb={4}
                  className="text-uppercase"
                  color="heading"
                >
                  UX Writer and Content Designer
                </Text>
                <Title variant="hero">
                  Enhancing UX through clear, concise copy.
                </Title>
                <Box mb="102px" mt="52px">
                  <a href={myPdf} target="_blank" rel="noopener noreferrer">
                    <Button variant={"#7155ff"}>Download my resume</Button>
                  </a>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
}

export default Hero
