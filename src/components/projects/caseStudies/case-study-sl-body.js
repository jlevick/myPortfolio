import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box, Button } from "../../../components/Core";

import imgPhoto2 from "../../../assets/image/png/landingbefore.png";
import imgPhoto3 from "../../../assets/image/png/landingafter.png";
import imgPhoto4 from "../../../assets/image/png/menteebenefits.png";
import imgPhoto7 from "../../../assets/image/png/programgoalsbefore.png";
import imgPhoto8 from "../../../assets/image/png/programgoalsafter.png";
import imgPhoto9 from "../../../assets/image/png/whysignup.png";
import imgPhoto10 from "../../../assets/image/png/reasoning2.png";



const CaseStudy2Body = () => {
  return (
    <>
      <Section className="position-relative">
        <Container>
          <Section>
            <Row>
              <div>
                <Title variant="cardBig" className='mt-2 mb-4'>Clarifying purpose, cost, and location upfront</Title>
                <Text>With no clear value proposition, users don't understand the value they might receive from mentorship through the Sean's Legacy Mentorship platform. A tagline was being used in place of a value prop, offering no clear understanding of the purpose of the site.</Text>
              </div>
            </Row>
            <Row className='mt-5'>
                <Col>
                  <Title variant="card">Before</Title>
                  <img src={imgPhoto2} alt="" className="img-fluid w-100" />
                </Col>
                <Col>
                  <Title variant="card">After</Title>
                  <img src={imgPhoto3} alt="" className="img-fluid w-100" />
                </Col>
                <Text className="mb-5 mt-4">It was important to state <i>young adults</i> in the copy for further clariification on who the platform is for, and to distinguish a separation from Sean's Legacy's non-profit mission. Adding upfront that mentorship is virtual, free, and specifically for the LGBTQIA+ community helps build trust from the start.</Text>
            </Row>
            <Row className='mt-4'>
                <Title variant="cardBig">Why should I sign up for the Sean's Legacy Mentorship Program?</Title>
                  <Text className="mb-4 mt-4">A logical question located in the wrong place. Originally on the about page, the content hierarchy was changed to include this information on the first screen a user visits, the landing page.</Text>
                <Col className='mt-5'>
                  <Title variant="card">Before</Title>
                  <Text className="mb-4 mt-4 w-100"></Text>
                  <img src={imgPhoto9} alt="" className="img-fluid w-100" />
                </Col>
                <Col className='mt-5'>
                  <Title variant="card">After</Title>
                  <Text className="mb-4 mt-4 w-100"></Text>
                  <img src={imgPhoto4} alt="" className="img-fluid w-100" />
                </Col>
                <div className='mt-5'>
                  <Text className="mb-4 mt-4">Users want increased personalization, and copy was written as if we are speaking directly to each mentee, using "you" instead of "they" or "mentees".</Text>
              </div>
            </Row>
            <Row className='mt-5'>
                  <Title variant="cardBig">Balancing needs of our client and our users</Title>
                  <Text className="mb-4 mt-4 w-100">Our client was keen to showcase the goals of their mentorship program but <b>current designs were lacking transparency</b>. We wanted to ensure potential users would understand the goals of the platform so we sharpened the copy.
                  </Text>
                <Col className='mt-5'>
                  <Title variant="card">Before</Title>
                  <Text className="mb-4 mt-4 w-100">The content was unclear and difficult to read, causing concerns it would be skipped over.</Text>
                  <img src={imgPhoto7} alt="" className="img-fluid w-100" />
                </Col>
                <Col className='mt-5'>
                  <Title variant="card">After</Title>
                  <Text className="mb-4 mt-4 w-100">We improved readability by editing copy for concision. Headers were created to make scanning easier.</Text>
                  <img src={imgPhoto8} alt="" className="img-fluid w-100" />
                </Col>
            </Row>
          </Section>
          {/* <Section>
            <Container>
              <Row className='mt-5'>
                <div>
                  <Title variant="cardBig">Encouraging pushback is key</Title>
                  <Text className="mb-4 mt-4">As this project had 2 design teams totaling 14 people, we encountered pushback on various decisions. I was often able to articulate my reasoning, but many times a designer had a legitimate point or concern, so we often compromised on design decisions. I encouraged pushback because it's how we all learn and grow. This helped our team come up with standards and have them stress-tested, ultimately making designs more inclusive and accessible.</Text>
                  
                </div>
              </Row>
              <Row className='mt-5'>
                <div>
                <Title variant="cardBig">Clarification is everything</Title>
                  <Text className="mb-4 mt-4">Clarity was the overall theme of this experience for me; from not having enough of it, to doing my best to develop it in designs and in my own communications. Clarifying the platform's safety features was a top priority for good reason as safety isn't something we can simply create or design. Making it clear to our users that their privacy and safety are #1, and that they have full control over what they share increases transparency and builds trust.</Text>

                </div>
              </Row>
            </Container>
          </Section> */}
        </Container>
      </Section>
    </>
  );
};

export default CaseStudy2Body;
