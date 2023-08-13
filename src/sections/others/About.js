import React from 'react'
import { Container, Row } from 'react-bootstrap'

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
              <Title
              variant="card"
              mb="1.5rem"
              fontSize="1rem"
              className="text-uppercase"
              css={`
                letter-spacing: 1.63px;
              `}
            >
              How I can contribute
            </Title>
              <Text className="mt-2 mb-5">
                <li><b>UX writing</b>: combining data sets to write clear, consistent, and concise copy</li>
                <li><b>Content design</b>: offering what users need when and where they expect it with a user-centered approach</li>
                <li><b>Software development</b>: making changes in complex codebases and creating relevant pull requests</li>
                <li><b>Accessibility advocacy</b>: ensuring content is available to <i>everyone</i> and educating teams on why accessibility matters</li>
              </Text>
              <Title
              variant="card"
              mb="1.5rem"
              fontSize="1rem"
              className="text-uppercase mt-2 mb-4"
              css={`
                letter-spacing: 1.63px;
              `}
            >
              What others say about me
            </Title>
              <Text><i>"From start to finish, Jaime displayed exceptional talent in crafting copy that was not only informative and accurate but also engaging and easy to understand."</i> - Steph Lambruschini, Sean's Legacy Client</Text>
              <br />
              <Text><i>"Jaime effectively conveyed complex ideas in a concise and user-friendly manner, enhancing the platform's usability and creating a seamless experience for mentors and mentees. Her attention to detail, proactive approach, and collaborative spirit were invaluable assets to the project's success."</i> - Hope Dehnert, MPH, Co-Founder of Sean's Legacy</Text>
              <br />
              <Text><i>"I was particularly impressed with [Jaime's] attention to detail, which was invaluable in standardizing content and microcopy across the product."</i> - Dana Pek, Former Team Lead</Text>
              <br />
              <Text><i>"[Jaime's] ability to communicate effectively and present her work with confidence and clarity was admirable, and she always went above and beyond to ensure that her writing was aligned with our organization's goals."</i> - Steph Lambruschini, Sean's Legacy Client</Text>
            </div>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default About
