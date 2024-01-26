import React from "react";
import { Container, Row } from "react-bootstrap";
import { Section, Title, Text  } from "../../Core";

const Fgwr1 = ({ hero = true, bg = "dark", ...rest }) => {
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
                  It's the spring of 2020. Senior volunteers are alone and disconnected from the outside world. Technology use is low to nonexistent, increasing feelings of anixety and isolation. Volunteers need a way to earn their usual monthly stipend as they can no longer serve in their usual capacity.
                </Text>
              </div>
              <div>
                <Title color="light" variant="secSm">
                  Solution
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Develop a virtual technology training program to afford volunteers their usual stipend, and help volunteers connect with others during the COVID-19 pandemic.
                  </Text>
                </div>
              </div>
              <div>
                <Title color="light" variant="secSm">
                  Outcome
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Participation in the program grew by an astounding 80% within 6 months. Qualitative data confirmed participants felt more confident using technology after completing the program.
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
                  Sole Content Designer 
                  </Text>
                </div>
              </div>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Fgwr1;