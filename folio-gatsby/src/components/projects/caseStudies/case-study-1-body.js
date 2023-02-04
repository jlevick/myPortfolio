import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import imgPhoto from '../../../assets/image/png/swot_sanctuary.png'
import imgPhoto1 from '../../../assets/image/png/swot_kasamba.png'
import imgPhoto2 from '../../../assets/image/png/aspect_piechart.png'

import {
  Title,
  Section,
  Box,
  Text,
} from '../../../components/Core'

const CaseStudy1Body = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
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
              <img src={imgPhoto2} alt="folio" className="img-fluid" />
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
              <h3>Hypothesis</h3>
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
                Thanks to the prior research and hours of affinity mapping, 2 distinct personas were created. User flows helped me plan which features and screens were necessary for a user to complete a given task
              </Text>
            </Box>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default CaseStudy1Body
