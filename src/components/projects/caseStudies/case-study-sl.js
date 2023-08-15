import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Title, Text, Button } from "../../../components/Core";

const CaseStudySl = ({ hero = true, bg = "dark", ...rest }) => {
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
                  Help mentees understand the value Sean's Legacy Mentorship provides and who Sean's Legacy is.
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
                    Offer value proposition up front and clarify purpose of the platform through copywriting.
                  </Text>
                </div>
              </div>
            </Col>
          </Row>
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
                  UX Writer and Content Strategist on a 3 person UXW team.
                </Text>
              </div>
            </Col>
            <Col lg="6">
              <div>
                <Title color="light" variant="secSm">
                 The Client
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Sean's Legacy is a non-profit dedicated to supporting LGBTQIA+ youth, with a primary focus on suicide prevention.
                  </Text>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="justify-content-center">
              <div>
              <Title color="light" variant="secSm">How I helped</Title>
              <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  <li>Audited exisiting designs</li>
                  <li>Worked with Research to understand user needs</li>
                  <li>Collaborated with Design and Product on content strategy</li>
                  </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Container>
      {/* <Container>
        <Row className="pl-4 mt-5 justify-content-center">
          <div className="pt-lg-0">
            <a
              target="_blank"
              rel="noreferrer"
              href={
                "https://www.figma.com/proto/Dct1zEwFxywItCubobcO7K/SL-UX-Design-2?node-id=1392-72476&scaling=min-zoom&page-id=1229%3A71044&starting-point-node-id=1392%3A72476&show-proto-sidebar=1"
              }
            >
              <Button variant={"#7155ff"}>Phase 2 Mentor Prototype</Button>
            </a>
          </div>
        </Row>
      </Container> */}
      </Container>
    </>
  );
};

export default CaseStudySl;
