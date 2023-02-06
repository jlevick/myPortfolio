import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import imgPhoto from '../../../assets/image/png/swot.png'
import imgPhoto1 from '../../../assets/image/png/aspect_piechart.png'
import imgPhoto2 from '../../../assets/image/png/aspect_persona_vanessa@2px.png'
import imgPhoto3 from '../../../assets/image/png/aspect_userFlow_vanessa@2px.png'
import imgPhoto4 from '../../../assets/image/png/aspect_persona_hannah@2px.png'
import imgPhoto5 from '../../../assets/image/png/aspect_userflow_hannah@2px.png'
import imgPhoto6 from '../../../assets/image/png/aspect_browse_iteration@2x.png'
import imgPhoto7 from '../../../assets/image/jpg/aspect_early_prototype@2px.jpg'
import imgPhoto8 from '../../../assets/image/jpg/aspect_research_notes@2px.jpg'
import imgPhoto9 from '../../../assets/image/png/aspect_preference_option_a@2x.png'
import imgPhoto10 from '../../../assets/image/png/aspect_preference_option_b@2x.png'
import imgPhoto11 from '../../../assets/image/png/aspect_design_crit_before@2x.png'
import imgPhoto12 from '../../../assets/image/png/aspect_design_crit_after@2x.png'
import imgPhoto13 from '../../../assets/image/png/aspect_sneak_peek_browse@2x.png'
import imgPhoto14 from '../../../assets/image/png/aspect_sneak_peek_my_chart@2x.png'
import imgPhoto15 from '../../../assets/image/png/aspect_sneak_peek_community@2x.png'
import imgPhoto16 from '../../../assets/image/png/aspect_final_mockups@2px.png'

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
          <Section hero={true} bg={"dark"} className="mt-5 px-5">
            <Container className="pb-3">
              <Title color="light" variant="secSm">
                01 Discover
              </Title>
              <Title
                color="light"
                variant="card"
                mb="2.5rem"
                fontSize="1rem"
                className="text-uppercase"
                css={`
                  letter-spacing: 1.63px;
                `}
              >
                Business Opportunity - Competitive Analysis - Survey - User
                Interviews
              </Title>
            </Container>
          </Section>
          <Col className="justify-content-center align-items-center">
            <Box className="pt-5">
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: 0.07;
                `}
              >
                Astrology offers personal guidance and is a growing $2.2 billion
                industry. Aspect, an astrology app, stands out in the market as
                the only one offering its unique services, making it a promising
                opportunity for investors.
              </Text>
            </Box>
            <Row className="justify-content-center align-items-center">
              <Col>
                <h2 variant="secSm">Top 3 Market Gaps to Fill</h2>
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
                <Text variant="li">
                  We need to offer upfront, transparent pricing
                </Text>
                <br />
                <h4>Qualifications</h4>
                <Text variant="li">
                  We need to attract qualified astrologers and relay
                  their qualifications
                </Text>
                <br />
                <h4>Reviews</h4>
                <Text variant="li">
                  We need to make it easy to find user reviews
                </Text>
                <Row className="justify-content-center align-items-center py-3">
                  <div className="py-5 px-5 w-100">
                    <img src={imgPhoto} alt="folio" className="img-fluid" />
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: 0.07;
                `}
              >
                After determining the viability of the project, I surveyed 22
                people in order to gather information about their interest in
                astrology and what they look for in an astrologer. The survey
                was open to everyone.
              </Text>
            </Row>
            <Row className="justify-content-center align-items-center py-5">
              <div className="w-50">
                <img src={imgPhoto1} alt="folio" className="img-fluid" />
              </div>
            </Row>
            <Row className="py-5">
              <Col>
                <h3>Most important criteria when seeking an astrologer</h3>
                <ul type="circle" className="pl-4">
                  <Text variant="li">
                    Verified Expertise (63.6%)
                  </Text>
                  <Text variant="li">
                    Astrologer's Background (63.6%)
                  </Text>
                  <Text variant="li">
                    Client Reviews (45.5%)
                  </Text>
                </ul>
               
                <Row>
                  <Col>
                    <h3>
                      People don't book astrology readings because they are
                    </h3>
                    <ul type="circle" className="pl-4 pb-4">
                      <Text variant="li">
                        Unsure of astrologer's credibility (64.7%)
                      </Text>
                      <Text variant="li">
                        Unsure whom to book with (64.7%)
                      </Text>
                    </ul>
                    <Text>
                      The survey was followed up with user interviews with 4 self
                      identified astro-enthusiasts. The goal of interviews
                      was to gain a deeper understanding of people's{" "}
                      <b>motivations</b> for following astrology, their{" "}
                      <b>experiences</b> working with astrologers, and their{" "}
                      <b>expectations</b> of astrological content.
                    </Text>
                  </Col>
                </Row>
                <Row className="pt-5 pb-4">
                  <Col className="justify-content-center align-items-center">
                    <h3>User Interview Key Findings</h3>
                    <ul type="circle" className="pl-4">
                      <Text variant="li">
                          Users engage with astrology for fun, connection, and self knowledge.
                      </Text>
                      <Text variant="li">
                          Users won't book readings if they aren't certain the astrologer is trustworthy.
                      </Text>
                      <Text variant="li">
                          No single astrology resource provides all the information users need.
                      </Text>
                    </ul>
                  </Col>
                </Row>
                <br />
              </Col>
            </Row>
          </Col>
          {/* <!-- 02 Define --> */}
          <Row className="justify-content-center align-items-center">
            <Box>
              <Section hero={true} bg={"dark"} className="px-5">
                <Container className="pb-3">
                  <Title color="light" variant="secSm">
                    02 Define
                  </Title>
                  <Title
                    color="light"
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
                </Container>
              </Section>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: 0.07;
                `}
              >
                The interviews indicated users are seeking more than just access
                to reputable astrologers. Based on these findings I crafted a
                problem statement and initial hypothesis.
              </Text>
            </Box>
            <Box>
              <h3 className="mb-4">Problem Statement</h3>
              <Text className="mb-4">
                Users need a convenient platform where they can easily find
                qualified astrologers, connect with other astrology enthusiasts,
                and learn about themselves through their own unique birth chart.
              </Text>
              <Text>
                We will know our problem statement is accurate when users are
                able to connect with other astrology enthusiasts and no longer
                have to spend time searching for an astrologer or researching
                their personal astrology, all within a single app.
              </Text>
              <br />
            </Box>
            <Box className="pt-3">
              <h3>Hypothesis</h3>
              <Text
                className="mt-4 mb-4"
                css={`
                  line-height: 0.07;
                `}
              >
                If we focus on offering access to inclusive astrology experts, user and astrologer compatibility, upfront costs and reviews, providing personalized astrology content, and creating a supportive community space, we will be well positioned to break in to the market with a product unlike any other.
              </Text>
              <h3>User Personas and User Flows</h3>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: 0.07;
                `}
              >
                To identify themes and parse out insights, I created an affinity map, and 2 distinct personas emerged. User flows followed and helped plan which features and screens were necessary for a user to complete a given task. 
              </Text>
              <Row className="justify-content-center align-items-center">
                <div className="pb-5">
                  <h4>The culmination resulted in 3 main app features</h4>
                  <ul type="circle" className="pl-4">
                    <Text variant="li">
                      A way for Hannah to find an astrologer who fits their
                      needs <b>(Browse and Chat)</b>
                    </Text>
                    <Text variant="li">
                      A way for Vanessa to connect with others{" "}
                      <b>(Community Chat)</b>
                    </Text>
                    <Text variant="li">
                      A way for Hannah to delve in to self exploration{" "}
                      <b>(My Chart)</b>
                    </Text>
                  </ul>
                </div>
              </Row>
              <Row className="justify-content-center align-items-center py-5">
                <div className="w-50">
                  <img src={imgPhoto2} alt="folio" className="img-fluid" />
                </div>
              </Row>
              <Row className="justify-content-center align-items-center py-5">
                <div className="w-50">
                  <img src={imgPhoto3} alt="folio" className="img-fluid" />
                </div>
              </Row>
              <Row className="justify-content-center align-items-center py-5">
                <div className="w-50">
                  <img src={imgPhoto4} alt="folio" className="img-fluid" />
                </div>
              </Row>
              <Row className="justify-content-center align-items-center py-5">
                <div className="w-50">
                  <img src={imgPhoto5} alt="folio" className="img-fluid" />
                </div>
              </Row>
            </Box>
          </Row>
          {/* <!-- 03 Ideate --> */}
          <Row className="justify-content-center align-items-center">
            <Box className="pt-5">
              <Section hero={true} bg={"dark"} className="px-5">
                <Container className="pb-3">
                  <Title color="light" variant="secSm">
                    03 Ideate
                  </Title>
                  <Title
                    color="light"
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
                </Container>
              </Section>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: 0.07;
                `}
              >
                With a clear understanding of target users and required screens,
                I used a hybrid card sort to create Aspect’s site map. I then
                created low-fidelity wireframes using pen and paper, including
                copy to provide context to the designs. After refining my ideas,
                I moved on to designing in Figma.
              </Text>
                <Row className="justify-content-center align-items-center py-5">
                  <div className="w-75">
                    <img src={imgPhoto6} alt="folio" className="img-fluid" />
                  </div>
                </Row>
            </Box>
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <br />
              <Text>
                Above is an example of the iterative process for one of Aspect's
                main features, <b>Browse Astrologers</b>.
              </Text>
              <br />
            </Box>
          </Row>
          {/* <!-- 04 Prototype --> */}
          <Row className="justify-content-center align-items-center">
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Section hero={true} bg={"dark"} className="px-5">
                <Container className="pb-3">
                <Title color="light" variant="secSm">
                    04 Prototype
                  </Title>
                  <Title
                    color="light"
                    variant="card"
                    mb="2.5rem"
                    fontSize="1rem"
                    className="text-uppercase"
                    css={`
                      letter-spacing: 1.63px;
                    `}
                  >
                    Paper Prototyping - Final Prototype
                  </Title>
                </Container>
              </Section>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: 0.07;
                `}
              >
                I began my prototyping process with my final paper sketches as I was still learning Figma. In hindsight I created a lot of extra work for myself and likely wouldn't do this again, but it's a nice keepsake.
              </Text>
            </Box>
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Text
                target="_blank"
                href="https://www.figma.com/proto/W2qPXH6fRc4VrBPhPlc93i/Aspect-v11?node-id=1334%3A7185&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1330%3A7221"
                variant="a"
              >
                <u>
                  <b>Here is the final prototype for Aspect</b>
                </u>
                .
              </Text>
            </Box>
                <Row className="justify-content-center align-items-center py-5">
                  <div className="w-50">
                    <img src={imgPhoto7} alt="folio" className="img-fluid" />
                  </div>
              </Row>
          </Row>
          {/* <!-- 05 Test --> */}
          <Row className="justify-content-center align-items-center">
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Section hero={true} bg={"dark"} className="px-5">
                <Container className="pb-3">
                  <Title color="light" variant="secSm">
                    05 Test
                  </Title>
                  <Title
                    color="light"
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
                </Container>
              </Section>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: 0.07;
                `}
              >
                The goal of usability testing was to measure for usability
                errors. Moderated remote testing was used for all 6 usability
                tests. Participants were given 4 tasks to complete.
              </Text>
            </Box>
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <h4 variant="secSm">Task Scenario Example</h4>
              <Text>
                <i>
                  You've registered for the app and can now see if there are any
                  astrologers you might be interested in connecting with. How
                  would you go about finding someone and connecting with them?
                  Please show me.
                </i>
              </Text>
            </Box>
          </Row>
                <Row className="justify-content-center align-items-center py-5">
                  <div className="w-50">
                     <img src={imgPhoto8} alt="folio" className="img-fluid" />
                  </div>
                </Row>
          <Row className="justify-content-center align-items-center">
            <Col>
              <br />
              <br />
              <h2>Usability Test Key Findings</h2>
              <br />
              <h4>Information Overload</h4>
              <Text variant="li">
                Astrologer's profile is too busy
              </Text>
              <Text variant="li">
                <b>3 out of 6</b> experienced information overload on
                astrologer's profile, and 2 participants wanted more drop down
                content
              </Text>
              <br />
              <h4>Confusing Copy</h4>
              <Text variant="li">
                "Readings" copy in menu is confusing
              </Text>
              <Text variant="li">
                <b>3 out of 6</b> expressed confusion with the term “Readings”,
                thinking it was their past chart readings and not where to find
                astrologers
              </Text>
              <br />
              <h4>Expectations</h4>
              <Text variant="li">
                Users expect option to contact astrologer prior to
                booking
              </Text>
              <Text variant="li">
                <b>3 out of 6</b> want to reach out to an astrologer before
                committing to a reading in order to feel assurance
              </Text>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col>
              <br />
              <br />
              <h3>Implemented Changes</h3>
              <Text variant="li">
                Designed drop downs for About Me and Qualifications in
                astrologer's profile, mitigating information overload
              </Text>
              <Text variant="li">
                Changed menu copy from “Readings” to “Readers", adding clarity
              </Text>
              <Text variant="li">
                Designed Messages feature, allowing users to easily contact
                astrologers{" "}
              </Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text>
                The feedback I received from usability testing allowed me to
                clean up screens, thereby reducing confusion. Based on test
                results I <b>redesigned 3 screens</b> and{" "}
                <b>12 participants voted on which they preferred</b>.
              </Text>
              <Text>
                <b>Below are results for the Home screen.</b>
              </Text>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center py-5">
            <Col>
              <div>
                <h4>Option A: 17% of votes</h4>
                <div className="w-100">
                  <img src={imgPhoto9} alt="folio" className="img-fluid" />
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <h4>Option B: 83% of votes</h4>
                <div className="w-100">
                  <img src={imgPhoto10} alt="folio" className="img-fluid" />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text>
                <b>Why Option B? Participants said it's</b>
              </Text>
              <Text variant="li">Cleaner</Text>
              <Text variant="li">Easier to navigate</Text>
              <Text variant="li">More organized</Text>
              <Text variant="li">Easier on the eyes</Text>
              <Text variant="li">More consistent</Text>
              <Text variant="li">Less old-school</Text>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h3>What do my peers think?</h3>
              <Text>
                Before finalizing designs I participated in{" "}
                <b>design critiques</b>, receiving (and giving) feedback from 5
                peers. Below is a single example of{" "}
                <b>feedback I received and how I implemented changes</b>.
              </Text>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center py-5">
            <Col>
              <div>
                <div className="w-100">
                  <img src={imgPhoto11} alt="folio" className="img-fluid" />
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <div className="w-100">
                  <img src={imgPhoto12} alt="folio" className="img-fluid" />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Feedback</h4>
              <Text>
                <i>
                  “I think this profile page is very well laid out. One thing
                  that confuses me is the bell and the word 'online' next to it.
                  I can't tell if it's two separate icons or if they are
                  supposed to correspond together.” - L.
                </i>
              </Text>
              <br />
              <h4>Reasoning</h4>
              <Text>
                The bell icon for scheduling a reading was confusing without
                proper context. After further consideration, I realized the user
                only learns about the bells’ purpose if they click on Rates and
                Info. This led me to consider adding a third status, ”In
                Reading”, to indicate the astrologer is online but busy. I
                considered designing a timer to display how long they'll be
                occupied but I haven't pursued this yet as it will require
                additional time to design in a user-friendly, aesthetically
                pleasing way.{" "}
              </Text>
            </Col>
          </Row>
          <br />
          <Row className="justify-content-center align-items-center">
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Section hero={true} bg={"dark"} className="px-5">
                <Container className="pb-3">
                  <Title color="light" variant="secSm">
                    06 Document
                  </Title>
                  <Title
                    color="light"
                    variant="card"
                    mb="2.5rem"
                    fontSize="1rem"
                    className="text-uppercase"
                    css={`
                      letter-spacing: 1.63px;
                    `}
                  >
                    Design System - Style Guide
                  </Title>
                </Container>
              </Section>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: 0.07;
                `}
              >
                I made informed decisions regarding feedback by applying my{" "}
                <b>design system</b>, <b>style guide</b>, and{" "}
                <b>accessibility knowledge</b> to justify declining any proposed
                changes.
              </Text>
            </Box>
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Text
                target="_blank"
                href="https://www.figma.com/file/49BqqEEEOIOpWnxEugs8eQ/Aspect-Design-System-%26-Style-Sheet?node-id=0%3A1"
                variant="a"
              >
                <u>
                  <b>
                    The design system and style guide for Aspect can be found here.
                  </b>
                </u>
                .
              </Text>
            </Box>
          </Row>
          <br />
          <Row className="justify-content-center align-items-center">
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Section hero={true} bg={"dark"} className="px-5">
                <Container className="pb-3">
                  <Title color="light" variant="secSm">
                    07 Final Designs and Reflections
                  </Title>
                  <Title
                    color="light"
                    variant="card"
                    mb="2.5rem"
                    fontSize="1rem"
                    className="text-uppercase"
                    css={`
                      letter-spacing: 1.63px;
                    `}
                  >
                    Top 3 Features - Next Steps
                  </Title>
                </Container>
              </Section>
              
              
              <Row>
                <h3>Browse and Chat with an astrologer</h3>
                <img src={imgPhoto13} alt="folio" className="img-fluid" />
                <h3>My Chart</h3>
                <img src={imgPhoto14} alt="folio" className="img-fluid" />
                <h3>Community Chat</h3>
                <img src={imgPhoto15} alt="folio" className="img-fluid" />
              </Row>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: 0.07;
                `}
              >
                Final iterations took in to account{" "}
                <b>web accessibility best practices</b>,{" "}
                <b>usability heuristics</b>, and the real-life <b>feedback</b>{" "}
                of everyone who helped shape Aspect. I designed a minimum viable
                product <b>(MVP)</b> with <b>3 distinct features</b> that{" "}
                <b>offers users exactly what they want</b>,{" "}
                <i>all in one convenient app</i>.
              </Text>
              <br />
              <Text>
                As a new product on the market, the KPI{" "}
                <b>(key performance indicator)</b> I would measure is{" "}
                <b>user return rate</b>. It's a relatively easy metric to track
                and holds invaluable insight.{" "}
                <i>
                  How many users are booking an astrologer through our platform,
                  and how many are returning to book again?
                </i>{" "}
                If the user experience is poor because of the apps' flow, the
                user interface, the copy/content, the astrology experts, or any
                other number of reasons, we may find users do not return.
              </Text>
              <br />
              <Text>
                I believe Aspect is a genuinely{" "}
                <b>profitable business venture</b>. Testing would need to be
                done on a much larger scale with more participants but I stand
                behind the idea as an entry point in to this quickly growing
                industry.
              </Text>
            </Box>
          </Row>
          <Row>
            <Col>
              <br />
              <h3>Next Steps</h3>
              <Text variant="li">
                Design a Direct Message feature for user to user connection
              </Text>
              <Text variant="li">Design a feature to compare astrologers</Text>
              <Text variant="li">Design a more robust review feature</Text>
              <Text variant="li">
                Develop a strategy for vetting and recruiting astrologers
              </Text>
              <Text variant="li">
                Re-design the Browse feature to include a section on how
                astrologers are vetted
              </Text>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
}

export default CaseStudy1Body
