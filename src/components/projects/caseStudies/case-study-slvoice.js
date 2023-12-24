import React from "react";
import { Container, Row } from "react-bootstrap";
import { Section, Title, Text } from "../../../components/Core";

const CaseStudySLVoice = ({ hero = true, bg = "dark", ...rest }) => {
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
                   The Sean's Legacy Mentorship Program is a free, online platform that matches LGBTQIA+ young adults with mentors in the queer community. The product voice was not determined, making it difficult to bring personality or a sense of trust to the platform. 
                </Text>
              </div>
              <div>
                <Title color="light" variant="secSm">
                  Solution
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Understand user needs, goals, concerns, and the language they use in order to build an appropriate voice persona. 
                  </Text>
                </div>
              </div>
              <div>
                <Title color="light" variant="secSm">
                  Outcome
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  More inclusive copy that resonated with both users and the client. My contribution played a key role in the future of Sean's Legacy's Mentorship platform by determining a unique voice that speaks directly to their audience.
                  </Text>
                </div>
              </div>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default CaseStudySLVoice;

