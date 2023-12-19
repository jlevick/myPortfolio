import React from "react";
import { Container, Row, Accordion, Card } from "react-bootstrap";
import { Section, Title, Text, Button } from "../../Core";

const User = ({ hero = true, bg = "dark", ...rest }) => {
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
                  The Sean's Legacy Mentorship platform needs to attract mentors in order to offer a successful product.
                </Text>
              </div>
              <div>
                <Title color="light" variant="secSm">
                  Solution
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Offer language mentors already align with in order to personalize their experience and increase sign-ups.
                  </Text>
                </div>
              </div>
              <div>
                <Title color="light" variant="secSm">
                  Outcome
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Copy that resonates with mentors and eases concerns, except one word that 3 out of 6 mentors found confusing...
                  </Text>
                </div>
              </div>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default User;
