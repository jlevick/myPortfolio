import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text } from "../../Core";
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
                <Title variant="cardBig" className='mt-4'>Speaking to mentors in their own words</Title>
                  <Text className="mb-4 mt-4 w-100">In collaboration with the research team, I compiled a list of themes and words from their findings:
                  <br />
                    <li><b>Connection</b></li>
                    <li><b>Growth</b></li>
                    <li><b>Giving back</b> and <b>impact</b></li>
                    <li><b>Resources</b> and <b>support</b></li>
                    <li><b>Shared experiences</b></li>
                    <li><b>Imposter syndrome</b> and <b>addressing challenges</b></li>
                    <img src={imgPhoto15} alt="" className="img-fluid w-100 mt-4" />
                  </Text>
            </Row>
            <Row>
                  <Title variant="cardBig" className='mt-5'>Reworking content hierarchy and addressing mentor concerns</Title>
                  <Text className="mb-4 mt-4 w-100">
                    The list helped reimagine the landing page hierarchy, where an initial FAQ section was iterated upon. <i>Giving back</i> and <i>community</i> were utilized in the copy to speak to mentors directly and <b>questions were crafted based on themes from user interviews</b>.
                  </Text>
                <Col className='mt-4'>
                  <Title variant="card" className='mt-5'>Before</Title>
                  <img src={imgPhoto13} alt="" className="img-fluid w-100" />
                </Col>
                <Col className='mt-4'>
                  <Title variant="card" className='mt-5'>After</Title>
                  <img src={imgPhoto14} alt="" className="img-fluid w-100" />
                </Col>
            </Row>
            <Row>
                  <Text className="mb-4 mt-4 w-100">With cross-team input, we removed questions on how mentors are supported and an entire section was dedicated to the topic of support. The original question was changed to address themes of <b>imposter syndrome</b>.</Text>
                  <Text className="mb-4 mt-4 w-100"><b>I was responsible for writing body copy around supporting mentees, and I followed our established voice guidelines, using an empathetic tone.</b></Text>
                  <Text className="mb-4 mt-4 w-100">The Research team suggested a question on ending mentorship. While our team supported this, we discussed if it might be better placed within the platform's internal <i>resource</i> section, not on the landing page. 
                      However, research indicated mentors named this an area of high concern and therefore we chose to move forward with including it here.</Text>
            </Row>
            <Row className="mb-4 mt-4 w-100">
              <div>
                <Title variant="cardBig" className='mt-4'>Addressing mentor desires for community, resources, and privacy</Title>
              </div>
            </Row>
            <Row>
              <Col className='mt-4'>
                  <img src={imgPhoto16} alt="" className="img-fluid w-100" />
              </Col>
              <Col className='mt-4'>
                  <Text className="mt-2 w-100">With the question around mentorship support removed from the FAQ, efforts focused on crafting copy for an entire mentor support section. Sean's Legacy has a <b>comprehensive onboarding kit</b>, and wanted this reflected in the copy.</Text>
                  <Text className="mt-4 mb-4 w-100">Potential mentors indicated a desire for community support and resources in general, and we included these needs using <b>uplifting</b>, <b>compassionate language</b>.</Text>
              </Col>
            </Row>
            <Row>
              <div>
                <Title variant="cardBig" className='mt-5'>Offering guidance and personal autonomy</Title>
              </div>
            </Row>
            <Row>
                <Col className='mt-4'>
                  <Text className="mb-4 mt-4 w-100"><b>Pre-filled examples</b> for write-in text fields, as well as more <b>specific writing prompts</b> were considered for added clarity. This is an area where users may drop off due to uncertainty, confusion, or even annoyance so it's important to offer guidance. <br /> <br />Initial findings indicated mentors used the word <i>story</i> when referring to learning more about their mentee. ADPList, another mentorship platform, also uses this language (<i>"Tell us your origin story", and "Everyone has a story, what's yours?"</i>).</Text>
                  <Text className="mb-4 mt-4 w-100"><b>I hypothesized utilizing the word <i>story</i></b> would be easily understandable, familiar, and speak directly to our users in their own words.</Text>
                </Col>
                <Col className='mt-5'>
                  <img src={imgPhoto11} alt="" className="img-fluid w-100" />
                </Col>
            </Row>
            <Row>
            <Title variant="cardBig" className='mt-4'>Most fit, but one was not quite right</Title>
                  <Text className="mb-2 mt-4">Mentors liked the FAQ's and support resources, but the hypothesis of using the word <i>story</i> turned out to be incorrect. Research found <b>3 out of 6</b> mentors <b>found this phrasing confusing</b>. Different copy was offered for the next round of usability testing.</Text>
                  <Text className="mb-2 mt-2">Crafting excellent user-centered copy takes time and testing to get right. Learning that <i>story</i> didn't resonate with mentors is not a failure but a learning opportunity and an opportunity to get closer next time.</Text>
            </Row>
            <Row className='mt-5'>
                <div>
                  <Title variant="cardBig">Consistency requires cross-functional collaboration</Title>
                  <Text className="mb-4 mt-4">In order to maintain consistency throughout designs, it's important to work with all cross-functional team members. Occasionally an update to copy would be missed by one of our two design teams during development handoff. This resulted in outdated copy being included on working prototypes and in the actual build.</Text>
                </div>
            </Row>
        </Container>
      </Section>
    </>
  );
};

export default UserBody;