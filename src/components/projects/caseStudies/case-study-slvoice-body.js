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
          {/* <Section hero={true} bg={"dark"} className="px-5">
            <Container className="pb-3">
              <Title color="light" variant="secSm">
                Defining Product Voice
              </Title>
              <Title
                color="light"
                variant="card"
                mb="2.5rem"
                fontSize="1rem"
                className="text-uppercase"
                css={`
                  letter-spacing: 1.63px;
                `}
              >
                Content Audit - Discovery - Voice and Tone 
              </Title>
            </Container>
          </Section> */}
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
          {/* <Section hero={true} bg={"dark"} className="px-5">
            <Container className="pb-3">
              <Title color="light" variant="secSm">
                Standardizing Copy
              </Title>
              <Title
                color="light"
                variant="card"
                mb="2.5rem"
                fontSize="1rem"
                className="text-uppercase"
                css={`
                  letter-spacing: 1.63px;
                `}
              >
                Content Style Guide - Trauma Informed Language 
              </Title>
            </Container>
          </Section>
          <Section>
            <Row className='mt-4'>
                <div>
                  <Title variant="cardBig">A trauma-informed approach to communication</Title>
                  <Text className="mb-4 mt-4">As our designers began building out new features we discovered <b>additional langauge in need of clarification</b>, as members of the LGBTQIA+ community experience a high rate of ongoing traumas.</Text>
                  <Text className="mb-4 mt-4"><b>Using language that mitigates triggers is essential</b>, and 3 distinct phrases stood out:
                  <Text variant="li">Quiz</Text>
                  <Text variant="li">Support needed</Text>
                  <Text variant="li">Preferred name or Name</Text></Text>
                </div>
                <Row className='mt-5'>
                <div>
                    <Title variant="cardBig"> <i>Quiz</i> connotes a score</Title>
                    <Text className="mb-4 mt-4">Research shows <b>standardized testing has a negative impact on mental health</b>. As the Sean's Legacy Mentorship platform is based around connecting mentees to mentors, a <i>Mentorship Match Quiz</i> feature was established. There was discussion on how <i>Quiz</i> might leave mentees with <b>unintended stress or anxiety</b>, and how it wasn't the appropriate term anyway as there is no scoring at the end.
                    <br />
                    <br /> I initially offered <i>Survey</i> as a benign word choice that was short and easy to type, but ultimately the Design and our Content teams decided to move forward with <b><i>Questionnaire</i></b>.</Text>
                </div>
                <Col>
                    <div>
                        <Title variant="card">Before: quiz</Title>
                        <img src={imgPhoto6} alt="" className="img-fluid w-100 mb-4" />
                    </div>
                </Col>
                <Col>
                    <div>
                         <Title variant="card">After: questionnaire</Title>
                        <img src={imgPhoto7} alt="" className="img-fluid w-100 mb-4" />
                    </div>
                </Col>
              </Row>
              <Row className='mt-5'>
                <div>
                    <br />
                    <Title variant="cardBig"> <i>Support needed</i> offers the wrong impression</Title>
                    <Text className="mb-4 mt-4">While our voice persona is the <i>cool guidance counselor</i>, the platform itself is not meant for counseling or therapy, but for professional career mentorship. 
                    <br /><b>Focus area</b> was more true to the purpose of the platform and made more sense given the options (a focus on early career rather than support in early career).</Text>
                </div>
                <Col>
                    <div>
                        <Title variant="card">Before: support</Title>
                        <img src={imgPhoto8} alt="" className="img-fluid w-100" />
                    </div>
                </Col>
                <Col>
                    <div>
                         <Title variant="card">After: focus</Title>
                        <img src={imgPhoto9} alt="" className="img-fluid w-100  mb-4" />
                    </div>
                </Col>
              </Row>
              <Row className='mt-5'>
              <div>
                    <br />
                    <Title variant="cardBig"> <i>Preferred name</i> implies a name is not <i>real</i></Title>
                    <Text className="mb-4 mt-4">Because the platform is built for the LGBTQIA+ community, <b>names</b>, <b>pronouns</b>, and <b>individual agency are significant</b>. Trans and non-binary folks may have a different name than was given to them at birth. Asking for someone's legal name may bring about unintended pain, and asking for someone's preferred name may come across as disrespectful.
                    <br />In an effort to be inclusive, avoid deadnaming, and offer personal autonomy, I suggested using <b>Chosen name</b>.</Text>
                    <Title variant="card">Chosen name</Title>
                        <img src={imgPhoto10} alt="" className="img-fluid w-50  mb-4" />
                    <Text className="mb-4 mt-4">To our delight, <i>Chosen name</i> was mentioned as copy that potential mentors liked during Phase 2 usability testing.</Text>
                </div>
              </Row>
            </Row> 
          </Section> */}
          {/* <Section hero={true} bg={"dark"}>
            <Container className="pb-3">
              <Title color="light" variant="secSm">
                Outcomes
              </Title>
              <Title
                color="light"
                variant="card"
                mb="2.5rem"
                fontSize="1rem"
                className="text-uppercase"
                css={`
                  letter-spacing: 1.63px;
                `}
              >
               Client Feedback - Impact
              </Title>
            </Container>
          </Section> */}
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
