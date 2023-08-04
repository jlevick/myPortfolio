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
              <div className='w-50'>
                <img src={imgPhoto} alt="Photo of Jaime holding a dog" aria-label='Photo of Jaime smiling and holding a boston terrier dog' className="img-fluid" />
              </div>
          </Row> 
          <Row>
            <div className="pl-lg-4 pt-5 pt-lg-0">
              <Title variant="cardSm"><i>"From start to finish, Jaime displayed exceptional talent in crafting copy that was not only informative and accurate but also engaging and easy to understand."</i> - Sean's Legacy Client</Title>
              <br />
              <Title color="dark" variant="secSm">
                Hi there, I'm Jaime.
              </Title>
              <Title color="dark" variant="cardSm">(and that's Cricket in the photo)
              </Title>
              <Text
                color="dark"
                className="mt-3 mt-lg-5"
                css={`
                  line-height: .07;
                `}
              >
                With a background in anthropology and gender studies and 10+ years in client-facing roles, I have developed creative problem-solving abilities and an empathetic, curious approach to human interaction. In 2020 I transitioned into UX design and quickly discovered my affinity for UX writing. 
                <br />
                <br />
                I excel at analyzing and synthesizing data and using the results to write clear, contextual copy.
                I believe great content is useful, concise, and meets the human on the other end right where they are. I have a keen attention to detail, a love of the Oxford comma, a distaste for Lorem Ipsum, and I'm proud to focus on inclusion and accessibility. 
                <br /> 
                <br /> While happily autonomous, there's nothing like diversity and collaboration to create a truly great experience. 
                Focused on delivering high-quality, easily-understood results rather than seeking recognition, I view failure as an opportunity for growth. Being unafraid to ask questions in order to gain clarity is one of my superpowers. <br />
                <br /> I enjoy anything I can zone in to: 
                <li>climbing</li>
                <li>writing</li>
                <li>research</li>
                <li>snowboarding</li>
                <li>organization</li>
                <li>gardening</li>
                <li>learning to code</li>
                <li>deep abstract thinking</li>
              ... you get the idea!
                <br />
                <br />
                <b>Here are some nice things people have said about me:</b>
                <br />
                <br />
                <Text><i>"Jaime effectively conveyed complex ideas in a concise and user-friendly manner, enhancing the platform's usability and creating a seamless experience for mentors and mentees. Her attention to detail, proactive approach, and collaborative spirit were invaluable assets to the project's success."</i> - Former Client</Text>
                <br />
                <Text><i>"I was particularly impressed with [Jaime's] attention to detail, which was invaluable in standardizing content and microcopy across the product."</i> - Former Team Lead</Text>
                <br />
                <Text><i>"[Jaime's] ability to communicate effectively and present her work with confidence and clarity was admirable, and she always went above and beyond to ensure that her writing was aligned with our organization's goals."</i> - Former Client</Text>
                <br />
                <Text><i>"[Jaime] showed persistence, creative thinking, a sharp analytical eye, and tremendous skill with content. She used great UX writing to elevate the tone of prototypes, and sought feedback from a wide range of sources in order to create a visual mood that perfectly matched the purpose of her app."</i> - Former Mentor</Text>
              </Text>
            </div>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default About
