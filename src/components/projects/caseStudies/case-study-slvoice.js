import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Title, Text, Button, Box } from "../../../components/Core";
import myPdf from '../../../../static/sl_content_style_guide.pdf';

const CaseStudySLVoice = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row>
            <Col lg="6">
              <div>
                <Title color="light" variant="secSm">
                  Challenge
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  The product voice was not determined, making it difficult to bring personality or a sense of trust to the platform. 
                </Text>
              </div>
            </Col>
            <Col lg="6">
              <div>
                <Title color="light" variant="secSm">
                 Solution
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Understand user needs, goals, concerns, and the language they use in order to build an appropriate voice persona. 
                  </Text>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="justify-content-center">
              <div>
                <Title color="light" variant="secSm">
                  Outcome
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  More inclusive copy that resonated with both users and the client. My contribution played a key role in the future of Sean's Legacy's Mentorship platform by determining a unique voice that speaks directly to their audience.
                </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default CaseStudySLVoice;
