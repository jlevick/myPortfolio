import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Title, Text, Box, Button } from "../../../components/Core";
import imgPhoto from "../../../assets/image/png/affinitymap.png";
import imgPhoto1 from "../../../assets/image/png/voice.png";
import imgPhoto2 from "../../../assets/image/png/tone.png";
import imgPhoto3 from "../../../assets/image/png/titlecase.png";
import imgPhoto4 from "../../../assets/image/png/wordlist.png";
import imgPhoto5 from "../../../assets/image/png/styleguidemvp.png";
import imgPhoto6 from "../../../assets/image/png/quiz.png";
import imgPhoto7 from "../../../assets/image/png/questionnaire.png";
import imgPhoto8 from "../../../assets/image/png/support.png";
import imgPhoto9 from "../../../assets/image/png/focus.png";
import imgPhoto10 from "../../../assets/image/png/chosen.png";


const CaseStudySLVoiceBody = () => {
  return (
    <>
      <Section className="position-relative">
        <Container>
          <Section>
            <Row className="mt-4">
              <div>
                <Title variant="cardBig">Understanding user pain points</Title>
                <Text  className="mb-4 mt-4">Research showed users want a platform built around
                  <li><b>safety</b></li>
                  <li><b>privacy</b></li>
                  <li>and <b>inclusivity</b></li>
                  Users also felt the site was <b>lacking personality</b>.</Text>
                <Title variant="cardBig" className="mb-4 mt-5">If this platform was a person, who would they be?</Title>
                <Text className="mb-4 mt-4">
                   In order to understand how to write for our users, I read through a provided research report and created a list of keywords and themes.
                </Text>
                <Text className="mb-4 mt-4">
                    The report included a <b>list of adjectives provided by our client</b> describing Sean's Legacy
                    <li><b>welcoming</b></li>
                    <li><b>trustworthy</b></li>
                    <li><b>professional</b></li>
                    <li><b>engaging</b></li>
                    <li><b>uplifting</b></li>
                    <li><b>community</b></li>
                </Text>
                <Text className="mb-4 mt-4">
                    Sean's Legacy has their own <b>guiding principles</b>, which were also added
                    <li><b>inclusivity</b></li>
                    <li><b>empowerment</b></li>
                    <li><b>compassion</b></li>
                    <li><b>respect</b></li>
                </Text>
                <Text className="mb-4 mt-4">
                I viewed raw data from user interviews, again writing down common themes and terms. This helped me understand how our potential users use language and what their needs, goals, and concerns are. Findings were imported into FigJam and I began looking for patterns.
                </Text>
              </div>
              <div>
                <Box
                  className="d-flex justify-content-center align-items-center w-100">
                  <img src={imgPhoto} alt="sticky notes showing top four patterns: community, agency, growth, and safety" className="img-fluid" />
                </Box>
              </div>
              <div className="mt-5">
                  <Title variant="cardBig">How do we create safety through language?</Title>
                  <Text className="mb-4 mt-4"><b>Safety and personal autonomy stood out as 2 important areas to focus on</b>. I knew our platform's voice needed to communicate in a way that left our users feeling secure, but in an age where no one can guarantee a true safe space, how do we accomplish this? <i>How do we create safety</i>? 
                  <br />
                  <br />
                  The answer is we can't. Safety is built and requires time and effort. My team brainstormed around the idea of designing experiences that promote safety and build trust through respect, consistency, transparency, inclusivity, and clarity.
                  </Text>
                  <Text>Communicating choice and consent was imperative in creating a digital community where users feel safe to connect and grow.</Text>
                </div>
                <div className="mt-5">
                  <Title variant="cardBig">Introducing: the <i>Cool Guidance Counselor</i></Title>
                  <Text className="mb-4 mt-4">With all of this in mind, I envisioned our voice persona to be the well-balanced guidance counselor we all want(ed) to have. 
                  <br />
                  <br />
                  They're warm, reliable, and make others feel at ease. 
                  They're professional and knowledgeable, inspiring trust and confidence. 
                  They speak with authority without being authoritarian. 
                  They're clear communicators, offering guidance with a tone of empowerment. 
                  They promote diversity and a sense of belonging, and they prioritize safety above all.
                  </Text>
                    <br />
                  <Text>
                        Ultimately, <b>our persona is</b>:
                        <li>Kind, not pushy</li>
                        <li>Welcoming, not unapproachable</li>
                        <li>Ethical, not evasive</li>
                        <li>Empowering, not judgmental</li>
                    </Text>
                </div>
            </Row>
          </Section>
          <Section>
            <Container>
            <Row className='mt-4'>
                <div>
                  <Title variant="cardBig">Client feedback</Title>
                  <Text className="mb-4 mt-4">
                  <b><i>"The clear, consistent, inclusive, uplifting, and ethical voice you have established aligns perfectly with our brand values and objectives. It reflects our commitment to creating a welcoming and empowering environment for our mentees and mentors."</i></b> - Steph Lambruschini, Sean's Legacy Lead Client</Text>
                  <Row className="justify-content-center align-items-center">
                  </Row>
                </div>
              </Row>
              <Row className='mt-5'>
                <div>
                  <Title variant="cardBig">Setting the stage for future designs</Title>
                  <Text className="mb-4 mt-4">Determining product voice and tone early on has already led to more cohesive designs. The project itself is still in its infancy yet already has a clear and distinct personality.</Text>
                  {/* <Text className="mb-4 mt-4">Designers are referencing the Content Style Guide, decreasing questions related to grammar and word choice, and increasing productivity.</Text> */}
                </div>
              </Row>
              {/* <Row className='mt-5'>
                <div>
                  <Title variant="cardBig">The style guide is a living document</Title>
                  <Text className="mb-4 mt-4">There are still major decisions to be made regarding language. Toward the end of Phase 2 we began working on language for gender, orientation, race, and ethnicity. Phase 2 usability testing showed users were confused with various options, and our team recommended Phase 3 begin with a content audit of existing designs to determine any inconsistencies and standardize terminology. We also recommended testing various copy such as <i>Female</i> versus <i>Woman</i>, and <i>Trans</i> versus <i>Transgender</i>.</Text>
                </div>
              </Row>
              <Row className='mt-5'>
                <div>
                <Title variant="cardBig">Consistency takes time</Title>
                  <Text className="mb-4 mt-4">Phase 1 had already written copy for mentee designs and Phase 2 began designing for the mentor side of the platform. There were 2 design teams during Phase 2 and thusly it was important to standardize copy between them. Occasionally we didn't see a copy change from one team which led to overall confusion on all teams and a lack of cohesion within designs. Future phases will be able to unify designs with the help of our style guide.</Text>
                </div>
              </Row> */}
            </Container>
          </Section>
        </Container>
      </Section>
    </>
  );
};

export default CaseStudySLVoiceBody;
