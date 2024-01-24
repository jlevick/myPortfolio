import React from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";

import { Section, Title, Text } from "../../../components/Core";

import imgPhoto2 from "../../../assets/image/png/landingbefore.png";
import imgPhoto3 from "../../../assets/image/png/landingafter.png";
import imgPhoto4 from "../../../assets/image/png/menteebenefits.png";
import imgPhoto7 from "../../../assets/image/png/programgoalsbefore.png";
import imgPhoto8 from "../../../assets/image/png/programgoalsafter.png";
import imgPhoto9 from "../../../assets/image/png/whysignup.png";
import imgPhoto10 from "../../../assets/image/png/landingpagebefore.png";
import imgPhoto11 from "../../../assets/image/png/landingpageafter.png";



const CaseStudy2Body = () => {
  return (
    <>
      <Section className="position-relative">
        <Container>
          <Section>
            <Row>
              <div>
                <Title variant="cardBig" className='mt-2 mb-4'>Clarifying purpose, cost, and location upfront</Title>
                <Text className="mb-4 mt-4">Value propositions let people know 2 things:
                  <li>What value a product provides</li>
                  <li>What value that product provides <b>specifically for them</b></li>
                </Text>
                <Text className="mb-4 mt-4">With no clear value proposition, users don't understand what they get from mentorship through the Sean's Legacy Mentorship platform.</Text>
                <Text>A tagline is being used in place of a value proposition, offering <b>no clear understanding of the purpose of the program</b>.</Text>
              </div>
            </Row>
            <Row className='mt-5'>
                <Col>
                  <Title variant="card">Before</Title>
                  <img src={imgPhoto2} alt="landing page with tagline" className="img-fluid w-100" />
                </Col>
                <Col>
                  <Title variant="card">After</Title>
                  <img src={imgPhoto3} alt="landing page providing useful info" className="img-fluid w-100" />
                </Col>
                <Text className="mb-4 mt-4">Stating <i>young adults</i> rather than <i>youth</i> in the copy is important for further clarification of who the platform is for. This copy also helps distinguish a separation from Sean's Legacy's non-profit mission.</Text>
                <Text className="mb-5">Adding upfront that mentorship is virtual, free, and specifically for the LGBTQIA+ community offers clarity and <b>helps build trust from the start</b>.</Text>
            </Row>
            <Row className='mt-4'>
             <div>
             <Title variant="cardBig">Why should I sign up for the Sean's Legacy Mentorship Program?</Title>
                  <Text className="mb-4 mt-4">A logical question located in the wrong place. Originally on the about page, the content hierarchy was changed to include this information on the first screen a user visits, the landing page.</Text>
                  <Text className="mt-4 mb-4">Existing text was used as a header, shortening the copy and making it <b>easier to scan and comprehend</b>.</Text>
             </div>
                <Col className='mt-5'>
                  <Title variant="card">Before</Title>
                  <Text className="mb-5 mt-4 w-100"></Text>
                  <img src={imgPhoto9} alt="" className="img-fluid w-100" />
                </Col>
                <Col className='mt-5'>
                  <Title variant="card">After</Title>
                  <Text className="mb-5 mt-4 w-100"></Text>
                  <img src={imgPhoto4} alt="" className="img-fluid w-100" />
                </Col>
            </Row>
            <Accordion className="mb-5 mt-5 w-100">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <Title
                      variant="card"
                      mb="1.5rem"
                      fontSize="1rem"
                      className="mt-2 mb-4"
                      css={`
                        letter-spacing: 1.63px;
                      `}
                    >
                      Before and After: Landing Page
                  </Title>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                  <Row className='mt-4'>
                      <Col className='mt-2'>
                          <Title variant="card">Before</Title>
                          <Text className="mb-5 mt-4 w-100">No clear understanding of why someone would sign up for mentorship and the assumption that users already know what the program is all about</Text>
                            <img src={imgPhoto10} alt="" className="img-fluid w-100" />
                        </Col>
                      <Col className='mt-2'>
                          <Title variant="card">After</Title>
                          <Text className="mb-5 mt-4 w-100">Clearly explained benefits of the mentorship platform and upfront information on what the registration process entails</Text>
                            <img src={imgPhoto11} alt="" className="img-fluid w-100" />
                        </Col>
                  </Row>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            <Row className='mt-4'>
                  <Title variant="cardBig">Sean's Legacy wanted to share their mentorship goals but initial designs lacked transparency</Title>
                  <Text className="mb-4 mt-4 w-100">The goals of the platform were restructured to <b>show users what benefit the platform gives them</b>.</Text>
                  <Text className="mb-4 w-100"><b>Research showed users want increased personalization</b>, so copy was written to speak directly to each mentee, using "you" instead of "they" or "mentees".</Text>
                  <Text className="w-100">After, readability was improved by adding headers and simply explaining the benefits of signing up for the platform.</Text>
                <Col className='mt-5'>
                  <Title variant="card">Before</Title>
                  <img src={imgPhoto7} alt="" className="img-fluid w-100" />
                </Col>
                <Col className='mt-5'>
                  <Title variant="card">After</Title>
                  <img src={imgPhoto8} alt="" className="img-fluid w-100" />
                </Col>
            </Row>
            <Row className='mt-5'>
                  <Title variant="cardBig">Increased understanding through content design</Title>
                  <Text className="mb-4 mt-4 w-100">Through small copy changes and re-ordering of content placement, 5 out 6 mentees report increased understanding of the platform compared to 3 out of 6 before the update.</Text>
            </Row>
            <Row className='mt-5'>
                <div>
                  <Title variant="cardBig">UX writers should be embedded within design teams</Title>
                  <Text className="mb-4 mt-4">At times it was difficult to write copy or develop content because our team didn't have as clear of an understanding of constraints or design decisions as the designers did.</Text>
                  <Text className="mb-4 mt-4">Our team had a content representative present during most design working sessions, which helped create a cohesive cross-functional environment as requirements changed frequently throughout the project. We were able to collaborate and offer guidance in real time which was especially helpful as the entire team was global and otherwise often needed to work asynchronously.</Text>
                </div>
            </Row>
          </Section>
        </Container>
      </Section>
    </>
  );
};

export default CaseStudy2Body;
