import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Title, Text, Button } from "../../../components/Core";

const Jargon = ({ hero = true, bg = "dark", ...rest }) => {
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
                   Users question what <i>Whisper Technology</i> is, and this confusion decreases trust in the platform. <br />My mission was to help users understand platform features in order to build trust.
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
                  Clarify confusing jargon to increase understanding of features and inspire confidence for users.
                  </Text>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div>
                <Title color="light" variant="secSm">
                  My Role
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  UX Writer and Content Strategist on a 3-person UXW team.
                  </Text>
                </div>
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
        </Container>
      </Section>
    </>
  );
};

export default Jargon;
