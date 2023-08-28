import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Title, Text, Button } from "../../../components/Core";

const CaseStudySl = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row>
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
                  By focusing on benefits for the user and <i>not</i> the features that offer those benefits, users are 50% more likely to sign up for mentorship.
                </Text>
              </div>
          </Row>
        </Container>
      </Section>
      <Container>
      </Container>
    </>
  );
};

export default CaseStudySl;
