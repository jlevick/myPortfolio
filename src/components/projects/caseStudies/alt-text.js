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
                 The Global Justice Ecology Project (GJEP) has been defending people and forests from corporations and the threat of genetically engineered trees for 20 years. They want to increase both website accessibility and organic site traffic in order to reach a wider audience.
                </Text>
              </div>
              <div>
                <Title color="light" variant="secSm">
                  Solution
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                    Reach a wider audience by gettting Google to notice the website. Enhance on-page SEO by utilizing top keywords, and increase accessibility through writing useful alt text and meta descriptions.
                  </Text>
                </div>
              </div>
              <div>
                <Title color="light" variant="secSm">
                  Outcome
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  <li>Raised SEO Lighthouse scores from 83% to 92%</li>
                  <li>Image alt text was added to over 100 images</li>
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
                  UX Writing co-lead on a team of 5
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
