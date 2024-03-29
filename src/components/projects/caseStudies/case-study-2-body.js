import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box } from "../../../components/Core";
import imgPhoto from "../../../assets/image/png/color_palette@2x.png";
import imgPhoto1 from "../../../assets/image/png/portfolio_home_lofi@2x.png";
import imgPhoto2 from "../../../assets/image/png/portfolio_home_mockup@2x.png";
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



const CaseStudy2Body = () => {
  return (
    <>
      <Section className="position-relative">
        <Container>
          <Section hero={true} bg={"dark"} className="px-5">
            <Container className="pb-3">
              <Title color="light" variant="secSm">
                01 Process
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
                Style Guide - Wireframes - HTML - CSS and Animations - Media Queries - Dev Tools - JavaScript
              </Title>
            </Container>
          </Section>
          <Section>
            <Row className="mt-3">
              <div>
                <Text className="mb-4">
                The main goal of this portfolio website project was to practice front-end skills. I will highlight both the technical skills I gained and the design process I followed. 
                </Text>
                <Text className="mb-4 mt-4">
                I took a mobile-first approach and used Figma to resize pre-existing assets. After, I gathered all necessary assets in a single zip file to ensure a smooth hand-off.
                </Text>
              </div>
            </Row>
            <Row className="mt-5">
              <div>
                <Title variant="cardBig">Style Guide</Title>
                <Text className="mb-4 mt-4">
                  I chose a relatively basic color palette as to not distract from anything on my portfolio website, and a brighter color for the main CTA buttons (Call to Action).
                </Text>
                <Text className="mb-4 mt-4">
                  I chose a Google Font (Poppins) for accessibility, as these fonts display quickly and are usable on many different browsers. I specifically chose a sans-serif font for increased readability on a screen.
                </Text>
              </div>
              <div>
                <Box
                  className="d-flex justify-content-center align-items-center w-75 my-5">
                  <img src={imgPhoto} alt="" className="img-fluid" />
                </Box>
              </div>
              <Row className="mt-4 pl-3">
                <div>
                  <Title variant="cardBig">Wireframing</Title>
                  <Text className="mb-4 mt-4">
                    I was provided low fidelity wireframes and used Figma to mock up high fidelity frames.
                  </Text>
                </div>
              </Row>
              <Row className="mt-5">
                <Col>
                  <Title variant="card">Lo-Fi</Title>
                  <img src={imgPhoto1} alt="" className="img-fluid w-50" />
                </Col>
                <Col>
                  <Title variant="card">Hi-Fi</Title>
                  <img src={imgPhoto2} alt="" className="img-fluid w-50" />
                </Col>
              </Row>
              <Row className='my-5'>
                <div className="mt-5">
                  <Title variant="cardBig">HTML</Title>
                  <Text className="mb-4 mt-4">Once I could visualize what I was going to build, I started with a basic HTML structure. In order to achieve a positive user experience, I made the decision to open all links in a new tab so users aren't redirected from the site. I was able to do this using the 	&lt;a&gt; tag and target=“_blank”. I followed best practices for all headings to ensure proper hierarchy and help users quickly scan through each screen. </Text>
                </div>
              </Row>
              <Row>
                <Col>
                  <Title variant="card">On the left is the HTML, on the right is how it appears in the browser</Title>
                  <img src={imgPhoto3} alt="code and browser image" className="img-fluid w-75" />
                </Col>
              </Row>
              <Row className='mt-5'>
                <div>
                  <Text className="mb-4 mt-4">I labelled all images with appropriate alt text to ensure accessibility. Alt text is necessary for screen readers, and for those with sensory processing sensitivities. Alt text also optimizes the site for search engines, benefiting slow-loading browsers.</Text>
                </div>
              </Row>
              <Row className="mt-5">
                <Col>
                  <Title variant="card">Alt text describing image</Title>
                  <img src={imgPhoto5} alt="" className="img-fluid" />
                </Col>
              </Row>
              <Row className="my-5">
                <Col>
                  <Title variant="card">Image alt-text is describing</Title>
                  <img src={imgPhoto4} alt="" className="img-fluid w-50" />
                </Col>
              </Row>
              <Row className='mt-5 mb-3'>
                <Col>
                  <div>
                    <Title variant="cardBig">CSS</Title>
                    <Text className="mb-4 mt-4">Once the HTML structure was finished I moved to CSS to style hyperlinks and buttons.</Text>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col>
                  <Title variant="card">CSS styling</Title>
                  <img src={imgPhoto7} alt="" className="img-fluid w-50" />
                </Col>
                <Col>
                  <Title variant="card">Main CTA and its' hover state</Title>
                  <img src={imgPhoto6} alt="" className="img-fluid w-50" />
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col>
                  <div>
                    <Title className="mt-5" variant="cardBig">CSS Animations</Title>
                    <Text className="mb-4 mt-4">To diversify my learning, I animated an svg illustration using CSS Keyframes.</Text>
                  </div>
                      <Text
                        target="_blank"
                        href="https://jlevick.github.io/portfolio-website/animations.html"
                        variant="a"
                      >
                        <u>
                          <b>See the animation in action here.</b>
                        </u>
                      </Text>
                </Col>
              </Row>
              <Row className="my-5">
                <Col>
                  <Title variant="card">Code for keyframes</Title>
                  <img src={imgPhoto11} alt="" className="img-fluid w-50" />
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col>
                  <div>
                    <Title variant="cardBig">Media Queries</Title>
                    <Text className="mb-4 mt-4">As I was using a mobile-first design process, I added media queries to my CSS in order to build a responsive site. Media queries are used to adjust content to fit all screen sizes. </Text>
                  </div>
                </Col>
              </Row>
              <Row className='my-5'>
                <Col>
                  <Title variant="card">Medium devices (640px or larger)</Title>
                  <img src={imgPhoto8} alt="" className="img-fluid w-50" />
                </Col>
                <Col>
                  <Title variant="card">Large devices (1024px or larger) </Title>
                  <img src={imgPhoto9} alt="" className="img-fluid w-50" />
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col>
                  <div>
                    <Title variant="cardBig">Dev Tools</Title>
                    <Text className="mb-4 mt-4">I initially struggled to understand the difference between margin and padding, and how to use them to achieve the desired layout. To figure out the correct solution, I experimented with commenting out code and adjusting the pixel values. </Text>
                    <Text className="mb-4 mt-4">I also used the Inspect feature in Dev Tools to identify issues and test the site's responsiveness on various screen sizes. This helped me ensure that the website was functioning properly across different devices. </Text>
                  </div>
                </Col>
              </Row>
              <Row className='my-5'>
                <Col>
                  <Title variant="card">Using Inspect to find #hero and changing viewport to mobile (340px) </Title>
                  <img src={imgPhoto10} alt="" className="img-fluid w-75" />
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col>
                  <div>
                    <Title variant="cardBig">JavaScript</Title>
                    <Text className="mb-4 mt-4">To practice JavaScript prior to adding it to my codebase, I played around in the console and also solved coding challenges on codepen.io.</Text>
                  </div>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col>
                  <Title variant="card">Playing in the console</Title>
                  <img src={imgPhoto12} alt="" className="img-fluid w-75" />
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col className="mt-5">
                  <Title variant="card">Playing in Codepen</Title>
                  <img src={imgPhoto13} alt="" className="img-fluid w-75" />
                </Col>
              </Row>
              <Row className='mt-5'>
                <div>
                  <Text className="mb-4 mt-4 pl-3">Once I felt more comfortable with the various data types, I used my newfound knowledge to create a hamburger menu for mobile. </Text>
                </div>
              </Row>
              <Row className='mt-5'>
                <Col>
                  <Title variant="card">JS code for menu</Title>
                  <img src={imgPhoto14} alt="" className="img-fluid w-75" />
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col>
                  <div>
                    <Title className="mt-4" variant="card">Uh oh...</Title>
                    <Text className="mb-4 mt-4">Everything was going smoothly until I noticed that my hamburger menu was not functioning correctly. I tried to troubleshoot the issue on my own, but eventually sought help from my mentor. Interestingly, the menu worked fine for him. </Text>
                    <Text className="mb-4 mt-4">I wondered if it was a problem with my browser or if I had forgotten to commit and push my changes to GitHub... </Text>
                    <Text className="mb-4 mt-4">Eventually, after consulting with another developer, I learned that the issue was caused by the preview extension I was using. Once I installed the correct extension, the problem was resolved and I learned a valuable lesson. </Text>
                  </div>
                </Col>
              </Row>
              <Row className='my-5'>
                <Col>
                  <Title variant="card">Menu working properly</Title>
                  <img src={imgPhoto15} alt="" className="img-fluid w-75 mb-5" />
                </Col>
              </Row>
            </Row>
          </Section>
          <Section hero={true} bg={"dark"} className="px-5">
            <Container className="pb-3">
              <Title color="light" variant="secSm">
                02 Test
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
                Usability Testing - Code Quality - Accessibility Testing - Lighthouse Testing
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

export default CaseStudy2Body;
