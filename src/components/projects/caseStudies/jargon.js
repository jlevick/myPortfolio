import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Title, Text, Button } from "../../../components/Core";

const Jargon = ({ hero = true, bg = "dark", ...rest }) => {
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
                   Help users understand platform features and the benefits they provide in order to build trust.
                </Text>
              </div>
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
              <div>
                <Title color="light" variant="secSm">
                  Outcome
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Increased accessibility by removing confusing copy and abbreviations, resulting in 100% of users understanding this safety feature.
                  </Text>
                </div>
              </div>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Jargon;
