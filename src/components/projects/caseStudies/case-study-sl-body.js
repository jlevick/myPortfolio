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
                    <br /> 
                    We used <b>casual</b>, <b>informal language</b> based on our user's age range (18-25 for mentees), their desire for inclusivity, and for overall readability; this included the use of <b>sentence case</b> (aside from proper nouns which we determined would use title case).
                    We <b>never use gendered language</b>, and we use the <b>oxford comma</b> because our client loves it and it offers additional clarity.
                </Text>
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
            <Row className='mt-4'>
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
            <Row className='mt-4'>
                <div>
                  <Text className="mb-4 mt-4"><i>Safe end-to-end encrypted chats</i> was simplified to <i>Secure communications</i>, with the meaning of "end-to-end encrypted chats" clearly explained in the copy. The <i>Mentee verification</i> title and copy were added when our client decided to move forward with 2-factor authorization in order to increase safety.</Text>
                </div>
            </Row>
            <Row className='mt-4'>
                  <Title variant="cardBig">Balancing needs of our client and our users</Title>
                  <Text className="mb-4 mt-4 w-100">Our client was keen to showcase the goals of their mentorship program but current designs were lacking transparency. We wanted to ensure potential users would understand what the platform was for so we sharpened the copy.
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
            <Row className='mt-4'>
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
            <Row className='mt-4'>
              <div>
                  <Title variant="cardBig">Offering guidance and personal autonomy</Title>
                  <Text className="mb-4 mt-4"></Text>
                  <Text className="mb-4 mt-4">P</Text>
                  <img src={imgPhoto11} alt="" className="img-fluid w-75" />
              </div>
              <div>
                  <Text className="mb-4 mt-4">Before handing off suggestions to the Design team, we reworked content in a dedicated UXW Copy Iterating Figma file. Here you can see my recommendations, which were iterated upon in the final version.</Text>
                  <img src={imgPhoto9} alt="" className="img-fluid w-100" />
              </div>
            </Row>
            
          </Section>
          <Section hero={true} bg={"dark"}>
            <Container className="pb-3">
              <Title color="light" variant="secSm">
                03 Retro
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
                Overview - Challenges - What I Learned
              </Title>
            </Container>
          </Section>
          <Section>
            <Container>
              <Row className='mt-5'>
                <div>
                  <Title variant="cardBig">Overview</Title>
                  <Text className="mb-4 mt-4">Improving my front-end skills helped me grow as a designer.</Text>
                  <Text className="mb-4 mt-4">This has been evident through my ability to both communicate more effectively with developers, and my ability to know what questions to ask and where to seek out the information.</Text>
                  <Text className="mb-4 mt-4">The experience reiterated the importance of adhering to a design system and considering the technical limitations when designing.</Text>
                </div>
              </Row>
              <Row className='mt-5'>
                <div>
                  <Title variant="cardBig">Challenges</Title>
                  <Text variant='li' className="mb-4 mt-4">Writing this case study was initially a challenge because while the project was building a portfolio website, I wanted to focus on the learning process that revolved around the build and not the build itself.</Text>
                  <Text variant='li' className="mb-4 mt-4">Understanding the difference between padding and margin took some time but the ability to play around in my code and use the Inspect tool was invaluable to my learning. </Text>
                  <Text variant='li' className="mb-4 mt-4">Writing a good GitHub commit message took some time but eventually I found my groove. </Text>
                  <Text variant='li' className="mb-4 mt-4">The preview extension issue I encountered was one of the most confusing challenges I faced, but my ability to ask questions, research, and ask for help from others came in handy. </Text>
                </div>
              </Row>
              <Row className='mt-5'>
                <div>
                <Title variant="cardBig">What I Learned</Title>
                  <Text variant='li' className="mb-4 mt-4"> HTML is all about building and stacking containers. Learn to build your &lt;div&gt; containers correctly the first time to avoid issues down the line. </Text>
                  <Text variant='li' className="mb-4 mt-4">Often the issue is something easy, like needing to add or reduce padding, or having an extra &lt;div&gt; somewhere. Other times it is more complicated, and this is why MDN is our friend (Substack and Google are also helpful ... as is a mentor!).  </Text>
                  <Text variant='li' className="mb-4 mt-4">One can learn a lot by using Lighthouse. </Text>
                  <Text variant='li' className="mb-4 mt-4">Sometimes taking a break and stepping away from your code is the best way to figure out whatever it is you're trying to solve.  </Text>
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
