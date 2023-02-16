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
                <img src={imgPhoto} alt="folio" className="img-fluid" />
              </div>
          </Row> 
          <Row>
            <div className="pl-lg-4 pt-5 pt-lg-0">
              <Title color="dark" variant="secSm">
                Hi! I'm Jaime.
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
                With 10+ years in customer-facing roles and a background in anthropology and gender studies, I have an affinity for understanding and enhancing every user's experience. To ensure a useful and positive experience, I seek to bring clarity to every interaction. <br />
                <br /> 
                I'm an open and empathetic communicator who strives for inclusivity and accessibility in my work.  
                In conversation I endeavor to lift the figurative stone, awed by what may crawl out and the gems that always seem to be hidden underneath. 
                <br />
                <br /> While happily autonomous, my creativity thrives when given clear parameters.
                Focused on delivering high-quality results rather than seeking recognition, I see failure as an opportunity to grow and I'll happily ask the silly questions. <br />
                <br /> I enjoy anything I can zone in to: 
                <li>climbing</li>
                <li>snowboarding</li>
                <li>research</li>
                <li>writing</li>
                <li>organization</li>
                <li>learning to code</li>
                <li>deep abstract thinking</li>
                <br/>... you get the idea!
              </Text>
            </div>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default About
