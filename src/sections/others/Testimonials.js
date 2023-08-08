import React from 'react'
import { Container, Row } from 'react-bootstrap'

import { Section, Title, Text } from '../../components/Core'


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
            
              <Text
                color="dark"
                className="mt-3 mt-lg-5"
                css={`
                  line-height: .07;
                `}
              >
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

export default Testimonials
