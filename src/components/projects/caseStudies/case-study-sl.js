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
                  Audit existing content and create new content to align with Sean Legacy’s standards and values. 
                  </Text>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="justify-content-center">
              <div>
                <Title color="light" variant="secSm">
                  About Sean's Legacy
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  Sean's Legacy is an organization dedicated to supporting LGBTQIA+ youth, with a primary focus on suicide prevention. Sean's Legacy is currently developing a platform focused on career mentorship for LGBTQIA+ young adults.  
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
                  Our team developed the initial Voice and Tone, Content Style Guide, wrote copy for both sides of the platform, worked with Design on content strategy, and audited existing designs from Phase 1. 
                </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Container>
        <Row className="pl-4 mt-5">
          <div className="pt-5">
            <Title variant="cardBig">Problem</Title>
            <Text className="mb-4 mt-4">
              Based on Phase 1 research findings, potential users desired increased clarity in regard to the purpose of the mentorship platform and its safety features. Research indicated desire for guidance, personalization, and inclusivity. Potential users also felt the site had no personality.
            </Text>
            <Text className="mb-4 mt-4">
            As the content team was new in this phase, copy was rather vague and content was not yet standardized. The product voice was not determined, making it difficult to bring personality or a sense of trust to the platform. 
            </Text>
          </div>
        </Row>
      </Container>
      <Container>
        <Row className="pl-4 mt-5 mb-5 justify-content-center">
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://www.notion.so/tech-fleet-community-dao/SL-Mentorship-Platform-Content-Style-Guide-0875ea7d9dcc49eba9bcd5cff00de986"}
            >
              <Button variant={"#7155ff"}>Content Style Guide</Button>
            </a>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default CaseStudySl;
