import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box, Button } from "../../../components/Core";
import imgPhoto from "../../../assets/image/png/audit1.png";
import imgPhoto1 from "../../../assets/image/png/audit2.png";
import imgPhoto2 from "../../../assets/image/png/landingbefore.png";
import imgPhoto3 from "../../../assets/image/png/landingafter.png";
import imgPhoto4 from "../../../assets/image/png/menteebenefits.png";
import imgPhoto7 from "../../../assets/image/png/programgoalsbefore.png";
import imgPhoto8 from "../../../assets/image/png/programgoalsafter.png";
import imgPhoto9 from "../../../assets/image/png/reasoning.png";
import imgPhoto10 from "../../../assets/image/png/reasoning2.png";
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
                <Title variant="cardBig">Understanding existing designs</Title>
                <Text className="mb-5 mt-4">
                    Our audit findings reflected those reported by mentees: <b>the platform lacked clarity overall</b>.
                </Text>
                  <Row className="mt-5">
                      <Col>
                        <Title variant="card">Increase clarity to build trust</Title>
                        <Text>There is no indication mentors choose mentees back, which may come as a surprise and a potential area where mentee's may lose trust.</Text>
                        <img src={imgPhoto} alt="" className="img-fluid w-100" />
                      </Col>
                      <Col>
                        <Title variant="card">Increase user-control</Title>
                        <Text>It's important to offer choice. What happens next? Do users create a profile, take a quiz, browse mentors? Let's tell them.</Text>
                        <img src={imgPhoto1} alt="" className="img-fluid w-100" />
                      </Col>
                  </Row>
                <Text className="mb-4 mt-4">
                    Following our newly developed Content Style Guide, copy was written to be <b>clear, consistent, inclusive, uplifting, ethical, respectful, approachable, and compassionate</b> (think "<i>Cool Guidance Counselor</i>").
                </Text>
                <Text className="mb-4 mt-4"><b>Casual</b>, <b>informal language</b> was used based on mentee's age range (18-25), their desire for inclusivity, and for overall readability; this included the use of <b>sentence case</b> (aside from proper nouns which we determined would use title case).</Text>
                <Text className="mb-4 mt-4">We <b>never use gendered language</b>, and always use the <b>oxford comma</b> because our client loves it and it offers additional clarity.</Text>
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
                  <Text className="mb-4 mt-4">Originally located on the About page, we recommended changing the content hierarchy and moving this information to the first screen a user sees, the landing page. As the landing page had <b>no clear value proposition</b>, we ideated on how a potential mentee might feel and what questions they might be asking.</Text>
                  <Text className="mb-4 mt-4"> Privacy is important to users based on prior research, and we added copy to show mentees we understand their concerns and take them seriously.</Text>
                  <img src={imgPhoto4} alt="" className="img-fluid w-100" />
              </div>
              <div>
                  <Text className="mb-4 mt-4">Before handing off suggestions to the Design team, we reworked content in a dedicated UXW Copy Iterating Figma file. Here you can see my recommendations, which were iterated upon in the final version.</Text>
                  <img src={imgPhoto9} alt="" className="img-fluid w-100" />
              </div>
            </Row>
            <Row className='mt-5'>
                  <Title variant="cardBig">Balancing needs of our client and our users</Title>
                  <Text className="mb-4 mt-4 w-100">Our client was keen to showcase the goals of their mentorship program but <b>current designs were lacking transparency</b>. We wanted to ensure potential users would understand what the platform was for so we sharpened the copy.
                  </Text>
                <Col className='mt-5'>
                  <Title variant="card">Before</Title>
                  <Text className="mb-4 mt-4 w-100">The content was unclear and difficult to read, causing concerns it would be skipped over.</Text>
                  <img src={imgPhoto7} alt="" className="img-fluid w-100" />
                </Col>
                <Col className='mt-5'>
                  <Title variant="card">After</Title>
                  <Text className="mb-4 mt-4 w-100">We improved readability by editing copy for concision. Headers were created to make scanning easier.</Text>
                  <img src={imgPhoto8} alt="" className="img-fluid w-100" />
                </Col>
                <div className='mt-5'>
                  <Text className="mb-4 mt-4">Here you can see my recommendations and the iterations this content went through. <b>Because users wanted increased personalization</b>, we wrote copy as if we were speaking directly to each mentee, using "you" instead of "they" or "mentees".</Text>
                  <img src={imgPhoto10} alt="" className="img-fluid w-100" />
              </div>
            </Row>
          </Section>
          <Section>
            <Row className='mt-4'>
                  <Text className="w-100"><b>All testing for Phase 2 was done on the mentor side of the platform</b>. <i>All testing results are from our Phase 2 Research team and are not my own</i>. I have included select information to focus solely on content. Phase 2 wrapped up shortly after moderated usability testing was completed and therefore <b>our team was unable to directly address findings</b>. We left reccomendations in our handoff documentation for Phase 3.</Text>
                  <Title className="mb-4 mt-5" variant="cardBig">What do potential mentors think of the platform?</Title>
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
                  <Title variant="card">Moderated research goal</Title>
                  <Text className="mb-4 mt-4">Assess the <b>impact of copy and word choices on usability</b>, with special attention to areas that may have an emotional impact.</Text>
                  <Title variant="cardBig" className="mb-4 mt-5 w-100">Here is what research found...</Title>
                  <Title variant="card" className="mb-4 mt-5 w-100">Unclear directions</Title>
                  <Text className="mb-4 mt-4">Completing a background check as soon as possible is an important step in mentorship approval, however <b>3 out of 6</b> mentors <b>wouldn't choose to complete their background check first</b>. <br /> <br /> Users were more likely to complete their profile prior to initiating their background check, and it might be worth using this knowledge in proposing a solution. I'm not certain changing copy alone is the best answer (although it may be the easiest and quickest to test), and <b>my recommendation</b> is to get more folks involved in brainstorming around potential solutions.</Text>
                  <Text className="mb-4 mt-4">Perhaps instructional copy such as <i>"Initiate your background check and complete your profile while you wait"</i> would help. Maybe design decisions need to be rethought. Possibly an explicit or even mandatory mentorship approval step-by-step could be created for the landing page. It could be this is actually a non-issue and not as much time is lost on profile creation as we might think. Or ... it could be something else entirely!</Text>
                  <Title variant="card" className="mb-4 mt-5 w-100">More information needed</Title>
                  <Text className="mb-4 mt-4"><b>4 out of 6</b> mentors wanted to know <b>what data would be checked</b> and <b>what would make them ineligible to be a mentor</b>. I was not surprised by these findings as we too were unclear on the totality of the background check process. <br /> <br /> <b>My recommendation</b> is to set up a meeting with the client at the start of Phase 3 to discuss any new information they may have regarding which 3rd party vendor will be conducting the background checks. Conducting further research on what generally disqualifies applicants will also be useful. Ultimately more information is needed internally to effectively propose any useful changes. Once the Phase 3 writers are clear on the information themselves, I have no doubt they will be able to craft copy for increased clarity.</Text>
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
