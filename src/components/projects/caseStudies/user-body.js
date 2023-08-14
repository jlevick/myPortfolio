import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box, Button } from "../../Core";
import imgPhoto11 from "../../../assets/image/png/questions.png";
import imgPhoto13 from "../../../assets/image/png/faqbefore.png";
import imgPhoto14 from "../../../assets/image/png/faqafter.png";
import imgPhoto15 from "../../../assets/image/png/words.png";
import imgPhoto16 from "../../../assets/image/png/mentorsupport.png";

const UserBody = () => {
  return (
    <>
     <Section className="position-relative">
        <Container>
            <Row>
                <Title variant="cardBig" className='mt-5'>Speaking to mentors in their own words</Title>
                  <Text className="mb-4 mt-4 w-100">I met with the UX research team to go over their findings and share keywords I noticed from their initial insights. They confirmed I was on the right track and helped add to the list:
                    <li><b>Connection</b></li>
                    <li><b>Growth</b></li>
                    <li><b>Giving back / Impact</b></li>
                    <li><b>Resources / Support</b></li>
                    <li><b>Shared experiences</b></li>
                    <li><b>Imposter syndrome / Addressing challenges</b></li>
                    <img src={imgPhoto15} alt="" className="img-fluid w-100 mt-4" />
                  </Text>
            </Row>
            <Row>
                  <Title variant="cardBig" className='mt-5'>Reworking content hierarchy and addressing mentor concerns</Title>
                  <Text className="mb-4 mt-4 w-100">
                    Our list helped to reimagine the landing page hierarchy, where our team iterated upon an initial FAQ section.
                    We utilized <i>giving back</i> and <i>community</i> in the copy in an effort to speak to mentors directly and <b>crafted questions based on themes from user interviews</b>.
                  </Text>
                <Col>
                  <Title variant="card" className='mt-5'>Before</Title>
                  <Text className="mb-4 mt-4 w-100">With input from Design and Research, we removed questions regarding how mentors are supported and instead dedicated an entire section to the topic.</Text>
                  <img src={imgPhoto13} alt="" className="img-fluid w-100" />
                </Col>
                <Col>
                  <Title variant="card" className='mt-5'>After</Title>
                  <Text className="mb-4 mt-4 w-100">Research indicated themes of <b>imposter syndrome</b> and I wrote compassionate body copy around supporting mentees.</Text>
                  <img src={imgPhoto14} alt="" className="img-fluid w-100" />
                </Col>
                <Text className="mb-4 mt-4 w-100">The Research team suggested a question around ending mentorship. While our team supported adding this, we wondered if it might be better suited within the platform's internal <i>resource</i> section, and not on the landing page. 
                      However, research indicated potential mentors named this as an area of high concern and therefore we chose to move forward with including it here.</Text>
            </Row>
            <Row>
                  <Title variant="cardBig" className='mt-5'>Addressing mentor desires for community, resources, and privacy</Title>
                  <Text className="mt-4 w-100">With the question around mentorship support removed from the FAQ, we focused our efforts on crafting copy for an entire mentor support section. Sean's Legacy's <b><i>Master's of Public Health</i> interns are creating a comprehensive onboarding kit</b>, and <b>our client wanted this reflected within the copy</b>.</Text>
                  <Text className="mt-4 w-100">Potential mentors indicated a desire for community support and resources in general, and we included these needs using <b>uplifting</b>, <b>compassionate language</b>.</Text>
                    <img src={imgPhoto16} alt="" className="img-fluid w-75 mt-4" />
            </Row>
            <Row className='mt-5'>
                  <Title variant="cardBig" className='mt-5'>Offering guidance and personal autonomy</Title>
                  <Text className="mb-4 mt-4 w-100">Researchers suggested <b>pre-filled examples </b>for write-in text fields as well as more <b>specific writing prompts</b>. As this is an area where users may drop off due to uncertainty, confusion, or even annoyance, it was important to offer guidance.
                    <br />
                    <br />
                    Initial findings indicated some mentors specifically used the word <i>story</i> when referring to learning more about their mentee. ADPList, another mentorship platform, also uses this language (<i>"Tell us your origin story", and "Everyone has a story, what's yours?"</i>).</Text>
                    <Text className="mb-4 mt-4 w-100">We <b>hypothesized utilizing the word <i>story</i></b> would be <b>easily understandable, familiar, and speak directly to our users in their own words</b>.</Text>
                    <img src={imgPhoto11} alt="" className="img-fluid w-75" />   
            </Row>
            <Row>
            <Title variant="cardBig"  className='mt-4'>Most fit, but one was not quite right</Title>
                  <Text className="mb-2 mt-4">Mentors liked the FAQ's and support resources, but the hypothesis of using the word <i>story</i> turned out to be incorrect. Research found <b>3 out of 6</b> mentors <b>found this phrasing confusing</b>.</Text>
                  <Text className="mb-2 mt-2">I recommended rewriting the question and changing the supporting copy from <i>"Share your story so mentors/mentees can get to know you better"</i> to <i>"Share as much or as little as you'd like."</i> Changing the question into a statement may offer a more active, conversational feel and is worth testing to increase the chance of users filling out their profile entirely. Copy ideas: <i>"Tell us about yourself"</i>, or <i>"I want my mentor/mentee to know..."</i></Text>
                  <Text className="mb-2 mt-2">Crafting user-centered copy takes time and testing to get right. Learning that <i>story</i> didn't resonate with mentors is not a failure but a learning opportunity and a chance to get closer next time.</Text>
            </Row>
            {/* <Row className='mt-5'>
                <div>
                  <Title variant="cardBig">Reflections</Title>
                  <Title variant="card">Consistency requires cross-functional collaboration</Title>
                  <Text className="mb-4 mt-4">In order to maintain consistency throughout designs, it's important to work with all team members. Occasionally an update to copy would be missed by one of our Design teams during Development handoff. This resulted in outdated copy being included on both final Phase 2 prototypes and in the actual build.</Text>
                </div>
            </Row>
            <Row className='mt-5'>
                <div>
                  <Title variant="card">UX writers should be embedded within design teams</Title>
                  <Text className="mb-4 mt-4"> At times it was difficult to write copy or develop content because our team didn't have as clear of an understanding of specific flows, constraints, and design decisions as the designers did. Our team had a Content representative present during most Design Working Sessions, which helped greately as requirements changed throughout the project. We were able to collaborate and offer guidance in real time, which was especially helpful as the Phase 2 team as a whole was global and often needed to work asynchronously.</Text>
                  
                </div>
            </Row> */}
        </Container>
      </Section>
    </>
  );
};

export default UserBody;