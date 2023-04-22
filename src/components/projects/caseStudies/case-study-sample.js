import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box, Button } from "../../../components/Core";
import imgPhoto from "../../../assets/image/png/onboardingbefore.png";
import imgPhoto1 from "../../../assets/image/png/onboardingafter.png";
import imgPhoto2 from "../../../assets/image/png/favorites1.png";
import imgPhoto3 from "../../../assets/image/png/recents1.png";
import imgPhoto4 from "../../../assets/image/png/wordlist.png";
import imgPhoto5 from "../../../assets/image/png/styleguidemvp.png";
import imgPhoto6 from "../../../assets/image/png/quiz.png";
import imgPhoto7 from "../../../assets/image/png/questionnaire.png";
import imgPhoto8 from "../../../assets/image/png/support.png";
import imgPhoto9 from "../../../assets/image/png/focus.png";
import imgPhoto10 from "../../../assets/image/png/chosen.png";

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
                  <Title variant="cardBig">Empty state copy</Title>
                  <Text className="mb-4 mt-4">I added proactive and positive empty state copy to clarify the purpose of these features and how to utilize them, offering users a clear “next step”.</Text>
                <Col>
                  <Title variant="card">Favorites tab</Title>
                  <div>
                      <img src={imgPhoto2} alt="" className="img-fluid w-50" />
                  </div>
                </Col>
                <Col>
                  <Title variant="card">Recents tab</Title>
                  <div>
                      <img src={imgPhoto3} alt="" className="img-fluid w-50" />
                  </div>
                </Col>
            </Row>
          </Section>
          
        </Container>
      </Section>
    </>
  );
};

export default CaseStudySample;