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
          <Section hero={true} bg={"dark"} className="px-5">
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
          </Section>
          <Section>
            <Row className="mt-5">
              <div>
                <Title variant="cardBig">Understanding user pain points</Title>
                <Text  className="mb-4 mt-4">Based on Phase 1 research, potential users expressed the importance of <b>safety</b>, <b>privacy</b>, and <b>inclusivity</b>. 
                    <br /> Potential users also felt the site was <b>lacking personality</b>.</Text>
                <Text  className="mb-4 mt-4">
                    The product voice was not determined, making it difficult to bring personality or a sense of trust to the platform. 
                    <br /> Content and writing guidelines were not yet established, creating a lack of cohesion throughout the designs.
                </Text>
                <Title variant="cardBig">If this platform was a person, who would they be?</Title>
                <Text className="mb-4 mt-4">
                    In order to understand how to write for our users, I read through the Phase 1 research report, creating a list of keywords and themes.
                </Text>
                <Text className="mb-4 mt-4">
                    The report included a <b>list of adjectives provided by our client</b> describing Sean's Legacy:
                    <Text variant="li">Welcoming</Text>
                    <Text variant="li">Trustworthy</Text>
                    <Text variant="li">Professional</Text>
                    <Text variant="li">Engaging</Text>
                    <Text variant="li">Uplifting</Text>
                    <Text variant="li">Community</Text>
                </Text>
                <Text className="mb-4 mt-4">
                    <b>Sean's Legacy </b> has its own <b>guiding principles</b>, and I added these as well:
                    <Text variant="li">Inclusivity</Text>
                    <Text variant="li">Empowerment</Text>
                    <Text variant="li">Compassion</Text>
                    <Text variant="li">Respect</Text>
                </Text>
                <Text className="mb-4 mt-4">
                   Additionally I viewed raw data from Phase 1 user interviews, again writing down common themes and terms. This helped me understand how our potential users use language and what their needs, goals, and concerns are.
                   <br /> I imported the findings into FigJam and began looking for patterns. 
                </Text>
              </div>
              <div>
                <Box
                  className="d-flex justify-content-center align-items-center w-100">
                  <img src={imgPhoto} alt="" className="img-fluid" />
                </Box>
              </div>
              <div className="mt-5">
                  <Title variant="cardBig">How do we create safety through language?</Title>
                  <Text className="mb-4 mt-4">Safety and personal autonomy stood out as 2 important areas to focus on. I knew our platform's voice needed to communicate in a way that left our users feeling secure, but in an age where no one can guarantee a true safe space, how do we accomplish this? <i>How do we create safety</i>? 
                  <br />
                  <br />
                  The answer is we can't. Safety is built and takes effort. My team brainstormed around the idea of designing experiences that promote safety and build trust through respect, consistency, transparency, inclusivity, and clarity.
                  </Text>
                  <Text>Communicating choice and consent was imperative in creating a digital community where users feel safe to connect and grow.</Text>
                </div>
                <div className="mt-5">
                  <Title variant="cardBig">Introducing: the <i>Cool Guidance Counselor</i></Title>
                  <Text className="mb-4 mt-4">With all of this in mind, I envisioned our voice persona to be the well-balanced guidance counselor we all want(ed) to have. 
                  <br />
                  They're warm, friendly, reliable, and make others feel at ease. They're professional and knowledgeable, inspiring trust and confidence. They speak with authority without being authoritarian. They're clear communicators, offering guidance with a tone of empowerment. They promote diversity and a sense of belonging with their inclusive and respectful behavior, and they prioritize safety above all.</Text>
                    <br />
                  <Text>
                        Ultimately, our persona is:
                        <Text variant="li">Kind, not pushy</Text>
                        <Text variant="li">Welcoming, not unapproachable</Text>
                        <Text variant="li">Ethical and open, not cagey</Text>
                        <Text variant="li">Empowering, not judgmental</Text>
                    </Text>
                    <Text className="mb-4 mt-4">The team brought these ideas to our client, where they were well received by their co-founder and internal content team.</Text>
                    <Title variant="card">Demo deck slide shared with our client</Title>
                        <img src={imgPhoto5} alt="" className="img-fluid w-75" />
                </div>
            </Row>
            <Row className='my-5'>
                <Col>
                    <div>
                        <Title variant="card">Voice</Title>
                        <img src={imgPhoto1} alt="" className="img-fluid w-100" />
                    </div>
                </Col>
                <Col>
                    <div>
                         <Title variant="card">Tone</Title>
                        <img src={imgPhoto2} alt="" className="img-fluid w-100" />
                    </div>
                </Col>
                    <div>
                        <Text className="mb-4 mt-4">With a clear vision of our voice and tone, we began developing our style guide from scratch.</Text>
                        <Text className="mb-4 mt-4">We decided that due to the age range of our mentee audience (18-25) and their desire for inclusivity, we would use <b>casual</b>, <b>informal language</b>.</Text>
                        <Text className="mb-4 mt-4">The platform's voice needed to sound human, read at a 6th grade level, and communicate in a way that related both to mentees and mentors. 
                        <br /> Because of this, we chose to use <b>sentence case</b> over title case and <b>allow for contractions</b>. Our team also decided to use the Hemingway App in order to check the reading level of all copy.</Text>
                         <Title variant="card">Sentence case vs. Title Case</Title>
                        <img src={imgPhoto3} alt="" className="img-fluid w-75" />
                    </div>
            </Row>
          </Section>
          <Section hero={true} bg={"dark"} className="px-5">
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
            <Row className='mt-2'>
              <div>
                    <Text className="mb-4 mt-4">The list I created grew into a keyword list that helped standardize copy on the platform; everything from Call to Action buttons, to titles, to tooltips.
                    <br /> 
                    <br />
                    During an early audit of the platform, I noticed inconsistencies in the usage of terms such as <i>Continue </i> and <i>Next</i>, and <i>Create account</i> and <i>Sign up</i>. 
                    <br /> We went with <b><i>Continue</i></b> over <i>Next</i> as it feels gentler and conveys we haven't abandoned the user, we're still here with them - whereas <i>Next</i> feels as if we're in line, not a person but a number. 
                    <br /> 
                    <br /> We chose <b><i>Sign up</i> </b>over <i>Create account</i> to both simplify the copy and play to user's mental models of what they might expect. 
                    <br /> These seemingly small changes helped to create more cohesive designs as these subtle differences play in to properly conveying our tone.</Text>
                    <Title variant="card">A portion of the word list</Title>
                    <img src={imgPhoto4} alt="" className="img-fluid w-50 mb-5" />
              </div>
            </Row>
            <Row className='mt-4'>
                <div>
                  <Title variant="cardBig">A trauma-informed approach to communication</Title>
                  <Text className="mb-4 mt-4">As our designers began building out new features we discovered additional langauge in need of clarification, as members of the LGBTQIA+ community experience a high rate of ongoing trauma.</Text>
                  <Text className="mb-4 mt-4">Using language that mitigates triggers is essential, and 3 distinct phrases stood out:
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
                    <br />In an effort to be inclusive, avoid deadnaming, and offer personal autonomy, we decided to use <b>Chosen name</b>.</Text>
                    <Title variant="card">Chosen name</Title>
                        <img src={imgPhoto10} alt="" className="img-fluid w-50  mb-4" />
                    <Text className="mb-4 mt-4">To our delight, <i>Chosen name</i> was mentioned as copy that potential mentors liked during Phase 2 usability testing.</Text>
                </div>
              </Row>
            </Row> 
          </Section>
          <Section hero={true} bg={"dark"}>
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
               Impact - Challenges - What I Learned
              </Title>
            </Container>
          </Section>
          <Section>
            <Container>
              <Row className='mt-5'>
                <div>
                  <Title variant="cardBig">Setting the stage for future designs</Title>
                  <Text className="mb-4 mt-4">Determining product voice and tone early on has already led to more cohesive designs. The project itself is still in its infancy yet already has a clear and distinct personality.</Text>
                  <Text className="mb-4 mt-4">Designers are referencing the Content Style Guide, decreasing questions related to grammar and word choice, and increasing productivity.</Text>
                </div>
              </Row>
              <Row className='mt-5'>
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
              </Row>
              <Row className='mt-5'>
                <div>
                <Title variant="cardBig">Final thoughts</Title>
                  <Text className="mb-4 mt-4">Taking the lead on the platform's Voice and Tone was a gift, and I'd like to thank my teammates Dana and Bo for allowing me the opportunity. Our team played a key role in the future of the Sean's Legacy Mentorship platform by initiating a way of standardizing all copy and content, and determining a unique voice that speaks directly to our audience.</Text>
                </div>
              </Row>
            </Container>
          </Section>
        </Container>
      </Section>
    </>
  );
};

export default CaseStudySLVoiceBody;
