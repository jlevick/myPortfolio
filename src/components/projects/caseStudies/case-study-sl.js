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
                <Title color="light" variant="secSm">
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
                </Text>
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
                <Title color="light" variant="secSm">
                  Tools
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  Figma, Notion, Slack, Vowel
                </Text>
                <Title color="light" variant="secSm">
                  Project Goal
                </Title>
                <div className="mt-4 mb-5">
                  <Text color="light">
                  Audit existing content from Phase 1 and create new content to align with Sean Legacy’s standards and values.
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
                  Sean's Legacy is a non-profit dedicated to supporting LGBTQIA+ youth, with a primary focus on suicide prevention. They are creating a professional mentorship program that provides LGBTQIA+ young adults a safe space to seek career guidance and form long-lasting professional relationships.
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
                  The UX Content Team was new in the project's second phase. We worked closely with Designers, Researchers, and Developers on a 42-person agile team.
                  Phase 1 focused on researching and designing for the mentee side of the platform. Phase 2 continued with the mentee side and began working on the mentor side of the platform. 
                  <br />
                  <br />
                  How I helped:
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
          <div className="pt-5">
            <Title variant="cardBig">Challenge</Title>
              <br />
              <Title variant="cardSm">Mentees</Title>
            <Text className="mb-4 mt-4">
              Based on Phase 1 usability testing, potential mentees desire increased clarity in regard to the purpose of the mentorship platform and its safety features. Research indicated a desire for guidance, personalization, and inclusivity.
            </Text>
            <Title variant="cardSm">Mentors</Title>
              <Text className="mb-4 mt-4">
              Based on preliminary findings from Phase 2, potential mentors struggle with imposter syndrome and seek support, resources, and a community of other mentors to lean on. Potential mentors also have concerns around safety and privacy.
            </Text>
            <Text className="mb-4 mt-4">
              Both mentees and mentors are interested in connecting over shared interests, hobbies, and backgrounds.
            </Text>
          </div>
        </Row>
        <Row className="pl-4">
          <div className="pt-5">
            <Title variant="cardBig">Solution</Title>
            <Text className="mb-4 mt-4">
            As the content team was new in this phase, copy and content were not yet standardized. The product voice was not determined, making it difficult to bring personality and a sense of trust to the platform. 
            <br /> Our solution was to <b>clarify safety and privacy features while offering supportive, user-appropriate language</b>.
            <br />
            <br />
            <i>Please note not all copy has been updated in the below prototypes.</i>
            </Text>
          </div>
        </Row>
        <Container>
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
      </Container>
      <Container>
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
      </Container>
      </Container>
    </>
  );
};

export default CaseStudySl;
