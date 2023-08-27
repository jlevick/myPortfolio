import React from 'react'
import { Container, Row, Card, Accordion, Button } from 'react-bootstrap'

import { Section, Title, Text } from '../../components/Core'
import imgPhoto from '../../assets/image/png/jaime_small.png'


const About = ({ hero = true, bg = 'light', ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="justify-content-center align-items-center py-5">
              <div className='w-25'>
                <img src={imgPhoto} alt="Photo of Jaime holding a dog" aria-label='Photo of Jaime smiling and holding a boston terrier dog named Cricket' className="img-fluid" />
              </div>
          </Row> 
          <Row>
            <div className="pl-lg-4 pt-5 pt-lg-0">
              <Title variant="cardBig" className="mt-2 mb-5 mt-lg-5">Hi! I'm Jaime, a UX writer with front-end development skills and a knack for simplifying complex jargon.</Title>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <Title
                      variant="card"
                      mb="1.5rem"
                      fontSize="1rem"
                      className="text-uppercase mt-2 mb-4"
                      css={`
                        letter-spacing: 1.63px;
                      `}
                    >
                     How I can contribute
                  </Title>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Text className="mt-2 mb-5">
                        <li><b>UX writing</b>: combining data sets to write clear, consistent, and concise copy</li>
                        <li><b>Software development</b>: making changes in complex codebases and creating relevant pull requests</li>
                        <li><b>Content design</b>: offering what users need when and where they expect it with a user-centered approach</li>
                        <li><b>Accessibility compliance</b>: ensuring content is available to <i>everyone</i> and writing relevant ARIA labels and alt text</li>
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
                      className="text-uppercase mt-2 mb-4"
                      css={`
                        letter-spacing: 1.63px;
                      `}
                    >
                      My resume
                  </Title>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Text className="mt-2 mb-5">
                        <b><ul>Experience</ul></b>
                        <li><b>Lead UX Writer</b> | <i>Global Justice Ecology Project</i> | August 2023 - present</li>
                        <li><b>UX Writer</b> | <i>Oppia Foundation</i> | May 2023 - present</li>
                        <li><b>Content Strategist </b>| <i>Sean's Legacy</i> | January 2023 - April 2023</li>
                        <li><b>Project Coordinator</b> | <i>SeniorCorps</i> | March 2020 - February 2022</li>
                        <li><b>Administrative Specialist</b> | <i>University of Wyoming</i> | August 2012 - July 2019</li>
                      </Text>
                      <Text className="mt-2 mb-2">
                        <b><ul>Education</ul></b>
                        <li><b>UX Design Immersive</b>, frontend for designers specialization | <i>CareerFoundry</i> | February 2022 - January 2023</li>
                        <li><b>Bachelor of Arts</b>, anthropology and gender studies | <i>University of Wyoming</i> | August 2007 - December 2011</li>
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
                      className="text-uppercase mt-2 mb-4"
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
                      <Text><li><i>"From start to finish, Jaime displayed exceptional talent in crafting copy that was not only informative and accurate but also engaging and easy to understand."</i> - <b>Steph Lambruschini, Sean's Legacy Client</b></li></Text>
                      <br /> <br/>
                      <Text><li><i>"Jaime effectively conveyed complex ideas in a concise and user-friendly manner, enhancing the platform's usability and creating a seamless experience for mentors and mentees. Her attention to detail, proactive approach, and collaborative spirit were invaluable assets to the project's success."</i> - <b>Hope Dehnert, MPH, Co-Founder of Sean's Legacy</b></li></Text>
                      <br /> <br />
                      <Text><li><i>"I was particularly impressed with [Jaime's] attention to detail, which was invaluable in standardizing content and microcopy across the product."</i> - <b>Dana Pek, Former Team Lead</b></li></Text>
                      <br /> <br />
                      <Text><li><i>"[Jaime's] ability to communicate effectively and present her work with confidence and clarity was admirable, and she always went above and beyond to ensure that her writing was aligned with our organization's goals."</i> - <b>Steph Lambruschini, Sean's Legacy Client </b></li></Text></Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default About
