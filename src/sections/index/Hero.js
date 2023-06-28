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
                  UX Writer & Designer
                </Text>
                <Title variant="Hero">
                  Enhancing UX through clear copy & modern design.
                </Title>
                <Box mb="102px" mt="52px">
                  <a href={myPdf} target="_blank" rel="noopener noreferrer">
                    <Button variant={"#7155ff"}>Download Jaime's resume</Button>
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
