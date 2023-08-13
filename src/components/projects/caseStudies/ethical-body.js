import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box, Button } from "../../../components/Core";
import imgPhoto5 from "../../../assets/image/png/safetybefore.png";
import imgPhoto6 from "../../../assets/image/png/safetyafter.png";
import imgPhoto4 from "../../../assets/image/png/quiz.png";
import imgPhoto7 from "../../../assets/image/png/questionnaire.png";
import imgPhoto8 from "../../../assets/image/png/support.png";
import imgPhoto9 from "../../../assets/image/png/focus.png";
import imgPhoto10 from "../../../assets/image/png/chosen.png";

const EthicalBody = () => {
  return (
    <>
     <Section className="position-relative">
        <Container>
            <Row>
                <Title variant="cardBig">A trauma-informed approach to communication</Title>
                  <Text className="mb-4 mt-4 w-100">3 phrases stood out as non-inclusive and potentially triggering to users
                    <li><i><b>Quiz</b></i></li>
                    <li><i><b>Support needed</b></i></li>
                    <li>and <i><b>Preferred name</b></i></li>
                  </Text>
            </Row>
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
                        <img src={imgPhoto4} alt="" className="img-fluid w-100 mb-4" />
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
                        <Title variant="card">Before: support needed</Title>
                        <img src={imgPhoto8} alt="" className="img-fluid w-100" />
                    </div>
                </Col>
                <Col>
                    <div>
                         <Title variant="card">After: focus areas</Title>
                        <img src={imgPhoto9} alt="" className="img-fluid w-100  mb-4" />
                    </div>
                </Col>
              </Row>
              <Row className='mt-5'>
                <div>
                    <Title variant="cardBig"> <i>Preferred name</i> implies a name is not <i>real</i></Title>
                    <Text className="mb-4 mt-4">Because the platform is built for the LGBTQIA+ community, <b>names</b>, <b>pronouns</b>, and <b>individual agency are significant</b>. Trans and non-binary folks may have a different name than was given to them at birth. Asking for someone's legal name may bring about unintended pain, and asking for someone's preferred name may come across as disrespectful.
                    <br />In an effort to be inclusive, avoid deadnaming, and offer personal autonomy, I suggested using <b>Chosen name</b>.</Text>
                        <img src={imgPhoto10} alt="" className="img-fluid w-50  mb-4" />
                </div>
              </Row>
              <Row className='mt-5'>
                <div>
                    <Title variant="cardBig">Outcomes and client feedback</Title>
                    <Text className="mb-4 mt-4"><i><b>Chosen name</b></i> was specifically pointed out by users during usability testing as an inclusive phrase they liked.</Text>
                    <Text className="mb-4 mt-4"><i><b>"The focus on maintaining a respectful tone by avoiding assumptions and gendered language is crucial in creating an inclusive and welcoming environment for our mentees. This demonstrates our commitment to treating each individual with dignity and respect. Your dedication to compassion is reflected in your desire for mentees and mentors to feel accepted for who they are. This compassionate tone fosters trust, empathy, and understanding."</b></i> - Steph Lambruschini, Lead Sean's Legacy Client</Text>
                </div>
              </Row>
          
        </Container>
      </Section>
    </>
  );
};

export default EthicalBody;