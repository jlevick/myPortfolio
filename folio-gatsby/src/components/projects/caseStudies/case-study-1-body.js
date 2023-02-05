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
              <img src={imgPhoto} alt="folio" className="" />
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
                <Text variant='li'>We need to offer <b>upfront, transparent pricing</b></Text>
                  <br />
                <h4>Qualifications</h4> 
                <Text variant='li'>We need to attract <b>qualified astrologers</b> and relay their qualifications</Text>
                  <br />
                <h4>Reviews</h4> 
                <Text variant='li'>We need to make it <b>easy to find user reviews</b></Text>
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
            <Row className="justify-content-center align-items-center">
              <Box>
              <img src={imgPhoto1} alt="folio" className="" />
              </Box>
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
                <br />
                <h3>User Interview Key Findings</h3>
                <ul type='circle' className='pl-4'>
                  <Text variant='li'><b>Users engage with astrology for fun, connection, and self knowledge.</b></Text>
                  <Text variant='li'><b>Users won't book readings if they aren't certain the astrologer is trustworthy.</b></Text>
                  <Text variant='li'><b>No single astrology resource provides all the information users need.</b></Text>
                </ul>
                <br />
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
                <h4>The culmination resulted in 3 Main App Features</h4>
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
              <br />
              <Text>Above is an example of the iterative process for one of Aspect's main features, <b>Browse Astrologers</b>.</Text>
              <br />
            </Box>
          </Row>
          {/* <!-- 04 Prototype --> */}
          <Row className="justify-content-center align-items-center">
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Title variant="secSm">
                  04 Prototype
              </Title>
                <br />
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
              <Text target="_blank" href="https://www.figma.com/proto/W2qPXH6fRc4VrBPhPlc93i/Aspect-v11?node-id=1334%3A7185&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1330%3A7221"variant='a'><u><b>Click here to see the final prototype for Aspect</b></u>.</Text>
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
              <Text><i>You've registered for the app and can now see if there are any astrologers you might be interested in connecting with. How would you go about finding someone and connecting with them? Please show me.</i></Text>
            </Box>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col>
                <br />
                <br />
              <h2>
                Usability Test Key Findings
              </h2>
                <br />
              <h4>Information Overload</h4>
              <Text variant="li">Astrologer's profile is <b>too busy</b></Text>
              <Text variant="li"><b>3 out of 6</b> experienced information overload on astrologer's profile, and 2 participants wanted more drop down content</Text>
                <br />
              <h4>Confusing Copy</h4>
              <Text variant="li">"Readings" <b>copy</b> in menu <b>is confusing</b></Text>
              <Text variant="li"><b>3 out of 6</b> expressed confusion with the term “Readings”, thinking it was their past chart readings and not where to find astrologers</Text>
                <br />
              <h4>Expectations</h4>
              <Text variant="li">Users expect <b>option to contact astrologer</b> prior to booking</Text>
              <Text variant="li"><b>3 out of 6</b> want to reach out to an astrologer before committing to a reading in order to feel assurance</Text>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
           <Col>
           <br />
           <br />
            <h3>Implemented Changes</h3>
            <Text variant="li">Designed drop downs for About Me and Qualifications in astrologer's profile, mitigating information overload</Text>
            <Text variant="li">Changed menu copy from “Readings” to “Readers", adding clarity</Text>
            <Text variant="li">Designed Messages feature, allowing users to easily contact astrologers </Text>
           </Col>  
          </Row>
          <Row>
            <Col>
              <br />
              <Text>
              The feedback I received from usability testing allowed me to clean up screens, thereby reducing confusion. Based on test results I <b>redesigned 3 screens</b> and <b>12 participants voted on which they preferred</b>.
              </Text>
              <br />
              <Text>
                <b>Below are results for the Home screen.</b>
              </Text>
            </Col>
          </Row>
          <br />
          <Row>
            <h4>Option A: 17% of votes</h4>
            <img src={imgPhoto9} alt="folio" className="img-fluid" />
          </Row>
          <Row>
            <h4>Option B: 83% of votes</h4>
            <img src={imgPhoto10} alt="folio" className="img-fluid" />
          </Row>
          <Row>
            <Col>
              <Text>
                <b>Why Option B? Participants said it's</b>
              </Text>
              <Text variant='li'>Cleaner</Text>
              <Text variant='li'>Easier to navigate</Text>
              <Text variant='li'>More organized</Text>
              <Text variant='li'>Easier on the eyes</Text>
              <Text variant='li'>More consistent</Text>
              <Text variant='li'>Less old-school</Text>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h3>What do my peers think?</h3>
              <Text>Before finalizing designs I participated in <b>design critiques</b>, receiving (and giving) feedback from 5 peers. Below is a single example of <b>feedback I received and how I implemented changes</b>.</Text>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Text><b>Before Changes</b></Text>
              <img src={imgPhoto11} alt="folio" className="img-fluid" />
              <Text><b>After Changes</b></Text>
              <img src={imgPhoto12} alt="folio" className="img-fluid" />
            </Col>
          </Row>
          <Row>
            <Col>
            <h4>Feedback</h4>
            <Text><i>“I think this profile page is very well laid out. One thing that confuses me is the bell and the word 'online' next to it. I can't tell if it's two separate icons or if they are supposed to correspond together.” - L.</i></Text>
             <br />
            <h4>Reasoning</h4>
            <Text>The bell icon for scheduling a reading was confusing without proper context. After further consideration, I realized the user only learns about the bells’ purpose if they click on Rates and Info. This led me to consider adding a third status, ”In Reading”, to indicate the astrologer is online but busy. I considered designing a timer to display how long they'll be occupied but I haven't pursued this yet as it will require additional time to design in a user-friendly, aesthetically pleasing way. </Text>
            </Col>
          </Row>
          <br />
          <Row className="justify-content-center align-items-center">
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Title variant="secSm">
                  06 Document
              </Title>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: .07;
                `}
              >
                I made informed decisions regarding feedback by applying my <b>design system</b>, <b>style guide</b>, and <b>accessibility knowledge</b> to justify declining any proposed changes.
              </Text>
            </Box>
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <Text target="_blank" href="https://www.figma.com/file/49BqqEEEOIOpWnxEugs8eQ/Aspect-Design-System-%26-Style-Sheet?node-id=0%3A1"variant='a'><u><b>You can find the design system and style guide for Aspect by clicking on this link</b></u>.</Text>
            </Box>
          </Row>
           <br />
          <Row className="justify-content-center align-items-center">
            <Box className="pl-lg-4 pt-5 pt-lg-0">
              <img src={imgPhoto16} alt="folio" className="img-fluid" />
              <Title variant="secSm">
                  07 Final Designs and Reflections
              </Title>
                <br />
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
                  line-height: .07;
                `}
              >
                Final iterations took in to account <b>web accessibility best practices</b>, <b>usability heuristics</b>, and the real-life <b>feedback</b> of everyone who helped shape Aspect. I designed a minimum viable product <b>(MVP)</b> with <b>3 distinct features</b> that <b>offers users exactly what they want</b>, <i>all in one convenient app</i>.
              </Text>
              <br />
              <Text>
              As a new product on the market, the KPI <b>(key performance indicator)</b> I would measure is <b>user return rate</b>. It's a relatively easy metric to track and holds invaluable insight. <i>How many users are booking an astrologer through our platform, and how many are returning to book again?</i> If the user experience is poor because of the apps' flow, the user interface, the copy/content, the astrology experts, or any other number of reasons, we may find users do not return.
              </Text>
              <br />
              <Text>
              I believe Aspect is a genuinely <b>profitable business venture</b>. Testing would need to be done on a much larger scale with more participants but I stand behind the idea as an entry point in to this quickly growing industry.
              </Text>
            </Box>
          </Row>
          <Row>
            <Col>
              <br />
              <h3>Next Steps</h3>
              <Text variant='li'>Design a Direct Message feature for user to user connection</Text>
              <Text variant='li'>Design a feature to compare astrologers</Text>
              <Text variant='li'>Design a more robust review feature</Text>
              <Text variant='li'>Develop a strategy for vetting and recruiting astrologers</Text>
              <Text variant='li'>Re-design the Browse feature to include a section on how astrologers are vetted</Text>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default CaseStudy1Body
