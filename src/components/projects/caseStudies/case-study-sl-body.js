import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box, Button } from "../../../components/Core";
import imgPhoto from "../../../assets/image/png/audit1.png";
import imgPhoto1 from "../../../assets/image/png/audit2.png";
import imgPhoto2 from "../../../assets/image/png/landingbefore.png";
import imgPhoto3 from "../../../assets/image/png/landingafter.png";
import imgPhoto4 from "../../../assets/image/png/menteebenefits.png";
import imgPhoto5 from "../../../assets/image/png/safetybefore.png";
import imgPhoto6 from "../../../assets/image/png/safetyafter.png";
import imgPhoto7 from "../../../assets/image/png/programgoalsbefore.png";
import imgPhoto8 from "../../../assets/image/png/programgoalsafter.png";
import imgPhoto9 from "../../../assets/image/png/reasoning.png";
import imgPhoto10 from "../../../assets/image/png/reasoning2.png";
import imgPhoto11 from "../../../assets/image/png/questions.png";
import imgPhoto12 from "../../../assets/image/png/menteeprofile.png";
import imgPhoto13 from "../../../assets/image/png/faqbefore.png";
import imgPhoto14 from "../../../assets/image/png/faqafter.png";
import imgPhoto15 from "../../../assets/image/png/words.png";
import imgPhoto16 from "../../../assets/image/png/mentorsupport.png";
import imgPhoto17 from "../../../assets/image/png/beforechecklist.png";
import imgPhoto18 from "../../../assets/image/png/mentorchecklist.png";
import imgPhoto19 from "../../../assets/image/png/background.png";
import imgPhoto20 from "../../../assets/image/png/wordcloud.png";


const CaseStudy2Body = () => {
  return (
    <>
      <Section className="position-relative">
        <Container>
          <Section hero={true} bg={"dark"} className="px-5">
            <Container className="pb-3">
              <Title color="light" variant="secSm">
                01 Empathize and Define
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
                Content Audit - Voice and Tone
              </Title>
            </Container>
          </Section>
          <Section>
            <Row className="mt-3">
              <div>
                <Title variant="cardBig">Understanding Phase 1 designs</Title>
                <Text className="mb-4">
                    We began our first sprint by auditing Phase 1 designs. Our findings were similiar to those reported by potential mentees: <b>the platform lacked clarity overall</b>.
                </Text>
                  <Row className="mt-5">
                      <Col>
                        <Title variant="card">Increase clarity to build trust</Title>
                        <Text>This screen did not indicate mentors choose mentees back, which may come as a surprise. A potential area where users may lose trust.</Text>
                        <img src={imgPhoto} alt="" className="img-fluid w-100" />
                      </Col>
                      <Col>
                        <Title variant="card">Increase user-control</Title>
                        <Text>It's important to offer choice. What happens next? Do users create a profile, take a quiz, browse mentors? Offer clarity.</Text>
                        <img src={imgPhoto1} alt="" className="img-fluid w-100" />
                      </Col>
                  </Row>
                <Text className="mb-4 mt-4">
                    Following our newly developed Content Style Guide, we wrote our copy to be <b>clear, consistent, inclusive, uplifting, ethical, respectful, approachable, and compassionate</b> (think "<i>Cool Guidance Counselor</i>").
                </Text>
                <Text className="mb-4 mt-4">We used <b>casual</b>, <b>informal language</b> based on our user's age range (18-25 for mentees), their desire for inclusivity, and for overall readability; this included the use of <b>sentence case</b> (aside from proper nouns which we determined would use title case).</Text>
                <Text className="mb-4 mt-4">We <b>never use gendered language</b>, and we use the <b>oxford comma</b> because our client loves it and it offers additional clarity.</Text>
              </div>
            </Row>
            <Row className="pl-4 mt-5 justify-content-center">
          <div className="pt-lg-0">
            <a
              target="_blank"
              rel="noreferrer"
              href={
                "https://jaimelox.com/slvoice/"
              }
            >
              <Button variant={"#7155ff"}>Learn more about our Voice and Tone</Button>
            </a>
          </div>
        </Row>
              <Container>
      </Container>
          </Section>
          <Section hero={true} bg={"dark"} className="px-5">
            <Container className="pb-3">
              <Title color="light" variant="secSm">
                02 Ideate
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
                Clarifying Copy - Reworking Content Hierarchy
              </Title>
            </Container>
          </Section>
          <Section>
            <Row className='mt-2'>
              <div>
                <Title variant="cardBig">Clarifying purpose, cost, and location upfront</Title>
              </div>
            </Row>
            <Row className='mt-5'>
                <Col>
                  <Title variant="card">Before</Title>
                  <Text className="mb-4 mt-4">The copy was vague and unclear:<br /><i>"Wherever you are on your journey, a mentor can help you take the next step."</i></Text>
                  <img src={imgPhoto2} alt="" className="img-fluid w-100" />
                </Col>
                <Col>
                  <Title variant="card">After</Title>
                  <Text className="mb-4 mt-4"><i>"A free, online mentorship program that matches LGBTQIA+ young adults with mentors in the queer community."</i></Text>
                  <img src={imgPhoto3} alt="" className="img-fluid w-100" />
                </Col>
                <Text className="mb-5 mt-4">It was important to use <i>young adults</i> in the copy to further clarify who the platform is for and distinguish a separation from Sean's Legacy's non-profit mission. Adding upfront that mentorship is virtual, free, and specifically for the LGBTQIA+ community helps build trust from the start.</Text>
            </Row>
            <Row className='mt-4'>
              <div>
                  <Title variant="cardBig">Why should I sign up for the Sean's Legacy Mentorship Program?</Title>
                  <Text className="mb-4 mt-4">Originally located on the About page, we recommended changing the content hierarchy and moving this information to the landing page. As the landing page had <b>no clear value proposition</b>, we ideated on how a potential mentee might feel and what questions they might be asking. Privacy was important to users based on prior research, and we added copy to show mentees we understand their concerns and take them seriously.</Text>
                  <img src={imgPhoto4} alt="" className="img-fluid w-100" />
              </div>
              <div>
                  <Text className="mb-4 mt-4">Before handing off suggestions to the Design team, we reworked content in a dedicated UXW Copy Iterating Figma file. Here you can see my recommendations, which were iterated upon in the final version.</Text>
                  <img src={imgPhoto9} alt="" className="img-fluid w-100" />
              </div>
            </Row>
            <Row className='mt-5'>
                  <Title variant="cardBig">Clarifying jargon, increasing understanding, building trust</Title>
                  <Text className="mb-4 mt-4 w-100">One <b>major area of confusion</b> during Phase 1 usability testing was <b>around the phrase <i>Whisper Technology</i></b>. The designer I worked with on this page was unsure if our client wanted to keep that specific phrasing, so I reached out to Sean's Legacy's internal content team to inquire. With their input we crafted new copy, changing <i>Whisper technology</i> to <i>Customizable privacy settings</i>, and changing <i>DM's</i> to <i>messaging feature</i> for increased understanding.
                  <br /> 
                  <br /> Through our initial audit we realized all copy could be edited for concision and further clarity. <b>Only mentors complete a background check</b>, and <b>this title read as though mentees must also undergo a background check.</b></Text>
                <Col>
                  <Title variant="card">Before</Title>
                  <img src={imgPhoto5} alt="" className="img-fluid w-100" />
                </Col>
                <Col>
                  <Title variant="card">After</Title>
                  <img src={imgPhoto6} alt="" className="img-fluid w-100" />
                </Col>
            </Row>
            <Row className='mt-5'>
                <div>
                  <Text className="mb-4 mt-4"><i>Safe end-to-end encrypted chats</i> was simplified to <i>Secure communications</i>, with the meaning of "end-to-end encrypted chats" clearly explained in the copy. The <i>Mentee verification</i> title and copy were added when our client decided to move forward with 2-factor authorization in order to increase safety.</Text>
                </div>
            </Row>
            <Row className='mt-5'>
                  <Title variant="cardBig">Balancing needs of our client and our users</Title>
                  <Text className="mb-4 mt-4 w-100">Our client was keen to showcase the goals of their mentorship program but <b>current designs were lacking transparency</b>. We wanted to ensure potential users would understand what the platform was for so we sharpened the copy.
                  </Text>
                <Col>
                  <Title variant="card">Before</Title>
                  <Text className="mb-4 mt-4 w-100">The content was unclear and difficult to read, causing concerns it would be skipped over.</Text>
                  <img src={imgPhoto7} alt="" className="img-fluid w-100" />
                </Col>
                <Col>
                  <Title variant="card">After</Title>
                  <Text className="mb-4 mt-4 w-100">We improved readability by editting copy for concision. Headers were created to make scanning easier.</Text>
                  <img src={imgPhoto8} alt="" className="img-fluid w-100" />
                </Col>
                <div>
                  <Text className="mb-4 mt-4">Here you can see my recommendations and the iterations this content went through. <b>Because users wanted increased personalization</b>, we <b>wrote copy in the first person</b>, using "you" instead of "they" or "mentees".</Text>
                  <img src={imgPhoto10} alt="" className="img-fluid w-100" />
              </div>
            </Row>
            <Row className='mt-5'>
                  <Title variant="cardBig">Offering guidance and personal autonomy</Title>
                  <Text className="mb-4 mt-4 w-100">Researchers from Phase 1 suggested <b>pre-filled examples </b>for write-in text fields as well as more <b>specific writing prompts</b>. As this is an area where users may drop off due to uncertainty, confusion, or even annoyance, we knew it was important to offer guidance.
                    <br />
                    <br />
                    Initial Phase 2 user interview findings seemed to indicate some mentors specifically used the word <i>story</i> when referring to learning more about their mentee. We <b>hypothesized utilizing the word <i>story</i></b> would be <b>easily understandable and speak directly to our users in their own words</b> (you will find moderated usability test results around this in the 03 Testing section).</Text>
                <Col>
                  <Title variant="card">Guided prompts to help users complete their profile</Title>
                  <Text className="mb-4 mt-4 w-100">We broke down the questions in to bite-sized sections and combined responses into the <i>About</i> section.</Text>
                  <img src={imgPhoto11} alt="" className="img-fluid w-100" />
                </Col>
                <Col>
                  <Title variant="card">Offering choice, guidance, and inclusivity</Title>
                  <Text className="mb-4 mt-4 w-100">Both Mentees and Mentors have the option to share their info, increasing privacy and autonomy.</Text>
                  <img src={imgPhoto12} alt="" className="img-fluid w-100" />
                </Col>
            </Row>
            <Row className='mt-5'>
                  <Title variant="cardBig">Speaking to Mentors in their own words</Title>
                  <Text className="mt-4 w-100">Just as we did with the word <i>story</i>, we <b>included numerous words and terms that potential mentors used</b> during interviews and moderated usability testing. I met with the UX Research team to go over their findings and share keywords I was seeing from their initial insights. Their team confirmed I was on the right track and helped add a couple more:</Text>
                  <Text className="mb-4 mt-4 w-100">
                        <Text variant="li">Connection</Text>
                        <Text variant="li">Community</Text>
                        <Text variant="li">Growth</Text>
                        <Text variant="li">Giving back / Impact</Text>
                        <Text variant="li">Resources / Support</Text>
                        <Text variant="li">Shared experiences</Text>
                        <Text variant="li">Imposter syndrome / addressing challenges</Text>
                  </Text>
                    <img src={imgPhoto15} alt="" className="img-fluid w-100 mt-4" />
            </Row>
            <Row className='mt-5'>
                  <Title variant="cardBig">Reworking content hierarchy and addressing Mentor concerns</Title>
                  <Text className="mb-4 mt-4 w-100">
                    Prior to Phase 2 usability testing, and in conjunction with the 2nd Design team, we reimagined the landing page hierarchy and iterated upon an initial FAQ section.
                    <br />
                    We utilized <i>giving back</i> and <i>community</i> in the copy in an effort to speak to mentors directly and <b>crafted questions based on themes from Phase 2 user interviews</b>.
                  </Text>
                <Col>
                  <Title variant="card">Before</Title>
                  <Text className="mb-4 mt-4 w-100">With input from Design 2 and Research, we removed questions regarding how mentors are supported and instead dedicated an entire section to the topic.</Text>
                  <img src={imgPhoto13} alt="" className="img-fluid w-100" />
                </Col>
                <Col>
                  <Title variant="card">After</Title>
                  <Text className="mb-4 mt-4 w-100">Research indicated themes of <b>imposter syndrome</b> and I wrote compassionate body copy around supporting mentees.</Text>
                  <img src={imgPhoto14} alt="" className="img-fluid w-100" />
                </Col>
                <Text className="mb-4 mt-4 w-100">The Research team suggested a question around ending mentorship. While our team supported adding this Q, we wondered if it might be better suited within the platform's internal <i>Resource</i> section, and not on the landing page. 
                      However, Research indicated potential mentors named this as an area of concern and therefore we chose to move forward with including it here.</Text>
            </Row>
            <Row className='mt-4'>
                  <Title variant="cardBig">Addressing Mentor desires for community, resources, and privacy</Title>
                  <Text className="mt-4 w-100">With the question around mentorship support removed from the FAQ, we focused our efforts on crafting copy for an entire mentor support section. Sean's Legacy's <b><i>Master's of Public Health</i> interns are creating a comprehensive onboarding kit</b>, and <b>our client wanted this reflected within the copy</b>.
                  <br />
                  Potential mentors indicated a desire for community support and resources in general, and we included these needs using <b>uplifting</b>, <b>compassionate language</b>.
                  </Text>
                    <img src={imgPhoto16} alt="" className="img-fluid w-100 mt-4" />
            </Row>
            <Row className='mt-5'>
                  <Title variant="cardBig">Promoting safety through transparency and consistency</Title>
                  <Text className="mb-4 mt-4 w-100">
                     Because safety and privacy matter to both potential users and to Sean's Legacy, mentors are required to pass a background check. Needing to <b>convey the importance of completing the background check quickly</b>, the content hierarchy lists this step first and is supported in the body copy throughout the page.
                  </Text>
                <Col>
                  <Title variant="card">Before</Title>
                  <img src={imgPhoto17} alt="" className="img-fluid w-100" />
                </Col>
                <Col>
                  <Text className="mb-4 mt-4 w-100">Profile copy on both mentee and mentor sides of the platform initially read as <i>Fill out</i>. This was <b>standardized</b> to <i>Complete</i> <b>for clarity and consistency</b>, as we use the term <i>Complete</i> in numerous locations througout the platform.
                  <br />
                  To <b>increase transparency</b> that mentors need to both read and sign the privacy agreement, <i>sign</i> was added to the copy. Adding <i>sign</i> also increases clarity.
                  </Text>
                </Col>
                <div>
                  <Title variant="card">After</Title>
                  <Text>Following our voice and tone guidelines, copy was written to be <b>uplifting</b>, <b>ethical</b>, and <b>respectful</b>.</Text>
                  <Text className="mb-4 mt-4 w-100"></Text>
                  <img src={imgPhoto18} alt="" className="img-fluid w-100" />
                </div>
            </Row>
            <Row className="mb-4 mt-5 w-100">
                <Title variant="cardBig">What information is required for a background check?</Title>
                <Text className="mb-4 mt-4 w-100">Research showed mentors expect and are used to background checks. In conjunction with the 2nd Design team, <b>we worked on making the background check process as clear and easy as possible</b>.
                <br />Unsure of what exactly Sean's Legacy would be checking for, I reached out to our client for requirements: Social Security number, address history, and a form of payment were all needed. We wrote concise body copy to help mentor's understand why we are asking for this information.
                </Text>
                <img src={imgPhoto19} alt="" className="img-fluid w-100" />
            </Row>
          </Section>
          <Section hero={true} bg={"dark"}>
            <Container className="pb-3">
              <Title color="light" variant="secSm">
                03 Test
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
              > Unmoderated Feedback - Moderated Usability Findings
              </Title>
            </Container>
          </Section>
          <Section>
            <Row className='mt-4'>
                  <Text className="w-100"><b>All testing for Phase 2 was done on the mentor side of the platform</b>. <i>All testing results are from our Phase 2 Research team and are not my own</i>. I have included select information to focus solely on content. Phase 2 wrapped up shortly after moderated usability testing was completed and therefore <b>our team was unable to directly address findings</b>. We left reccomendations in our handoff documentation for Phase 3.</Text>
                  <Title className="mb-4 mt-4" variant="cardBig">What do potential mentors think of the platform?</Title>
                  <div>
                  <Title className="mb-4 mt-4" variant="card">Unmoderated research goals and findings</Title>
                  <Text className="mb-4 mt-4">Understand first impressions, pain points, and overall user experience of the mentor flow.</Text>

                </div> 
            </Row>
            <Row className='mt-4'>
                <Col>
                  <img src={imgPhoto20} alt="" className="img-fluid w-100" />
                </Col>
                <Col>
                  <Title variant="cardSm">Mentor landing page</Title>
                  <Text variant='li' className="mb-4 mt-4">Users found the mentor landing page <b>informative</b>, <b>friendly</b>, <b>clear</b>, <b>easy</b> to sign up, and <b>not too distracting</b>.</Text>
                  <Title variant="cardSm">Mentor sign-up and profile creation</Title>
                  <Text variant='li' className="mb-4 mt-4">Regarding their experience of registering for an account, <b>9 out of 14 (62%) participants felt it was very easy</b>.</Text>
                  <Text variant='li' className="mb-4 mt-4">Regarding their experience of profile completion, <b>10 out of 14 (71%) participants felt it was very easy</b>.</Text>
                  <Title variant="cardSm">Overall mentor flow</Title>
                  <Text variant='li' className="mb-4 mt-4">Users mostly found the mentor flow to be <b>easy</b>, <b>simple</b>, and <b>clear</b>.</Text>
                </Col>
            </Row>
            <Row className='mt-4'>
                  <div>
                  <Title variant="card">Moderated research goal and findings</Title>
                  <Text className="mb-4 mt-4">Assess the <b>impact of copy and word choices on usability</b>, with special attention to areas that may have an emotional impact.</Text>
                  <Title variant="cardBig">Confusing copy</Title>
                  <Text className="mb-4 mt-4">You may recall our hypothesis that using the word <i>story</i> ("<i>Where does your story begin?</i> ") would speak to users in their own words. Research found <b>3 out of 6</b> potential mentors <b>found this phrasing confusing</b>. The Phase 3 Content team will need to address this finding and rewrite copy.</Text>
                  <Title variant="cardBig">Unclear directions</Title>
                  <Text className="mb-4 mt-4">Completing a background check as soon as possible is important, however <b>3 out of 6</b> mentors <b>wouldn't choose to complete their background check first</b>. The phase 3 Content team will need to further stress the importance of this step for mentors.</Text>
                  <Title variant="cardBig">More information needed</Title>
                  <Text className="mb-4 mt-4"><b>4 out of 6</b> mentors wanted to know <b>what data would be checked</b> and <b>what would make them ineligible to be a mentor</b>. I was not surprised by these findings as we too were unclear on the totality of the background check process. The phase 3 Content team will need to work with our client on specifics for this process.</Text>
                  
                </div> 
            </Row>
        
          </Section>
          <Section hero={true} bg={"dark"}>
            <Container className="pb-3">
              <Title color="light" variant="secSm">
                04 Retro
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
                Challenges - What I Learned
              </Title>
            </Container>
          </Section>
          <Section>
            <Container>
            <Row className='mt-5'>
                <div>
                  <Title variant="cardBig">Consistency requires cross-functional collaboration</Title>
                  <Text className="mb-4 mt-4">In order to maintain consistency throughout designs, it's important to work with all team members. Occasionally an update to copy would be missed by one of our Design teams during Development handoff. This resulted in outdated copy being included on both final Phase 2 prototypes and in the actual build.</Text>
                  
                </div>
              </Row>
              <Row className='mt-5'>
                <div>
                  <Title variant="cardBig">UX writers should be embedded within design teams</Title>
                  <Text className="mb-4 mt-4"> At times it was difficult to write copy or develop content because our team didn't have as clear of an understanding of specific flows, constraints, and design decisions as the designers did. Our team had a Content representative present during most Design Working Sessions, which helped greately as requirements changed throughout the project. We were able to collaborate and offer guidance in real time, which was especially helpful as the Phase 2 team as a whole was global and often needed to work asynchronously.</Text>
                  
                </div>
              </Row>
              <Row className='mt-5'>
                <div>
                  <Title variant="cardBig">Encouraging pushback is key</Title>
                  <Text className="mb-4 mt-4">As this project had 2 design teams totaling 14 people, we encountered pushback on various decisions. I was often able to articulate my reasoning, but many times a designer had a legitimate point or concern, so we often compromised on design decisions. I encouraged pushback because it's how we all learn and grow. This helped our team come up with standards and have them stress-tested, ultimately making designs more inclusive and accessible.</Text>
                  
                </div>
              </Row>
              <Row className='mt-5'>
                <div>
                <Title variant="cardBig">Clarification is everything</Title>
                  <Text className="mb-4 mt-4">Clarity was the overall theme of this experience for me; from not having enough of it, to doing my best to develop it in designs and in my own communications. Clarifying the platform's safety features was a top priority for good reason as safety isn't something we can simply create or design. Making it clear to our users that their privacy and safety are #1, and that they have full control over what they share increases transparency and builds trust.</Text>

                </div>
              </Row>
            </Container>
          </Section>
        </Container>
      </Section>
    </>
  );
};

export default CaseStudy2Body;
