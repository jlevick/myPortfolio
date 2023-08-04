import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Title, Text, Button } from "../../../components/Core";

const CaseStudySl = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row>
            <Col lg="6">
              <div>
                {/* <Title color="light" variant="secSm">
                  Duration
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  2.5 months
                </Text> */}
                <Title color="light" variant="secSm">
                  My Role
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  UX Writer and Content Strategist on a 3-person UXW team
                </Text>
              </div>
            </Col>
            <Col lg="6">
              <div>
                {/* <Title color="light" variant="secSm">
                  Tools
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  Figma, FigJam, Notion, Slack, Google Docs, Vowel
                </Text> */}
                <Title color="light" variant="secSm">
                  Project Goal
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Create new content to align with Sean Legacy’s standards and values
                  </Text>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="justify-content-center">
              <div>
                <Title color="light" variant="secSm">
                  The Client
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  Sean's Legacy is a non-profit dedicated to supporting LGBTQIA+ youth, with a primary focus on suicide prevention 
                </Text>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="justify-content-center">
              <div>
                <Title color="light" variant="secSm">
                  Project Overview
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  Working closely on a 42-person agile team, we focused on designing for both mentee and mentor sides of the platform
                  </Text>
              </div>
              <div>
              <Title color="light" variant="secSm">How I helped</Title>
              <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  <li>Audited exisiting designs</li>
                  <li>Developed the initial Voice and Tone and Content Style Guide</li>
                  <li>Worked with Research to understand user needs</li>
                  <li>Wrote copy for both sides of the platform</li>
                  <li>Collaborated with Design on content strategy</li>
                  <li>Consulted with Development on feature feasibility</li>
                  </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Container>
        <Row className="pl-4 mt-5">
          <div className="pt-4">
            <Title variant="cardBig">Challenge</Title>
            <Text className="mb-4 mt-4">
              The product voice was not determined, making it difficult to bring personality and a sense of trust to the platform.
            </Text>
            <Text className="mb-4 mt-4">
            <b>Mentees need</b>:
            <li>increased clarity on the purpose of the mentorship platform and its safety features</li> 
            <li>guidance, personalization, and inclusivity</li>
            </Text>
              <Text className="mb-4 mt-4">
            <b>Mentors need:</b>
              <li>support and resources, as they struggle with imposter syndrome</li>
              <li>safety and privacy</li>
            </Text>
          </div>
        </Row>
        <Row className="pl-4">
          <div className="pt-5">
            <Title variant="cardBig">Solution</Title>
            <Text className="mb-4 mt-4"> 
            Develop voice and tone, clarify copy for safety and privacy features, and offer supportive, user-appropriate language.
            </Text>
          </div>
        </Row>
        {/* <Container>
        <Row className="pl-4 mt-5 justify-content-center">
          <div className="pt-lg-0">
            <a
              target="_blank"
              rel="noreferrer"
              href={
                "https://www.figma.com/proto/tzM0sqMOb7b6MZelUkUDKX/SL-Design-Team-1-(Phase-2)?node-id=7066-271024&scaling=min-zoom&page-id=6848%3A267435&starting-point-node-id=7066%3A271024"
              }
            >
              <Button variant={"#7155ff"}>Phase 2 Mentee Prototype</Button>
            </a>
          </div>
        </Row>
      </Container> */}
      {/* <Container>
        <Row className="pl-4 mt-5 justify-content-center">
          <div className="pt-lg-0">
            <a
              target="_blank"
              rel="noreferrer"
              href={
                "https://www.figma.com/proto/Dct1zEwFxywItCubobcO7K/SL-UX-Design-2?node-id=1392-72476&scaling=min-zoom&page-id=1229%3A71044&starting-point-node-id=1392%3A72476&show-proto-sidebar=1"
              }
            >
              <Button variant={"#7155ff"}>Phase 2 Mentor Prototype</Button>
            </a>
          </div>
        </Row>
      </Container> */}
      </Container>
    </>
  );
};

export default CaseStudySl;
