import React from "react";
import { Container, Row } from "react-bootstrap";
import { Section, Title, Text } from "../../Core";

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
                  The Global Justice Ecology Project (GJEP) has been around for 20 years, using direct action to defend people and forests from greedy corporations and the threat of genetically engineered (GE) trees. They want to increase both website accessibility and organic site traffic in order to reach a wider audience.
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
                  SEO Lighthouse scores raised from 83% to 92% and a content inventory of over 200 images was created.
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
