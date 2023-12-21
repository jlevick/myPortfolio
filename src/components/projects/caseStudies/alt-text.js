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
                  The Global Justice Ecology Project both needs and wants to increase their website accessibility.  
                </Text>
              </div>
              <div>
                <Title color="light" variant="secSm">
                  Solution
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Increase accessibility through clear, descriptive alt text, and improving content readability. 
                  </Text>
                </div>
              </div>
              <div>
                <Title color="light" variant="secSm">
                  Outcome
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Accessibility scores increased X amount and a content style guide was created to house readability guidelines. Adding alt text also increased the site's SEO as both drive search engine traffic.  
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
