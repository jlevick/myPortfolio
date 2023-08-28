import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useWindowSize } from "../../../hooks";
import { breakpoints } from "../../../utils";
import imgPhoto1 from '../../../assets/image/png/aspect_piechart.png'
import imgPhoto2 from '../../../assets/image/png/vanessa.png'
import imgPhoto3 from '../../../assets/image/png/hannah.png'
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
import imgPhoto16 from '../../../assets/image/png/colors.png'
import imgPhoto17 from '../../../assets/image/png/ui_nav.png'
import imgPhoto18 from '../../../assets/image/png/ui_select.png'


import {
  Title,
  Section,
  Box,
  Text,
} from '../../../components/Core'

const CaseStudy1Body = () => {

  const ImageDynamic = (photo) => {
    const size = useWindowSize();
console.log(size, breakpoints.md)
    return size.width < breakpoints.md ? (
      <div className="w-100">
        <img src={photo} alt="folio" className="img-fluid" />
      </div>
    ) : (
      <div className="w-50">
        <img src={photo} alt="folio" className="img-fluid" />
      </div>
    );
  }

  return (
    <>
      {/* <!-- 01 Discover --> */}
      <Section className="position-relative">
        <Container>
          <Section hero={true} bg={"dark"} className="mt-4 px-5">
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
          <Col className="justify-content-center align-items-center pt-5">
            <Row>
              <Box>
                <Title variant="cardBig" className="mb-4">
                  The mystical services industry
                  is worth $2.2 billion {" "}
                </Title>
                <Text
                  className="mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  And this number is growing. It's no wonder, as astrology offers guidance and support in these increasingly stressful times.
                  <br /> 
                  To develop a useful, sought-after product, exploratory research began with competetive
                  analyses. 2 popular astro-related apps were considered top contenders: Sanctuary Astrology
                  and Kasamba.
                </Text>
              </Box>
            </Row>
            <Row>
              <Text className="mb-4">
                Sanctuary offers instant access to astrologers, and their
                marketing strategy and social media presence make them Aspect's
                top direct competitor.
                <br />
                <br />
                Kasamba also offers live astrology readings and has been in
                business for decades, suggesting an extensive client base.
              </Text>
            </Row>
            <Row className="justify-content-center align-items-center py-5">
              <Col>
                <Title variant="cardBig" className="mb-4">
                  Top 3 market gaps to fill
                </Title>
                <Title
                  variant="card"
                  mb="2.5rem"
                  fontSize="1rem"
                  css={`
                    letter-spacing: 1.63px;
                  `}
                >
                  Based on S.W.O.T analyses of Sanctuary Astrology and Kasamba
                </Title>
                <Title variant="cardSm">Pricing</Title>
                <Text variant="li">
                  We need to offer upfront, transparent pricing
                </Text>
                <br />
                <Title variant="cardSm">Qualifications</Title>
                <Text variant="li">
                  We need to attract qualified astrologers and relay their
                  qualifications
                </Text>
                <br />
                <Title variant="cardSm">Reviews</Title>
                <Text variant="li">
                  We need to make it easy to find user reviews
                </Text>
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
              {ImageDynamic(imgPhoto1)}
            </Row>
            <Row className="py-5">
              <Col>
                <Title variant="cardBig" className="mb-4">
                  Most important criteria when seeking an astrologer
                </Title>
                <ul type="circle" className="pl-4">
                  <Text variant="li">Verified expertise (63.6%)</Text>
                  <Text variant="li">Astrologer's background (63.6%)</Text>
                  <Text variant="li">Client reviews (45.5%)</Text>
                </ul>
                <Row>
                  <Col>
                    <Title variant="cardBig" className="mb-4">
                      People don't book astrology readings because they are
                    </Title>
                    <ul type="circle" className="pl-4 pb-4">
                      <Text variant="li">
                        Unsure of astrologer's credibility (64.7%)
                      </Text>
                      <Text variant="li">Unsure whom to book with (64.7%)</Text>
                    </ul>
                    <Text>
                      The survey was followed up with user interviews with 4
                      self identified astro-enthusiasts. The goal of interviews
                      was to gain a deeper understanding of people's motivations
                      for following astrology, their experiences working with
                      astrologers, and their expectations of astrological
                      content.
                    </Text>
                  </Col>
                </Row>
                <Row className="pt-5">
                  <Col className="justify-content-center align-items-center">
                    <Title variant="cardBig" className="mb-4">
                      User interview key findings
                    </Title>
                    <ul type="circle" className="pl-4">
                      <Text variant="li">
                        Users engage with astrology for fun, connection, and
                        self knowledge
                      </Text>
                      <Text variant="li">
                        Users won't book readings if they aren't certain the
                        astrologer is trustworthy
                      </Text>
                      <Text variant="li">
                        No single astrology resource provides all the
                        information users need
                      </Text>
                    </ul>
                  </Col>
                </Row>
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
                className="mt-5 mb-5"
                css={`
                  line-height: 0.07;
                `}
              >
                The interviews surprised me and indicated users are seeking more
                than just access to reputable astrologers. Based on these
                findings I crafted a problem statement and initial hypothesis.
              </Text>
            </Box>
            <Box>
              <Title variant="cardBig" className="mt-4 mb-4">
                Problem statement
              </Title>
              <Text className="mb-4">
                <b>
                  Users need a convenient platform where they can easily find
                  qualified astrologers, connect with other astrology
                  enthusiasts, and learn about themselves through their own
                  unique birth chart.
                </b>
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
              <Title variant="cardSm">Hypothesis</Title>
              <Text
                className="mt-4 mb-4"
                css={`
                  line-height: 0.07;
                `}
              >
                If we focus on offering access to inclusive astrology experts,
                user-astrologer compatibility, upfront costs and reviews,
                personalized astrology content, and creating a supportive
                community space, we will be well positioned to break in to the
                market with a product unlike any other.
              </Text>
              <Title className="mt-4 mb-4" variant="cardBig">
                User personas and user flows
              </Title>
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: 0.07;
                `}
              >
                To identify themes and parse out insights, I created an affinity
                map, and 2 distinct personas emerged. User flows followed and
                helped plan which features and screens were necessary for a user
                to complete a given task.
              </Text>
              <Row className="justify-content-center align-items-center">
                {ImageDynamic(imgPhoto2)}
              </Row>
              <Row className="justify-content-center align-items-center py-5">
                {ImageDynamic(imgPhoto3)}
              </Row>
            </Box>
          </Row>
          <Row className="justify-content-center align-items-center">
            <div className="pb-5">
              <Title variant="cardBig" className="mb-4">
                The culmination resulted in 3 main app features
              </Title>
              <ul type="circle" className="pl-4">
                <Text variant="li">
                  A way for Hannah to find an astrologer who fits their needs{" "}
                  <b>(Browse and Chat)</b>
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
          {/* <!-- 03 Ideate --> */}
          <Row className="justify-content-center align-items-center">
            <Box>
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
                className="mt-5"
                css={`
                  line-height: 0.07;
                `}
              >
                With a clear understanding of target users and required screens,
                I used a hybrid card sort to create Aspect's site map; I wanted
                to offer the structure of defined categories so participants
                wouldn't abandon the study, while leaving room for their mental
                models to shine.
              </Text>
              <br />
              <Text>
                I created low-fidelity wireframes using pen and paper, including
                copy to provide context to the designs. After refining my ideas,
                I moved on to designing in Figma.
              </Text>
              <Row className="justify-content-center align-items-center py-5">
                <Title variant="cardSm">
                  Here is an example of the iterative process for one of
                  Aspect's main features, <i>Browse Astrologers</i>.
                </Title>
                {ImageDynamic(imgPhoto6)}
              </Row>
            </Box>
          </Row>
          {/* <!-- 04 Prototype --> */}
          <Row className="justify-content-center align-items-center">
            <Box className="pl-lg-4 pt-5">
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
                className="mt-5 mb-5"
                css={`
                  line-height: 0.07;
                `}
              >
                I began my prototyping process with my final paper sketches as I
                was still learning Figma. In hindsight I created a lot of extra
                work for myself and likely wouldn't do this again, but it's a
                nice keepsake and inspired confidence moving forward.
              </Text>
            </Box>
            <Box className="pt-4 pb-5">
              <Text
                target="_blank"
                href="https://www.figma.com/proto/W2qPXH6fRc4VrBPhPlc93i/Aspect-v11?node-id=1334%3A7185&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1330%3A7221"
                variant="a"
              >
                <u>
                  <b>Check out the final prototype for Aspect</b>
                </u>
                .
              </Text>
            </Box>
            <Row className="justify-content-center align-items-center py-5">
              {ImageDynamic(imgPhoto7)}
            </Row>
          </Row>
          {/* <!-- 05 Test --> */}
          <Row className="justify-content-center align-items-center pl-2">
            <Box className="py-5">
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
              <Row className="justify-content-center align-items-center pt-3">
                <div className="pl-3">
                  <Text className="mb-4 mt-4">
                    The goal of usability testing was to measure for usability
                    errors. Moderated remote testing was used for all 6
                    usability tests. Participants were given 4 tasks to
                    complete.
                  </Text>
                </div>
                <Text
                  target="_blank"
                  href="https://docs.google.com/spreadsheets/d/16Wbg4Y7sKAnkJnRXY7GUK7j14-K5hmfOPl9W45BOxCs/edit"
                  variant="a"
                >
                  <u>
                    <b>Check out usability testing results</b>
                  </u>
                </Text>
              </Row>
            </Box>
            <Box>
              <Title variant="cardSm">Task scenario example</Title>
              <Text className="mb-4 mt-4">
                <i>
                  "You've registered for the app and can now see if there are
                  any astrologers you might be interested in connecting with.
                  How would you go about finding someone and connecting with
                  them? Please show me."
                </i>
              </Text>
            </Box>
          </Row>
          <Row className="justify-content-center align-items-center py-2">
            {ImageDynamic(imgPhoto8)}
          </Row>
          <Row className="justify-content-center align-items-center">
            <Title variant="cardSm">Notes from usability test sessions.</Title>
          </Row>
          <Row className="justify-content-center align-items-center pl-2">
            <Col>
              <br />
              <br />
              <Title variant="cardBig">Usability test key findings</Title>
              <br />
              <Title variant={"cardSm"}>Information overload</Title>
              <Text variant="li">Astrologer's profile is too busy</Text>
              <Text variant="li">
                3 out of 6 experienced information overload on astrologer's
                profile, and 2 participants wanted more drop down content
              </Text>
              <br />
              <Title variant={"cardSm"}>Confusing copy</Title>
              <Text variant="li">"Readings" copy in menu is confusing</Text>
              <Text variant="li">
                3 out of 6 expressed confusion with the term “Readings”,
                thinking it was their past chart readings and not where to find
                astrologers
              </Text>
              <br />
              <Title variant={"cardSm"}>Expectations</Title>
              <Text variant="li">
                Users expect option to contact astrologer prior to booking
              </Text>
              <Text variant="li">
                3 out of 6 want to reach out to an astrologer before committing
                to a reading in order to feel assurance
              </Text>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center py-4 pl-2">
            <Col>
              <Title variant={"cardBig"} className="mb-4">
                Implemented changes
              </Title>
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
          <Row className="pl-2">
            <Col>
              <Text className="justify-content-center align-items-center py-4">
                The feedback I received from usability testing allowed me to
                clean up screens, thereby reducing confusion. Based on test
                results I redesigned 3 screens and 20 participants voted on which
                they preferred.
                .
              </Text>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center py-5 pl-2">
            <Col>
              <div>
                <Title variant={"cardLg"}>Option A: 17% of votes</Title>
                <Box
                  className="d-flex justify-content-center align-items-center w-100">
                  <img src={imgPhoto9} alt="" className="img-fluid" />
                </Box>
              </div>
            </Col>
            <Col>
              <div>
              <Title variant={"cardLg"}>Option B: 83% of votes</Title>
                <Box
                  className="d-flex justify-content-center align-items-center w-100">
                  <img src={imgPhoto10} alt="" className="img-fluid" />
                </Box>
              </div>
            </Col>
          </Row>
          <Row className="pl-2">
            <Col>
              <Title variant="cardSm">
                <b>Why option B? Participants said it's</b>
              </Title>
              <Text variant="li">Cleaner</Text>
              <Text variant="li">Easier to navigate</Text>
              <Text variant="li">More organized</Text>
              <Text variant="li">Easier on the eyes</Text>
              <Text variant="li">More consistent</Text>
              <Text variant="li">Less old-school</Text>
            </Col>
          </Row>
          <br />
          <Row className="pl-2">
            <Col>
              <Title variant={"cardLg"} className="mb-4">
                What do my peers think?
              </Title>
              <Text>
                Before finalizing designs I participated in{" "}
                <b>design critiques</b>, receiving (and giving) feedback from 5
                peers. Below is a single example of{" "}
                <b>feedback I received and how I implemented changes</b>.
              </Text>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center py-5 pl-2">
            <Col>
              <div>
                  <Title variant={"cardLg"}>Before</Title>
                <Box
                  className="d-flex justify-content-center align-items-center w-100">
                  <img src={imgPhoto11} alt="" className="img-fluid" />
                </Box>
              </div>
            </Col>
            <Col>
              <div>
                  <Title variant={"cardLg"}>After</Title>
                  <Box
                    className="d-flex justify-content-center align-items-center w-100">
                    <img src={imgPhoto12} alt="" className="img-fluid" />
                  </Box>
              </div>
            </Col>
          </Row>
          <Row className="pl-2">
            <Col>
              <Title variant={"cardSm"}>Feedback</Title>
              <Text>
                <i>
                  “I think this profile page is very well laid out. One thing
                  that confuses me is the bell and the word 'online' next to it.
                  I can't tell if it's two separate icons or if they are
                  supposed to correspond together.” - L.
                </i>
              </Text>
              <br />
              <Title variant={"cardSm"}>Reasoning</Title>
              <Text className="mb-5">
                The bell icon for scheduling a reading was confusing without
                context. I realized the user only learns about the bells’ purpose if they click on <i>Rates and Info</i>.
                This led me to consider adding a third status, <i>"In Reading"</i>, to indicate the astrologer is online but busy. I
                considered designing a timer to display how long they'll be
                occupied but haven't pursued this as it will require
                additional time to design in a user-friendly, aesthetically
                pleasing way.{" "}
              </Text>
            </Col>
          </Row>
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
                className="mt-5 mb-5"
                css={`
                  line-height: 0.07;
                `}
              >
                I made informed decisions regarding feedback by applying my{" "}
                design system, style guide, and accessibility knowledge to
                justify declining or accepting any proposed changes.
              </Text>
            </Box>
            <Box mb="82px" className="pl-lg-4 pt-5 pt-lg-0">
              <Text
                target="_blank"
                href="https://www.figma.com/file/49BqqEEEOIOpWnxEugs8eQ/Aspect-Design-System-%26-Style-Sheet?node-id=0%3A1"
                variant="a"
              >
                <u>
                  <b>Check out the design system and style guide for Aspect</b>
                </u>
              </Text>
              <div>
                      <Box
                        className="d-flex justify-content-center align-items-center w-50 my-5">
                        <img src={imgPhoto16} alt="" className="img-fluid" />
                    </Box>
                </div>
                <div>
                    <Title variant={"cardLg"}>Navigation</Title>
                      <Box
                        className="d-flex justify-content-center align-items-center w-75">
                        <img src={imgPhoto17} alt="" className="img-fluid" />
                    </Box>
                </div>
                <div>
                    <Title variant={"cardLg"}>Selectors</Title>
                      <Box
                        className="d-flex justify-content-center align-items-center w-75">
                        <img src={imgPhoto18} alt="" className="img-fluid" />
                    </Box>
                </div>
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
              <Text
                className="mt-4 mb-5"
                css={`
                  line-height: 0.07;
                `}
              >
                Final iterations took in to account web accessibility best
                practices, usability heuristics, and the real-life feedback of
                everyone who helped shape Aspect. I designed a minimum viable
                product with 3 distinct features that{" "}
                <b>offers users exactly what they want</b>,{" "}
                <i>all in one convenient app</i>.
              </Text>
              <Row className="justify-content-center align-items-center">
                <Col>
                  <div>
                      <Title variant={"cardLg"}>Browse and chat with an astrologer</Title>
                    <Box
                      className="d-flex justify-content-center align-items-center w-100">
                      <img src={imgPhoto13} alt="" className="img-fluid" />
                    </Box>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center align-items-center">
                <Col>
                  <div>
                      <Title variant={"cardLg"}>My chart</Title>
                      <Box
                        className="d-flex justify-content-center align-items-center w-100">
                        <img src={imgPhoto14} alt="" className="img-fluid" />
                    </Box>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center align-items-center py-5">
                <Col>
                  <div>
                        <Title variant={"cardLg"}>Community chat</Title>
                      <Box
                        className="d-flex justify-content-center align-items-center w-100">
                        <img src={imgPhoto15} alt="" className="img-fluid" />
                      </Box>
                  </div>
                </Col>
              </Row>
              <Row className="mb-4">
                <Text>
                  As a new product on the market, the KPI (key performance
                  indicator) I would measure is <b>user return rate</b>, a
                  relatively easy metric to track that holds invaluable insight.{" "}
                  <i>
                    How many users are booking an astrologer through our
                    platform, and how many are returning to book again?
                  </i>{" "}
                  If the user experience is poor because of the apps' flow, the
                  user interface, the copy/content, the astrology experts, or
                  any other number of reasons, we may find users do not return.
                </Text>
              </Row>
              <Row className="mb-4">
                <Text>
                  I believe Aspect is a genuinely profitable business venture.
                  Testing would need to be done on a much larger scale with more
                  participants but I stand behind the idea as an entry point in
                  to this quickly growing industry.
                </Text>
              </Row>
            </Box>
          </Row>
          <Row>
            <Col>
              <br />
              <Title variant="cardBig" className="mb-4">
                Next steps
              </Title>
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
