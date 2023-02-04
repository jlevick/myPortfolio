import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import imgPhoto from '../../../assets/image/png/swot_sanctuary.png'
import imgPhoto1 from '../../../assets/image/png/aspect_piechart.png'
import imgPhoto2 from '../../../assets/image/png/aspect_persona_vanessa@2px.png'
import imgPhoto3 from '../../../assets/image/png/aspect_userFlow_vanessa@2px.png'
import imgPhoto4 from '../../../assets/image/png/aspect_persona_hannah@2px.png'
import imgPhoto5 from '../../../assets/image/png/aspect_userflow_hannah@2px.png'
import imgPhoto6 from '../../../assets/image/png/aspect_browse_iteration@2x.png'
import imgPhoto7 from '../../../assets/image/jpg/aspect_early_prototype@2px.jpg'
import imgPhoto8 from '../../../assets/image/jpg/aspect_research_notes@2px.jpg'

import {
  Title,
  Section,
  Box,
  Text,
} from '../../../components/Core'

const CaseStudy1Body = () => {
  return (
    <>
      {/* <!-- 01 Discover --> */}
      <Section className="position-relative">
        <Container>
          <Col className="justify-content-center align-items-center">
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Title variant="secSm">
                  01 Discover
              </Title>
              <Title
                variant="card"
                mb="2.5rem"
                fontSize="1rem"
                className="text-uppercase"
                css={`
                  letter-spacing: 1.63px;
                `}
              >
                Business Opportunity - Competitive Analysis - Survey - User Interviews 
              </Title>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: .07;
                `}
              >
                Astrology offers personal guidance and is a growing $2.2 billion industry. Aspect, an astrology app, stands out in the market as the only one offering its unique services, making it a promising opportunity for investors.
              </Text>
            </Box>
            <Row className="justify-content-center align-items-center">
              <img src={imgPhoto} alt="folio" className="img-fluid" />
            </Row>
            <Row className="justify-content-center align-items-center">
              <Col>
                <h2 variant="secSm">
                Top 3 Market Gaps to Fill
                </h2>
                <Title
                  variant="card"
                  mb="2.5rem"
                  fontSize="1rem"
                  className="text-uppercase"
                  css={`
                    letter-spacing: 1.63px;
                  `}
                >
                  Based on S.W.O.T analyses of Sanctuary Astrology and Kasamba 
                </Title>
                <h4>Pricing</h4> 
                <Text variant='li'>We need to offer <b>upfront, transparent pricing</b>.</Text>
                <h4>Qualifications</h4> 
                <Text variant='li'>We need to attract <b>qualified astrologers</b> and relay their qualifications.</Text>
                <h4>Reviews</h4> 
                <Text variant='li'>We need to make it <b>easy to find user reviews</b>.</Text>
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: .07;
                `}
              >
                After determining the viability of the project, I surveyed 22 people in order to gather information about their interest in astrology and what they look for in an astrologer. The survey was open to everyone.
              </Text>
            </Row>
            <Row>
              <img src={imgPhoto1} alt="folio" className="img-fluid" />
            </Row>
            <Row>
              <Col>
                <h3>Most important criteria when seeking an astrologer</h3>
                <ul type='circle' className='pl-4'>
                  <Text variant='li'><b>Verified Expertise</b> (63.6%)</Text>
                  <Text variant='li'><b>Astrologer's Background</b> (63.6%)</Text>
                  <Text variant='li'><b>Client Reviews</b> (45.5%)</Text>
                </ul>
                <br />
                <h3>People don't book astrology readings because they are</h3>
                <ul type='circle' className='pl-4'>
                  <Text variant='li'><b>Unsure of astrologer's credibility</b> (64.7%)</Text>
                  <Text variant='li'><b>Unsure whom to book with</b> (64.7%)</Text>
                </ul>
                <br />
                <Text>The survey was followed up by user interviews with 4 self identified astro-enthusiasts. The goal of these interviews was to gain a deeper understanding of people's <b>motivations</b> for following astrology, their <b>experiences</b> working with astrologers, and their <b>expectations</b> of astrological content.</Text>
                <h3>User Interview Key Findings</h3>
                <ul type='circle' className='pl-4'>
                  <Text variant='li'><b>Users engage with astrology for fun, connection, and self knowledge.</b></Text>
                  <Text variant='li'><b>Users won't book readings if they aren't certain the astrologer is trustworthy.</b></Text>
                  <Text variant='li'><b>No single astrology resource provides all the information users need.</b></Text>
                </ul>
              </Col>
            </Row>
          </Col>
          {/* <!-- 02 Define --> */}
          <Row className="justify-content-center align-items-center">
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Title variant="secSm">
                  02 Define
              </Title>
              <Title
                variant="card"
                mb="2.5rem"
                fontSize="1rem"
                className="text-uppercase"
                css={`
                  letter-spacing: 1.63px;
                `}
              >
                Problem Statement - User Personas - User Flows 
              </Title>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: .07;
                `}
              >
                The interviews indicated users are seeking more than just access to reputable astrologers.
                Based on these findings I crafted a problem statement and initial hypothesis.
              </Text>
            </Box>
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <h2 variant="secSm">
                Problem Statement
              </h2>
              <Text
                variant="bold"
                mb="2.5rem"
                fontSize="1.2rem"
                css={`
                  letter-spacing: 1.63px;
                `}
              >
                Users need a convenient platform where they can easily find qualified astrologers, connect with other astrology enthusiasts, and learn about themselves through their own unique birth chart.
              </Text>
              <Text>We will know our problem statement is accurate when users are able to connect with other astrology enthusiasts and no longer have to spend time searching for an astrologer or researching their personal astrology, all within a single app.</Text>
              <br />
            </Box>
            <Box>
              <h4>Hypothesis</h4>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: .07;
                `}
              >
                If we focus on offering access to <b>inclusive astrology experts</b>, <b>user and astrologer compatibility</b>, <b>upfront costs and reviews</b>, providing <b>personalized astrology content</b>, and creating a <b>supportive community space</b> we will be well positioned to break in to the market with a product unlike any other.
              </Text>
              <h2>User Personas</h2>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: .07;
                `}
              >
                Thanks to the prior research and hours of affinity mapping, 2 distinct personas were created. User flows helped me plan which features and screens were necessary for a user to complete a given task.
              </Text>
                <Row>
                  <img src={imgPhoto2} alt="folio" className="img-fluid" />
                </Row>
                <Row>
                  <img src={imgPhoto3} alt="folio" className="img-fluid" />
                </Row>
                <Row>
                  <img src={imgPhoto4} alt="folio" className="img-fluid" />
                </Row>
                <Row>
                  <img src={imgPhoto5} alt="folio" className="img-fluid" />
                </Row>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: .07;
                `}
              >
                The culmination resulted in 3 Main App Features
                <ul type='circle' className='pl-4'>
                  <Text variant='li'>A way for Hannah to find an astrologer who fits their needs <b>(Browse and Chat)</b></Text>
                  <Text variant='li'>A way for Vanessa to connect with others <b>(Community Chat)</b></Text>
                  <Text variant='li'>A way for Hannah to delve in to self exploration <b>(My Chart)</b></Text>
                </ul>
              </Text>
            </Box>
          </Row>
          {/* <!-- 03 Ideate --> */}
          <Row className="justify-content-center align-items-center">
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Title variant="secSm">
                  03 Ideate
              </Title>
              <Title
                variant="card"
                mb="2.5rem"
                fontSize="1rem"
                className="text-uppercase"
                css={`
                  letter-spacing: 1.63px;
                `}
              >
                Card Sorting - Information Architecture - Wireframing
              </Title>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: .07;
                `}
              >
                With a clear understanding of target users and required screens, I used a hybrid card sort to create Aspect’s site map. I then created low-fidelity wireframes using pen and paper, including copy to provide context to the designs. After refining my ideas, I moved on to designing in Figma.
              </Text>
                <Row>
                  <img src={imgPhoto6} alt="folio" className="img-fluid" />
                </Row>
            </Box>
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Text>Above is an example of the iterative process for one of Aspect's main features, <b>Browse Astrologers</b>.</Text>
            </Box>
          </Row>
          {/* <!-- 04 Prototype --> */}
          <Row className="justify-content-center align-items-center">
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Title variant="secSm">
                  04 Prototype
              </Title>
                <Row>
                  <img src={imgPhoto7} alt="folio" className="img-fluid" />
                </Row>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: .07;
                `}
              >
                As you can see in the image above, I began my prototyping process with my final paper sketches.
              </Text>
            </Box>
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Text>Click here to see the final prototype for Aspect.</Text>
            </Box>
          </Row>
           {/* <!-- 05 Test --> */}
           <Row className="justify-content-center align-items-center">
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Title variant="secSm">
                  05 Test
              </Title>
              <Title
                variant="card"
                mb="2.5rem"
                fontSize="1rem"
                className="text-uppercase"
                css={`
                  letter-spacing: 1.63px;
                `}
              >
                Usability Testing - Preference Testing 
              </Title>
                <Row>
                  <img src={imgPhoto8} alt="folio" className="img-fluid" />
                </Row>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: .07;
                `}
              >
                The goal of usability testing was to measure for usability errors. Moderated remote testing was used for all 6 usability tests. Participants were given 4 tasks to complete.
              </Text>
            </Box>
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <h4 variant="secSm">
                Task Scenario Example
              </h4>
              <Text>You've registered for the app and can now see if there are any astrologers you might be interested in connecting with. How would you go about finding someone and then connecting with them? Please show me.</Text>
            </Box>
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <h2 variant="secSm">
                Usability Test Key Findings
              </h2>
              <Text>You've registered for the app and can now see if there are any astrologers you might be interested in connecting with. How would you go about finding someone and then connecting with them? Please show me.</Text>
            </Box>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default CaseStudy1Body
