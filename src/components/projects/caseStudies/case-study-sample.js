import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box, Button } from "../../../components/Core";
import imgPhoto from "../../../assets/image/png/onboardingbefore.png";
import imgPhoto1 from "../../../assets/image/png/onboardingafter.png";
import imgPhoto2 from "../../../assets/image/png/favorites1.png";
import imgPhoto3 from "../../../assets/image/png/recents1.png";
import imgPhoto4 from "../../../assets/image/png/3.png";
import imgPhoto5 from "../../../assets/image/png/quizcopy.png";
import imgPhoto6 from "../../../assets/image/png/exit.png";
import imgPhoto7 from "../../../assets/image/png/emailveribefore.png";
import imgPhoto8 from "../../../assets/image/png/emailveriafter.png";
import imgPhoto9 from "../../../assets/image/png/tooltipbefore.png";
import imgPhoto10 from "../../../assets/image/png/tooltipafter.png";

const CaseStudySample = () => {
  return (
    <>
      <Section className="position-relative">
        <Container>
          <Section>
            <Row className='my-2'>
                <Title variant="cardBig">Onboarding microcopy</Title>
                <Text className="mb-4 mt-4">I adjusted microcopy to be more concise and easier to read. Illustrations were added for character and to help convey the message on each screen. Variations of these illustrations are used throughout the designs to enhance understanding of copy and add brevity.
                <br /> Visual cues were used to indicate status and to show there is additional content.</Text>
                <Col>
                    <div>
                        <Title variant="card">Before</Title>
                        <img src={imgPhoto} alt="" className="img-fluid w-100" />
                    </div>
                </Col>
                <Col>
                    <div>
                         <Title variant="card">After</Title>
                        <img src={imgPhoto1} alt="" className="img-fluid w-100" />
                    </div>
                </Col>
            </Row>
          </Section>
          <Section>
            <Row className='my-2'>
                <Title variant="cardBig">Email verification</Title>
                <Text className="mb-4 mt-4 w-100">The client flagged this screen for editing. I clarified and condensed the copy, suggesting a left-alignment for readability. Following the style guide, I changed copy to sentence case and removed the period after the link (<i>Resend email</i>).</Text>
                <Col>
                    <div>
                        <Title variant="card">Before</Title>
                        <img src={imgPhoto7} alt="" className="img-fluid w-100" />
                    </div>
                </Col>
                <Col>
                    <div>
                         <Title variant="card">After</Title>
                        <img src={imgPhoto8} alt="" className="img-fluid w-100" />
                    </div>
                </Col>
            </Row>
          </Section>
          <Section>
            <Row className='my-2'>
                  <Title variant="cardBig">Empty state copy</Title>
                  <Text className="mb-4 mt-4">I added proactive and positive empty state copy to clarify the purpose of these features and how to utilize them, offering users a clear “next step”.</Text>
                  <Col>
                    <Title variant="card">Favorites tab</Title>
                    <div>
                      <img src={imgPhoto2} alt="" className="img-fluid w-75" />
                    </div>
                  </Col>
                  <Col>
                    <Title variant="card">Recents tab</Title>
                    <div>
                      <img src={imgPhoto3} alt="" className="img-fluid w-75" />
                    </div>
                  </Col>
            </Row>
          </Section>
          <Section>
            <Row className='my-2'>
                <Title variant="cardBig">Tooltip copy</Title>
                <Text className="mb-4 mt-4 w-100">I was provided this copy from a designer and edited for concision and clarity. I followed the product's voice and tone, offering personal autonomy and acknowledging research insights that users desire privacy.</Text>
                <Col>
                    <div>
                        <Title variant="card">Before</Title>
                        <img src={imgPhoto9} alt="" className="img-fluid w-100" />
                    </div>
                </Col>
                <Col>
                    <div>
                         <Title variant="card">After</Title>
                        <img src={imgPhoto10} alt="" className="img-fluid w-100" />
                    </div>
                </Col>
            </Row>
          </Section>
          <Section>
            <Row className='my-2'>
                <Title variant="cardBig">Contextual help</Title>
                <Text className="mb-4 mt-4">Astrology is ripe with jargon. Thusly I offered concise copy that quickly and briefly explains the meaning of each term in astrology. 
                I also included contextual help (<i>Tell me more about Aspects</i>) after usability testing showed users were confused on the meanings of <i>aspects</i> and <i>houses</i>.</Text>
                <div>
                    <img src={imgPhoto4} alt="" className="img-fluid w-75" />
                </div>
            </Row>
          </Section>
          <Section>
            <Row className='my-2'>
                <Title variant="cardBig">Personalized, concise copy</Title>
                <Text className="mb-4 mt-4">I personalized the quiz by using “I” statements which also helped keep the titles and questions more concise (versus a question such as  “What are you looking for in an astrologer?”). I used an F pattern to help users scan the page easily and in less time.</Text>
                <div>
                    <img src={imgPhoto5} alt="" className="img-fluid w-25" />
                </div>
            </Row>
          </Section>
          <Section>
            <Row className='my-2'>
                <Title variant="cardBig">Edge case: exit chat</Title>
                <Text className="mb-4 mt-4">I offered affirmative actions on the right (if there were 2 options) and offered the user the help they might need in this moment (i.e. “Contact us”). 
                  The voice and tone in the microcopy are sincere, offering choice and empathy.</Text>
                <div>
                    <img src={imgPhoto6} alt="" className="img-fluid w-75" />
                </div>
            </Row>
          </Section>
        </Container>
      </Section>
    </>
  );
};

export default CaseStudySample;