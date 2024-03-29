import React from "react";
import { Container, Row } from "react-bootstrap";
import { Section, Title, Text } from "../../../components/Core";

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
                  Increased accessibility by removing confusing copy and abbreviations, resulting in 6 out of 6 users understanding this safety feature.
                  </Text>
                </div>
              </div>
          </Row>
          <Row>
            <div>
                <Title color="light" variant="secSm">
                  My Role
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Content Designer on a team of 3
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
