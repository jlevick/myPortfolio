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
                  My Role
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  UX Writer
                </Text>
              </div>
            </Col>
            <Col lg="6">
              <div>
                <Title color="light" variant="secSm">
                  Project Goal
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Define voice and tone for the Sean's Legacy Mentorship platform and create initial Content Style Guide.
                  </Text>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="justify-content-center">
              <div>
                <Title color="light" variant="secSm">
                  The Client
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  Sean's Legacy is a non-profit dedicated to supporting LGBTQIA+ youth, with a primary focus on suicide prevention. They are currently developing a platform focused on early career mentorship for LGBTQIA+ young adults.  
                </Text>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="justify-content-center">
              <div>
                <Title color="light" variant="secSm">
                  Project Overview
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                 A dedicated UX Content Team was new in the project's second phase. No voice and tone guidelines existed, however data was available from user interviews and usability testing. Our team of 3 UX Writers created the initial Content Style Guide for the project.
                </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Container>
        <Row className="pl-4 mt-5">
          <div className="pt-5">
            <Title variant="cardBig">Challenge</Title>
            <Text className="mb-4 mt-4">
                Define a consistent and appropriate writing style for the Sean's Legacy Mentorship platform.
            </Text>
            <Title variant="cardBig">Solution</Title>
            <Text className="mb-4 mt-4">
                Clarify product voice by understanding user needs, goals, concerns, and the language they use. 
                <br /> Create guidelines to standardize all copy.
            </Text>
          </div>
        </Row>
        <Row className="justify-content-center align-items-center">
            <Box mb="25px" mt="25px">
                <a href={myPdf} target="_blank" rel="noopener noreferrer">
                    <Button variant={"#7155ff"}>Content Style Guide</Button>
                </a>
            </Box>
        </Row>
      </Container>
    </>
  );
};

export default CaseStudySLVoice;
