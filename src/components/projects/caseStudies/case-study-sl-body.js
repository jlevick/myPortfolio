import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text } from "../../../components/Core";

import imgPhoto2 from "../../../assets/image/png/landingbefore.png";
import imgPhoto3 from "../../../assets/image/png/landingafter.png";
import imgPhoto4 from "../../../assets/image/png/menteebenefits.png";
import imgPhoto7 from "../../../assets/image/png/programgoalsbefore.png";
import imgPhoto8 from "../../../assets/image/png/programgoalsafter.png";
import imgPhoto9 from "../../../assets/image/png/whysignup.png";




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
                <Text>A tagline is being used in place of a value proposition, offering <b>no clear understanding of the purpose of the site</b>.</Text>
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
                <Text className="mb-4 mt-4">Stating <i>young adults</i> rather than <i>youth</i> in the copy is important for further clarification of who the platform is for. This copy also helps distinguish a separation from Sean's Legacy's non-profit mission.</Text>
                <Text className="mb-5">Adding upfront that mentorship is virtual, free, and specifically for the LGBTQIA+ community offers clarity and <b>helps build trust from the start</b>.</Text>
            </Row>
            <Row className='mt-4'>
             <div>
             <Title variant="cardBig">Why should I sign up for the Sean's Legacy Mentorship Program?</Title>
                  <Text className="mb-4 mt-4">A logical question located in the wrong place. Originally on the about page, the content hierarchy was changed to include this information on the first screen a user visits, the landing page.</Text>
                  <Text className="mb-4">Existing text was used as a header, shortening the copy and making it <b>easier to scan and comprehend</b>.</Text>
             </div>
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
                  <Text className="mb-4 mt-4"><b>Users want increased personalization</b>, so copy was written to speak directly to each mentee, using "you" instead of "they" or "mentees".</Text>
              </div>
            </Row>
            <Row className='mt-4'>
                  <Title variant="cardBig">Balancing needs of my client and their users</Title>
                  <Text className="mb-4 mt-4 w-100">Sean's Legacy wants to share their mentorship goals but initial designs lacked transparency. The goals of the platform were restructured to <b>show users what benefit the platform gives them</b>.</Text>
                  <Text className="mb-4 w-100">Before, the copy was impersonal, referring to users as “they” and “mentees”.</Text>
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
          </Section>
        </Container>
      </Section>
    </>
  );
};

export default CaseStudy2Body;
