import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Title, Text, Button } from "../../Core";

const User = ({ hero = true, bg = "dark", ...rest }) => {
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
                  The Sean's Legacy Mentorship platform needs to attract mentors in order to offer a successful product.
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
                  Offer language mentors already align with in order to personalize their experience and increase sign-ups.
                  </Text>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div>
                <Title color="light" variant="secSm">
                  Outcome
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Copy that resonates with mentors and eases concerns, and one word that didn't...
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
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default User;
