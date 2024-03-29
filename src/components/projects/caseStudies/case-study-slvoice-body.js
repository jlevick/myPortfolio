import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Title, Text, Box } from "../../../components/Core";
import imgPhoto from "../../../assets/image/png/affinity.png";
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
                <Text  className="mb-4 mt-4">Users say the site is <b>lacking personality</b>. Research shows users want a platform built around:
                  <li><b>safety</b></li>
                  <li><b>privacy</b></li>
                  <li><b>inclusivity</b></li></Text>
              </div>
            </Row>
            <Row>
                <div>
                  <Text className="mb-4 mt-4">
                    The report included a <b>list of adjectives provided by our client</b> describing Sean's Legacy:
                    <li><b>welcoming</b></li>
                    <li><b>community</b></li>
                    <li><b>trustworthy</b></li>
                    <li><b>professional</b></li>
                  </Text>
                </div>
            </Row>
            <Row>
              <div>
                  <Text className="mb-4 mt-4">
                    Sean's Legacy has their own <b>guiding principles</b>, which were also added:
                    <li><b>respect</b></li>
                    <li><b>inclusivity</b></li>
                    <li><b>compassion</b></li>
                    <li><b>empowerment</b></li>
                  </Text>
                </div>
            </Row>
            <Row>
                <Title variant="cardBig" className="mb-4 mt-5">If this platform was a person, who would they be?</Title>
                <Text className="mb-4 mt-2">
                   To understand how to write for our users, I read through the research report and created a list of keywords and themes.
                </Text>
                <Text>
                I also <b>viewed data from user interviews, writing down common words</b>. This helped me understand how our users use language and what their needs, goals, and concerns are. Findings were imported into FigJam and I began looking for patterns.
                </Text>
              <div>
                <Box
                  className="d-flex justify-content-center align-items-center w-100">
                  <img src={imgPhoto} alt="sticky notes with top four themes: community, personal autonomy, growth, and safety" className="img-fluid" />
                </Box>
              </div>
            </Row>
            <Row>
                  <Title variant="cardBig">How do we create safety through language?</Title>
                  <Text className="mb-4 mt-4"><b>Safety and personal autonomy stood out as 2 important areas to focus on</b>. Our platform's voice needs to communicate in a way that leaves users feeling secure and in control, but in an age where no one can guarantee a true safe space, how do we accomplish this? <i>How do we create safety</i>? 
                  <br />
                  <br />
                  The answer is <b>we can't</b>. Safety is built and requires time and effort. What we <i>can</i> do is design experiences that promote safety and build trust through respect, consistency, transparency, inclusivity, and clarity.
                  </Text>
                  <Text>Communicating choice and consent is imperative in creating a digital community where users feel safe to connect and grow.</Text>
                <div className="mt-5">
                  <Title variant="cardBig">Introducing: the <i>Cool Guidance Counselor</i></Title>
                  <Text className="mb-4 mt-4">With all of this in mind, I envisioned our voice persona to be the guidance counselor we all want(ed) to have. They don't use gendered language and they speak with authority without being authoritarian.</Text>
                  <Text>
                        Ultimately, <b>our persona is</b>:
                        <li>Kind, not pushy</li>
                        <li>Ethical, not withholding</li>
                        <li>Empowering, not judgmental</li>
                        <li>Welcoming, not unapproachable</li>
                    </Text>
                </div>
            </Row>
            <Row>
                <Title variant="cardBig" className='mt-5'>A trauma-informed approach to communication</Title>
                  <Text className="mb-2 mt-2 w-100">With our persona in mind, existing language was audited, and one phrase in particular stood out as non-inclusive and potentially triggering: <b>preferred name</b>.</Text>
                  <Text className="mb-4 mt-4 w-100">As a UX writer and compassionate human, I understand words have power. The LGBTQIA+ community experiences a high rate of ongoing traumas and using language that mitigates triggers is essential.</Text>
            </Row>
            <Row>
              <div>
                <Title variant="cardBig" className='mt-4'> <i>Preferred name</i> implies a name is not <i>real</i></Title>
              </div>
            </Row>
            <Row>
                <Col className='mt-5'>
                  <img src={imgPhoto10} alt="" className="img-fluid w-100" />
                </Col>
                <Col className='mt-5'>
                  <Text>The platform is for the LGBTQIA+ community, and <b>names</b>, <b>pronouns</b>, and <b>individual agency are significant</b>. <br /> <br />Trans and non-binary folks may have a different name than was given at birth. Asking for someone's preferred name may bring about unintended pain or come across as disrespectful.
                    <br /> <br />In an effort to be inclusive, avoid deadnaming, and offer personal autonomy, I suggested using <b>chosen name</b>.</Text>
                </Col>
            </Row>
            {/* <Row>
                <div>
                    <Title variant="cardBig" className='mt-4'> <i>Preferred name</i> implies a name is not <i>real</i></Title>
                    <Text className="mb-4 mt-4">Because the platform is built for the LGBTQIA+ community, <b>names</b>, <b>pronouns</b>, and <b>individual agency are significant</b>. Trans and non-binary folks may have a different name than was given at birth. Asking for someone's preferred name may bring about unintended pain or come across as disrespectful.
                    <br />In an effort to be inclusive, avoid deadnaming, and offer personal autonomy, I suggested using <b>Chosen name</b>.</Text>
                        <img src={imgPhoto10} alt="" className="img-fluid w-50  mb-4" />
                </div>
              </Row> */}
              <Row className='mt-5'>
                <div>
                    <Title variant="cardBig"><i>Chosen name</i> was mentioned during usability testing as an inclusive phrase users appreciated</Title>
                    <Text className="mb-4 mt-4"></Text>
                    <Text className="mb-4 mt-4">Our client had this to say:<i><b> <br />"The focus on maintaining a respectful tone by avoiding assumptions and gendered language is crucial in creating an inclusive and welcoming environment for our mentees. The clear, consistent, inclusive, uplifting, and ethical voice you have established aligns perfectly with our brand values and objectives."</b></i> - Steph Lambruschini, Lead Sean's Legacy Client</Text>
                </div>
              </Row>
              <Row className='mt-4'>
                <div>
                  <Title variant="cardBig">Setting the stage for future designs</Title>
                  <Text className="mb-4 mt-4">Determining product voice and tone early on has already led to more cohesive designs. The project itself is still in its infancy yet already has a clear and distinct personality.</Text>
                </div>
              </Row>
              <Row className='mt-5'>
                <div>
                  <Title variant="cardBig">The style guide is a living document</Title>
                  <Text className="mb-4 mt-4">There are still major decisions to be made regarding language. Toward the end of the project we began working on language for gender, orientation, race, and ethnicity. Usability testing showed users were confused with various options, and our team recommended a content audit of existing designs to determine any inconsistencies and standardize terminology. We also recommended testing various copy such as <i>Female</i> versus <i>Woman</i>, and <i>Trans</i> versus <i>Transgender</i>.</Text>
                </div>
              </Row>
              {/* <Row className='mt-5'>
                <div>
                <Title variant="cardBig">Consistency takes time</Title>
                  <Text className="mb-4 mt-4">Phase 1 had already written copy for mentee designs and Phase 2 began designing for the mentor side of the platform. There were 2 design teams during Phase 2 and thusly it was important to standardize copy between them. Occasionally we didn't see a copy change from one team which led to overall confusion on all teams and a lack of cohesion within designs. Future phases will be able to unify designs with the help of the style guide.</Text>
                </div>
              </Row>  */}
          </Section>
        </Container>
      </Section>
    </>
  );
};

export default CaseStudySLVoiceBody;
