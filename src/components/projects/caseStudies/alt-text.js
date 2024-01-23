import React from "react";
import { Container, Row, Accordion, Card } from "react-bootstrap";
import { Section, Title, Text, Button } from "../../Core";

const Alt1 = ({ hero = true, bg = "dark", ...rest }) => {
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
                  The Global Justice Ecology Project (GJEP) needs to increase both website accessibility and organic site traffic.
                </Text>
              </div>
              <div>
                <Title color="light" variant="secSm">
                  Solution
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Increase search engine optimization (SEO) and accessibility through useful alt text and meta descriptions.
                  </Text>
                </div>
              </div>
              <div>
                <Title color="light" variant="secSm">
                  Outcome
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  SEO scores raised from 83% to 92%, while accessibility scores raised by 1%.
                  </Text>
                </div>
              </div>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Alt1;
