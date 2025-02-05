import React from 'react'
import { Container, Row, Card, Accordion, Button } from 'react-bootstrap'

import { Section, Title, Text } from '../../components/Core'
import imgPhoto3 from '../../assets/image/png/jaime3.png'


const About = ({ hero = true, bg = 'light', ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="justify-content-center align-items-center py-5">
              <div className='w-25'>
                <img src={imgPhoto3} alt="Jaime holding a black and white boston terrier" aria-label='Jaime smiling and holding a black and white boston terrier dog named Cricket' className="img-fluid" />
              </div>
          </Row> 
          <Row>
            <div className="pl-lg-4 pt-5 pt-lg-0">
              <Title variant="cardBig" className="mt-2 mb-5 mt-lg-5">Hi! I'm Jaime, a Content Designer with front-end development skills and a talent for simplifying complex jargon. I improve user experiences (UX) with an accessibility-first approach and thrive when collaborating with cross-functional, diverse teams.</Title>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <Title
                      variant="card"
                      mb="1.5rem"
                      fontSize="1rem"
                      className="mt-2 mb-4"
                      css={`
                        letter-spacing: 1.63px;
                      `}
                    >
                     How I can help
                  </Title>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Text className="mt-2 mb-2">
                        <li><b>UX writing</b>: using evidence and plain language to write clear, consistent, and useful copy</li>
                        <li><b>Accessibility advocacy</b>: ensuring content is inclusive and available to <i>everyone</i> in <i>every</i> situation</li>
                        <li><b>Content design</b>: offering what users need when and where it's useful with a user-centered approach</li>
                        <li><b>Front-end development</b>: reducing development time by making changes and creating relevant pull requests</li>
                        </Text>
                      </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <Title
                      variant="card"
                      mb="1.5rem"
                      fontSize="1rem"
                      className="mt-2 mb-4"
                      css={`
                        letter-spacing: 1.63px;
                      `}
                    >
                      Experience
                  </Title>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Text className="mt-2 mb-4"><b>Experience</b></Text>
                      <Text className="mt-2 mb-5">
                        <li><b>Content Designer</b>|<i>Fearless Tech</i>| April 2024 - Current</li>
                        <li><b>UX Writing Lead</b> | <i>Global Justice Ecology Project</i> | August 2023 - January 2024</li>
                        <li><b>UX Writer</b> | <i>Oppia Foundation</i> | May 2023 - October 2023</li>
                        <li><b>Content Strategist</b> | <i>Sean's Legacy</i> | January 2023 - April 2023</li>
                        <li><b>Content Designer</b> | <i>SeniorCorps</i> | March 2020 - February 2022</li>
                        <li><b>Sr. Administrative Specialist</b> | <i>University of Wyoming</i> | August 2012 - July 2019</li>
                      </Text>
                      <Text className="mt-2 mb-4"><b>Education</b></Text>
                      <Text className="mt-2 mb-2">
                        <li><b>UX Design Immersive</b>, frontend for designers specialization | <i>CareerFoundry</i> | 2022</li>
                        <li><b>Bachelor of Arts</b>, anthropology and gender studies | <i>University of Wyoming</i> | 2011</li>
                      </Text>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <Title
                      variant="card"
                      mb="1.5rem"
                      fontSize="1rem"
                      className="mt-4 mb-4"
                      css={`
                        letter-spacing: 1.63px;
                      `}
                    >
                      Testimonials
                  </Title>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Text><li><i>"From start to finish, Jaime displayed exceptional talent in crafting copy that was not only informative and accurate but also engaging and easy to understand."</i> - <b>Steph Lambruschini, Senior UX Designer and Sean's Legacy Client</b></li></Text>
                      <br /> <br/>
                      <Text><li><i>"Jaime effectively conveyed complex ideas in a concise and user-friendly manner, enhancing the platform's usability and creating a seamless experience for mentors and mentees. Her attention to detail, proactive approach, and collaborative spirit were invaluable assets to the project's success."</i> - <b>Hope Dehnert, MPH, Copywriter and Co-Founder of Sean's Legacy</b></li></Text>
                      <br /> <br />
                      <Text><li><i>"I was particularly impressed with [Jaime's] attention to detail, which was invaluable in standardizing content and microcopy across the product."</i> - <b>Dana Pek, Content Strategist and Former Team Lead</b></li></Text>
                      <br /> <br />
                      <Text><li><i>"I’ve never had a lead so focused on inclusion and accessibility for the whole team right from the jump. Her organizational skills are top-notch, she’s possessed of a quick wit and a sharp analytical mind, and there’s no challenge that she’s scared of or will back down from. If I could work with and for her again, I absolutely would jump at the chance."</i> - <b>Rowan Case, Content Designer and UX Writing Apprentice on Global Justice Ecology Project</b></li></Text>
                      <br /> <br />
                      <Text><li><i>"[Jaime's] ability to communicate effectively and present her work with confidence and clarity was admirable, and she always went above and beyond to ensure that her writing was aligned with our organization's goals."</i> - <b>Steph Lambruschini, Sean's Legacy Client </b></li></Text>
                      <br /> <br />
                      <Text><li><i>"[Jaime] provided us with a wealth of information on accessibility best practices for writing inclusive image alt text. When we had concerns and questions about the topic, Jaime provided us with multiple resources, detailed explanations, and personalized recommendations that made me feel that I had received an entire course of the best material on this topic! Her encouragement and teaching style has also built the confidence in our team to fully implement the best practices she suggested. Jaime’s passion in, and enthusiasm towards, her field was extremely evident and has left a lasting impression at GJEP.</i> - <b>Heather Lee, Programs Associate and Lead Global Justice Ecology Project Client</b></li></Text>
                      <br /> <br />
                      <Text><li><i>"Jaime didn’t have an ego, she created a safe space for our team to have open discussions, and was open to feedback or suggestions. She led with a servant-leadership style: she prioritized helping others, wasn’t shy about doing the work, and created an environment where each person could be themselves."</i> - <b>Alanna Olear, Global Justice Ecology Project Co-Lead and UX Researcher</b></li></Text>
                      <br /> <br />
                      <Text><li><i>"What truly sets Jaime apart is her innate ability to create and maintain a positive work environment and always be open to discussions. She actively sought input from team members, valuing diverse perspectives and creating a team culture that thrived on mutual respect and support. Jaime possesses a remarkable ability to lead, fostering a collaborative and inclusive environment. She championed accessibility and inclusion in all aspects of our projects, ensuring that our work was considerate of diverse needs.</i> - <b>Stephanie Roncone, UX Researcher and UX Writing Apprentice on the Global Justice Ecology Project</b></li></Text>
                      <br /> <br />
                      <Text><li><i>"Jaime's ability to foster a collaborative and inclusive environment made her a joy to work with. She was always prepared with questions and made sure to clarify anything that wasn’t completely clear. She allowed all team members to have a voice, while supporting and leading us along the way. Jaime's commitment to accessibility and inclusion was evident in every aspect of her work and I am grateful to have learned so much from her in a short period of time. She provided content recommendations, backed by research, with accessibility at the focal point.</i> - <b>Candace Larson, Visual Designer and UX Writing Apprentice on the Global Justice Ecology Project</b></li></Text>
                      </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              {/* {<Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <Title
                      variant="card"
                      mb="1.5rem"
                      fontSize="1rem"
                      className="mt-2 mb-4"
                      css={`
                        letter-spacing: 1.63px;
                      `}
                    >
                     Fun facts
                  </Title>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Text className="mt-2 mb-2">
                      I value diversity, empathy, curiosity, and open communication. 
                      </Text>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>} */}
            </div>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default About
