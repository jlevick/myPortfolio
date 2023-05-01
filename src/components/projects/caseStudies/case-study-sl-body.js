import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box, Button } from "../../../components/Core";
import imgPhoto from "../../../assets/image/png/audit1.png";
import imgPhoto1 from "../../../assets/image/png/audit2.png";
import imgPhoto2 from "../../../assets/image/png/landingbefore.png";
import imgPhoto3 from "../../../assets/image/png/landingafter.png";


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
                    Following our newly developed Content Style Guide, we wrote our copy to be clear, consistent, inclusive, uplifting, ethical, respectful, approachable, and compassionate. 
                    <br /> 
                    We used casual, informal language based on our user's age range (18-25 for mentees), their desire for inclusivity, and for overall readability. 
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
                Clarifying Copy
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
                  <Text className="mb-5 mt-4"><i>"Wherever you are on your journey, a mentor can help you take the next step."</i></Text>
                  <img src={imgPhoto2} alt="" className="img-fluid w-100" />
                </Col>
                <Col>
                  <Title variant="card">After</Title>
                  <Text className="mb-4 mt-4"><i>"A free, online mentorship program that matches LGBTQIA+ young adults with mentors in the queer community."</i></Text>
                  <img src={imgPhoto3} alt="" className="img-fluid w-100" />
                </Col>
                <Text className="mb-5 mt-4"></Text>
            </Row>
            <Row className='mt-4'>
              <div>
                  <Title variant="card">User Goals</Title>
                  <Text className="mb-4 mt-4" variant='li'>Learn more about the designer and their work.</Text>
                  <Text className="mb-4 mt-4" variant='li'>Find the designer's contact information.</Text>
              </div>
            </Row>
            <Row className='mt-4'>
                <div>
                  <Title variant="card">Starting Situation</Title>
                  <Text className="mb-4 mt-4"><i>“You are a hiring manager and you have received this designer's portfolio to see if you are interested in interviewing them for an early career UX Design position.”</i></Text>
                </div>
            </Row>
            <Row className='mt-4'>
                <div>
                  <Title variant="card">Example Scenario</Title>
                  <Text className="mb-4 mt-4"><i>"You have viewed the designer's work and want to learn more on who they are. Please show me how you would go about doing so."</i></Text>
                </div>
            </Row>
            <Row className='mt-4'>
                <Title variant="card">Results</Title>
              <div>
                <Text className="mb-4 mt-4"variant='li'>No major usability issues, but 3 out of 5 participants wanted a phone number listed in the contact section. </Text>
                <Text className="mb-4 mt-4"variant='li'>One participant ran Lighthouse on the site and suggested I do the same to fix a few accessibility errors they found (more on this later). </Text>
              </div>
            </Row>
            <Row className='mt-2'>
              <div>
                <Text className="mb-4 mt-4">For a positive user experience I chose to make the phone number clickable by using &lt;a&gt;href=“tel:PHONENUMBER&lt;PHONE NUMBER&lt;/a&gt;.</Text>
              </div>
            </Row>
            
            <Row className='mt-5'>
              <Col>
                <div className="mt-5">
                  <Title variant="cardBig">Code Quality</Title>
                  <Text className="mb-4 mt-4">To ensure my code was error-free and consistently formatted, I implemented linters (HTML Hint, Stylelint, Standard JS) and used Prettier to format the code. </Text>
                  <Text className="mb-4 mt-4">One error was related to the use of ampersands (&amp;). After researching online, I realized my initial fix was incorrect. I was able to resolve the issue by using &amp;amp instead of [&amp;]. </Text>
                  <Text className="mb-4 mt-4">I learned an ampersand by itself is technically an error in HTML and can potentially cause a browser to display strange things. </Text>
                </div>
              </Col>
            </Row>
            
            <Row className='mt-4'>
              <Text className="mb-4 mt-4 pl-2">To test the error handling in my JavaScript file I intentionally introduced random text. As expected, an error message was displayed, "unexpected keyword or identifier".</Text>
            </Row>
            
            <Row className='mt-5 pl-3'>
              <div>
                <Text className="mb-4 mt-4">After installing the linters in my editor, I used a W3C Validator to identify issues in my HTML. After fixing the few that popped up I was left with two errors. </Text>
                <Text className="mb-4 mt-4">Since the error was narrowed down to lines 38-92 I combed through looking for where I hadn't closed a &lt;div&gt;. I was able to trace each opening div to a closed div and was perplexed... </Text>
              </div>
            </Row>
           
            <Row className='mt-5'>
              <div>
                <Text className="mb-4 mt-4 pl-3">Eventually I discovered I had a single extra opening &lt;div&gt;, explaining why I was not able to locate the error during my first look through. After deletion, I was error free. </Text>
              </div>
            </Row>
            
            <Row className='mt-5 pl-3'>
              <div className="mt-5">
                <Title variant="cardBig">Accessibility Testing</Title>
                <Text className="mb-4 mt-4">While passing AA standards might be <i>good enough</i>, I wanted my color combinations to pass AAA accessibility standards. The main CTA came back with a ratio too low to pass AAA.</Text>
                <Text className="mb-4 mt-4">Based on the recommendations I changed the text color to comply with AAA standards. </Text>
              </div>
            </Row>
            
            <Row className='mt-5 pb-5 pl-3'>
              <div>
                <Text className="mb-4 mt-4">No changes were made to the secondary button as the combination passed AAA accessibility standards. </Text>
              </div>
            </Row>
            <Row className='mt-5 pl-3'>
              <div>
                <Title variant="cardBig">Lighthouse Testing</Title>
                <Text className="mb-4 mt-4">Due to feedback during usability testing, I ran Lighthouse on the site. The results were positive but Lighthouse directed to me to an article on aria-labels in order to increase accessibility. </Text>
              </div>
            </Row>
            
            <Row className='mt-5 pl-3'>
              <div>
                <Text className="mb-4 mt-4">After adding aria-labels I ran the test again and increased both performance <i>and</i> accessibility!</Text>
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
