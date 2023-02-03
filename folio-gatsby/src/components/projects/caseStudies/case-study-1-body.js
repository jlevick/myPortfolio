import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import imgPhoto from '../../../assets/image/png/swot_sanctuary.png'
import imgPhoto1 from '../../../assets/image/png/swot_kasamba.png'
import imgPhoto2 from '../../../assets/image/png/aspect_piechart.png'

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  LinkContact,
} from '../../../components/Core'

const CaseStudy1Body = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section className="position-relative">
        <Container>
          <Row className="justify-content-center align-items-center">
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
            <Box>
            <img src={imgPhoto} alt="folio" className="img-fluid" />
            </Box>
            <Box>
            <img src={imgPhoto1} alt="folio" className="img-fluid" />
            </Box>
            <Box className="pl-lg-4 pt-5 pt-lg-0">
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
                <Text
                    className="mt-4 mb-5"
                    css={`
                      line-height: .07;
                    `}
                    >
                   <h4>Pricing</h4> 
                        <li>We need to offer upfront, transparent pricing.</li>
                   <h4>Qualifications</h4> 
                        <li>We need to attract vetted astrologers and list their qualifications.</li>
                   <h4>Reviews</h4> 
                        <li>We need to make it easy to find user reviews.</li>
                  </Text>
            </Box>
            <Box className="pl-lg-4 pt-5 pt-lg-0">
                <Text
                    className="mt-4 mb-5"
                    css={`
                      line-height: .07;
                    `}
                    >
                    After determining the viability of the project, I surveyed 22 people in order to gather information about their interest in astrology and what they look for in an astrologer. The survey was open to everyone.
                </Text>
            </Box>
            <Box>
                <img src={imgPhoto2} alt="folio" className="img-fluid" />
            </Box>
                <Text
                    className="mt-4 mb-5"
                    css={`
                      line-height: .07;
                    `}
                    >
                     <h3>Most important criteria when seeking an astrologer</h3>
                    <li>Verified Expertise (63.6%)</li>
                    <li>Astrologer's Background (63.6%)</li>
                    <li>Client Reviews (45.5%)</li>
                    <br/>
                    <h3>People don't book astrology readings because they are</h3>
                    <li>Unsure of the astrologer's credibility (64.7%)</li>
                    <li>Unsure of whom to book with (64.7%)</li>
                    <br/>
                    The survey was followed up by user interviews with 4 self identified astro-enthusiasts. The goal of these interviews was to gain a deeper understanding of people's motivations for following astrology, their experiences working with astrologers, and their expectations of astrological content.
                    <h3>User Interview Key Findings</h3>
                    <li>Users engage with astrology for fun, connection, and self knowledge.</li>
                    <li>Users won't book readings if they aren't certain the astrologer is trustworthy.</li>
                    <li>No single astrology resource provides all the information users need.</li>
                </Text>
          </Row>
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
                <Title
              variant="card"
              mb="2.5rem"
              fontSize="1rem"
              className="text-uppercase"
              css={`
                letter-spacing: 1.63px;
              `}
            >
              <h4>Users need a convenient platform where they can easily find qualified astrologers, connect with other astrology enthusiasts, and learn about themselves through their own unique birth chart.</h4>
            </Title>
            </Box>
            <Box className="pl-lg-4 pt-5 pt-lg-0">
                <Text
                    className="mt-4 mb-5"
                    css={`
                      line-height: .07;
                    `}
                    >
                    We will know our problem statement is accurate when users are able to connect with other astrology enthusiasts and no longer have to spend time searching for an astrologer or researching their personal astrology, all within a single app.
                </Text>
            </Box>
            <Box>
                <img src={imgPhoto2} alt="folio" className="img-fluid" />
            </Box>
                <Text
                    className="mt-4 mb-5"
                    css={`
                      line-height: .07;
                    `}
                    >
                     The most important criteria when seeking an astrologer:
                    <li>Verified Expertise</li>
                    <li>Astrologer's Background (63.6%)</li>
                    <li>Client Reviews (45.5%)</li>
                    <br/>People ultimately don't book astrology readings because they are:
                    <li>Unsure of the astrologer's credibility (64.7%)</li>
                    <li>Unsure of whom to book with (64.7%)</li>
                    <br/> The survey was followed up by user interviews with four self identified astro-enthusiasts. The goal of these interviews was to gain a deeper understanding of people's motivations for following astrology, their experiences working with astrologers, and their expectations for astrological content.
                    
                    <h2>Key Findings</h2>
                    <li>Users engage with astrology for fun, connection, and self knowledge.</li>
                    <li>Users won't book readings if they aren't certain the astrologer is trustworthy.</li>
                    <li>No single astrology resource provides all the information users need.</li>
                </Text>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default CaseStudy1Body
