import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box, Button } from "../../../components/Core";
import imgPhoto from "../../../assets/image/png/affinitymap.png";
import imgPhoto1 from "../../../assets/image/png/voice.png";
import imgPhoto2 from "../../../assets/image/png/tone.png";
import imgPhoto3 from "../../../assets/image/png/basic_html_structure@2x.png";
import imgPhoto4 from "../../../assets/image/png/sun_change_orange@2x.png";
import imgPhoto5 from "../../../assets/image/png/alt_text_example@2x.png";
import imgPhoto6 from "../../../assets/image/png/buttons@2x.png";
import imgPhoto7 from "../../../assets/image/png/styling_buttons@2x.png";
import imgPhoto8 from "../../../assets/image/png/md_media_queries@2x.png";
import imgPhoto9 from "../../../assets/image/png/lg_media_queries@2x.png";
import imgPhoto10 from "../../../assets/image/png/using_dev_tools@2x.png";
import imgPhoto11 from "../../../assets/image/png/keyframes@2x.png";
import imgPhoto12 from "../../../assets/image/png/js_console_practice@2x.png";
import imgPhoto13 from "../../../assets/image/png/codepen@2x.png";
import imgPhoto14 from "../../../assets/image/png/js_menu_code@2x.png";
import imgPhoto15 from "../../../assets/image/png/menu_mobile@2x.png";
import imgPhoto16 from "../../../assets/image/png/added_phone@2x.png";
import imgPhoto17 from "../../../assets/image/png/added_phone_hover@2x.png";
import imgPhoto18 from "../../../assets/image/png/ampersand_fix@2x.png";
import imgPhoto19 from "../../../assets/image/png/js_lint_error@2x.png";
import imgPhoto20 from "../../../assets/image/png/w3c_div_error@2x.png";
import imgPhoto21 from "../../../assets/image/png/w3c_error_free@2x.png";
import imgPhoto22 from "../../../assets/image/png/accessibility_error@2x.png";
import imgPhoto23 from "../../../assets/image/png/accessibility_fixed@2x.png";
import imgPhoto24 from "../../../assets/image/png/before_fixing_accessibility@2x.png";
import imgPhoto25 from "../../../assets/image/png/lighthouse_aria_labels@2x.png";
import imgPhoto26 from "../../../assets/image/png/after_fixing_accessibility@2x.png";
import imgPhoto27 from "../../../assets/image/png/aria_labels@2x.png";



const CaseStudySLVoiceBody = () => {
  return (
    <>
      <Section className="position-relative">
        <Container>
          <Section hero={true} bg={"dark"} className="px-5">
            <Container className="pb-3">
              <Title color="light" variant="secSm">
                01 Approach 
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
                Voice and Tone 
              </Title>
            </Container>
          </Section>
          <Section>
            <Row className="mt-5">
              <div>
                <Title variant="cardBig">If this platform was a person, who would they be?</Title>
                <Text className="mb-4 mt-4">
                    In order to understand how to write for our users, I read through the Phase 1 research report, creating a list of keywords and themes.
                </Text>
                <Text className="mb-4 mt-4">
                    The report included a <b>list of adjectives provided by our client</b> which describe Sean's Legacy:
                    <Text variant="li">Welcoming</Text>
                    <Text variant="li">Trustworthy</Text>
                    <Text variant="li">Professional</Text>
                    <Text variant="li">Engaging</Text>
                    <Text variant="li">Uplifting</Text>
                    <Text variant="li">Community</Text>
                </Text>
                <Text className="mb-4 mt-4">
                    <b>Sean's Legacy </b> has its own <b>guiding principles</b>, and I added these as well:
                    <Text variant="li">Inclusivity</Text>
                    <Text variant="li">Empowerment</Text>
                    <Text variant="li">Compassion</Text>
                    <Text variant="li">Respect</Text>
                </Text>
                <Text className="mb-4 mt-4">
                   Additionally I viewed raw data from Phase 1 user interviews, again writing down common themes and terms.
                   <br /> I imported the findings into FigJam and began looking for patterns. 
                   <br /> Ultimately I was left with 4 broad categories: community, individual agency, growth, and safety.  
                </Text>
              </div>
              <div>
                <Box
                  className="d-flex justify-content-center align-items-center w-75 my-5">
                  <img src={imgPhoto} alt="" className="img-fluid" />
                </Box>
              </div>
              <div className="mt-5">
                  <Title variant="cardBig">How do we create safety through language?</Title>
                  <Text className="mb-4 mt-4">I knew our platform's voice needed to communicate in a way that left our users feeling safe. But in an age where no one can guarantee a true safe space, how do we accomplish this? <i>How do we create safety</i>? 
                  <br />
                  <br />
                  The answer is we can't. Safety is built and takes effort. My team brainstormed around the idea of designing experiences that promote safety and build trust through respect, consistency, transparency, inclusivity, and clarity.
                  </Text>
                  <Text>Communicating choice and offering autonomy and consent was imperative.</Text>
                </div>
              <Row className="mt-3">
              <div className="mt-5">
                  <Title variant="cardBig">Introducing: the <i>Cool Guidance Counselor</i></Title>
                  <Text className="mb-4 mt-4">With all of this in mind, we envisioned our voice and tone persona to be the well-balanced guidance counselor we all want(ed) to have. 
                  <br />
                  They're warm, friendly, reliable, and make ohers feel at ease. They're professional and knowledgeable, inspiring trust and confidence. They speak with authority without being authoritarian. They're clear communicators, offering guidance with a tone of empowerment. They promote diversity and a sense of belonging with their inclusive and respectful behavior, and they prioritize safety above all.</Text>
                    <br />
                  <Text>
                        Ultimately, our persona is:
                        <Text variant="li">Kind, not pushy</Text>
                        <Text variant="li">Welcoming, not unapproachable</Text>
                        <Text variant="li">Ethical and open, not cagey</Text>
                        <Text variant="li">Empowering, not judgmental</Text>
                    </Text>
                    <Text>The team brought these ideas to our client, where they were well received by their co-founder and internal content team.</Text>
                </div>
            </Row>
            <Row className='my-5'>
                    <div className="mt-5">
                        <Title variant="cardBig">Ensuring consistent copy</Title>
                <Row className="mt-5">
                    <div>
                    <Title variant="card">Voice</Title>
                  <img src={imgPhoto1} alt="" className="img-fluid w-50" />
                </div>
                <div>
                    <Title variant="card">Tone</Title>
                  <img src={imgPhoto2} alt="" className="img-fluid w-50" />
                </div>
              </Row>
                  <Text className="mb-4 mt-4">With a clear vision of our voice and tone, we began developing our style guide from scratch. The list I created grew into a keyword list that helped standardize copy on the platform; everything from Call to Action buttons, to titles, to tooltips.</Text>
                  <Text>During an early audit of the platform, I noticed inconsistencies in terms such as <i>Continue </i> and <i>Next</i>, and <i>Create account</i> and <i>Sign up</i>. Our team chose to use <i>Continue</i> over <i>Next</i> as it felt gentler, and <i>Sign up</i> over <i>Create account</i> to simplify.</Text>
                </div>
            </Row>
              <Container>
            <Row className="pl-4 mt-5 mb-5 justify-content-center">
                <div>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={"https://www.notion.so/tech-fleet-community-dao/SL-Mentorship-Platform-Content-Style-Guide-0875ea7d9dcc49eba9bcd5cff00de986"}
                        >
                        <Button variant={"#7155ff"}>Content Style Guide</Button>
                    </a>
                </div>
            </Row>
      </Container>
            <Row className='mt-5'>
                  <div>
                    <Text className="mb-4 mt-4">
                        We decided that due to the age range of our mentee audience (18-25) and their desire for inclusivity, we would use casual, informal language. The platform's voice needed to sound human, be readable at a 6th grade level, and communicate in a way that related both to mentees and mentors. Because of this, we chose to use sentence case over title case and allow for contractions. Our team also decided to use the Hemingway App in order to check the reading level of all copy. 
                     </Text>
                  </div>
            </Row>
            <Row className="my-5">
              </Row>
            </Row>
          </Section>
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
                Clarifying Copy - Safety Features - SOMETHING - SOMETHING
              </Title>
            </Container>
          </Section>
          <Section>
            <Row className='mt-2'>
              <div>
                <Text className="mb-4 mt-4">To easily send the website to others, I deployed on GitHub prior to testing. After the website was functional, I conducted usability testing with 5 participants. </Text>
                <Text className="mb-4 mt-4">Since the project is a portfolio website and a portfolio is used to attract potential employers, I focused on testing the overall usability of the site rather than the technical aspects of the code. To ensure that the testing was relevant to the purpose of the website, I recruited participants with hiring experience. </Text>
                <Text className="mb-4 mt-4">Participants were given 4 scenarios.</Text>
              </div>
            </Row>
            <Row className='mt-4'>
                <div>
                  <Title variant="card">Research Goal</Title>
                  <Text className="mb-4 mt-4">Test for errors based on Jakob Nielsen's error rating scale.</Text>
                </div>
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
                <Title variant="card">Phone number added</Title>
                <img src={imgPhoto16} alt="" className="img-fluid w-50" />
              </Col>
              <Col>
                  <Title variant="card">Hover state </Title>
                  <img src={imgPhoto17} alt="" className="img-fluid w-50" />
              </Col>
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
              <Col>
                <img src={imgPhoto18} alt="" className="img-fluid w-25" />
              </Col>
            </Row>
            <Row className='mt-4'>
              <Text className="mb-4 mt-4 pl-2">To test the error handling in my JavaScript file I intentionally introduced random text. As expected, an error message was displayed, "unexpected keyword or identifier".</Text>
            </Row>
            <Row className='mt-5'>
              <Col>
                <Title variant="card">What is...tacos?</Title>
                <img src={imgPhoto19} alt="" className="img-fluid w-75" />
              </Col>
            </Row>
            <Row className='mt-5 pl-3'>
              <div>
                <Text className="mb-4 mt-4">After installing the linters in my editor, I used a W3C Validator to identify issues in my HTML. After fixing the few that popped up I was left with two errors. </Text>
                <Text className="mb-4 mt-4">Since the error was narrowed down to lines 38-92 I combed through looking for where I hadn't closed a &lt;div&gt;. I was able to trace each opening div to a closed div and was perplexed... </Text>
              </div>
            </Row>
            <Row className='mt-5'>
              <Col>
                <img src={imgPhoto20} alt="" className="img-fluid w-50" />
              </Col>
            </Row>
            <Row className='mt-5'>
              <div>
                <Text className="mb-4 mt-4 pl-3">Eventually I discovered I had a single extra opening &lt;div&gt;, explaining why I was not able to locate the error during my first look through. After deletion, I was error free. </Text>
              </div>
            </Row>
            <Row className='mt-5'>
              <Col>
                <img src={imgPhoto21} alt="" className="img-fluid w-50" />
              </Col>
            </Row>
            <Row className='mt-5 pl-3'>
              <div className="mt-5">
                <Title variant="cardBig">Accessibility Testing</Title>
                <Text className="mb-4 mt-4">While passing AA standards might be <i>good enough</i>, I wanted my color combinations to pass AAA accessibility standards. The main CTA came back with a ratio too low to pass AAA.</Text>
                <Text className="mb-4 mt-4">Based on the recommendations I changed the text color to comply with AAA standards. </Text>
              </div>
            </Row>
            <Row className='mt-5'>
              <Col>
                <Title variant="card">Accessibility Error</Title>
                <img src={imgPhoto22} alt="" className="img-fluid w-75" />
              </Col>
              <Col>
                <Title variant="card">Error Fixed</Title>
                <img src={imgPhoto23} alt="" className="img-fluid w-75" />
              </Col>
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
            <Row className='mt-5'>
              <Col>
                <Title variant="card">Initial Lighhouse results</Title>
                <img src={imgPhoto24} alt="" className="img-fluid w-50" />
              </Col>
              <Col>
                <Title variant="card">Lighthouse explanation for results</Title>
                <img src={imgPhoto25} alt="" className="img-fluid w-100" />
              </Col>
            </Row>
            <Row className='mt-5 pl-3'>
              <div>
                <Text className="mb-4 mt-4">After adding aria-labels I ran the test again and increased both performance <i>and</i> accessibility!</Text>
              </div>
            </Row>
            <Row className='my-5'>
              <Col>
                <Title variant="card">Aria labels in code</Title>
                <img src={imgPhoto27} alt="" className="img-fluid w-100" />
              </Col>
              <Col>
                <Title variant="card">Final Lighthouse results</Title>
                <img src={imgPhoto26} alt="" className="img-fluid w-50" />
              </Col>
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

export default CaseStudySLVoiceBody;
