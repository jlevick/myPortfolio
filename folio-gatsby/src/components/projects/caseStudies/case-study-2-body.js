import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span, Box } from "../../../components/Core";
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



const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`;

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
            <Row>
              <div>
                <Text className="mb-4">
                The main goal of this portfolio website project was to practice front-end skills. I will highlight both the technical skills I gained and the design process I followed. 
                </Text>
                <Text className="mb-4">
                I took a mobile-first approach and used Figma to resize pre-existing assets. After, I gathered all necessary assets in a single zip file to ensure a smooth hand-off.
                </Text>
              </div>
            </Row>
            <Row className="mt-5">
              <div>
                <Title variant="cardBig">Style Guide</Title>
                <Text className="my-4">
                  I chose a relatively basic color palette as to not distract from anything on my portfolio website, and a brighter color for the main CTA buttons (Call to Action).
                </Text>
                <Text>
                  I chose a Google Font (Poppins) for accessibility, as these fonts display quickly and are usable on many different browsers. I specifically chose a sans-serif font for increased readability on a screen.
                </Text>
              </div>
              <div>
                <Box
                  className="d-flex w-25 justify-content-center align-items-center w-75"
                  mr={3}
                >
                  <img src={imgPhoto} alt="" className="img-fluid" />
                </Box>
              </div>
              <Row className="mt-5">
                <div>
                  <Title variant="cardBig">Wireframing</Title>
                  <Text className="mb-4">
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
              <Row className='mt-5'>
                <div>
                  <Title variant="cardBig">HTML</Title>
                  <Text className="mb-4">Once I could visualize what I was going to build, I started with a basic HTML structure. In order to achieve a positive user experience, I made the decision to open all links in a new tab so users aren't redirected from the site. I was able to do this using the 	&lt;a&gt; tag and target=“_blank”. I followed best practices for all headings to ensure proper hierarchy and help users quickly scan through each screen. </Text>
                </div>
              </Row>
              <Row>
                <Col>
                  <Title variant="cardSm">On the left is the HTML, on the right is how it appears in the browser</Title>
                  <img src={imgPhoto3} alt="" className="img-fluid w-75" />
                </Col>
              </Row>
              <Row className='mt-5'>
                <div>
                  <Text>I labelled all images with appropriate alt text to ensure accessibility. Alt text is necessary for screen readers, and for those with sensory processing sensitivities. Alt text also optimizes the site for search engines, benefiting slow-loading browsers.</Text>
                </div>
              </Row>
              <Row className="mt-5">
                <Col>
                  <Title variant="card">Alt text describing image</Title>
                  <img src={imgPhoto4} alt="" className="img-fluid w-25" />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col>
                  <Title variant="card">Image alt-text is describing</Title>
                  <img src={imgPhoto5} alt="" className="img-fluid w-100" />
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col>
                  <div>
                    <Title variant="cardBig">CSS</Title>
                    <Text>Once my HTML structure was finished I moved to CSS to style my hyperlinks and buttons.</Text>
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
                    <Title variant="cardBig">CSS Animations</Title>
                    <Text>To diversify my learning, I animated an svg illustration using CSS Keyframes.</Text>
                  </div>
                    <Box className="pl-lg-4 pt-5 pt-lg-0">
                      <Text
                        target="_blank"
                        href="https://jlevick.github.io/portfolio-website/animations.html"
                        variant="a"
                      >
                        <u>
                          <b>See the animation in action here.</b>
                        </u>
                      </Text>
                    </Box>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col>
                  <Title variant="card">Code for keyframes</Title>
                  <img src={imgPhoto11} alt="" className="img-fluid w-50" />
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col>
                  <div>
                    <Title variant="cardBig">Media Queries</Title>
                    <Text>As I was using a mobile-first design process, I added media queries to my CSS in order to build a responsive site. </Text>
                  </div>
                </Col>
              </Row>
              <Row className='mt-5'>
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
                    <Text>I initially struggled to understand the difference between margin and padding, and how to use them to achieve the desired layout. To figure out the correct solution, I experimented with commenting out code and adjusting the pixel values. </Text>
                    <Text>I also used the Inspect feature in Dev Tools to identify issues and test the site's responsiveness on various screen sizes. This helped me ensure that the website was functioning properly across different devices. </Text>
                  </div>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col>
                  <Title variant="card">Using Inspect to find #hero and changing viewport to mobile (340px) </Title>
                  <img src={imgPhoto10} alt="" className="img-fluid w-75" />
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col>
                  <div>
                    <Title variant="cardBig">JavaScript</Title>
                    <Text>To practice JavaScript prior to adding it to my codebase, I played around in the console and also solved coding challenges on codepen.io.</Text>
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
                <Col>
                  <Title variant="card">Playing in Codepen</Title>
                  <img src={imgPhoto13} alt="" className="img-fluid w-75" />
                </Col>
              </Row>
              <Row className='mt-5'>
                <div>
                  <Text>Once I felt more comfortable with the various data types, I used my newfound knowledge to create a hamburger menu for mobile. </Text>
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
                    <Title variant="card">Uh oh...</Title>
                    <Text>Everything was going smoothly until I noticed that my hamburger menu was not functioning correctly. I tried to troubleshoot the issue on my own, but eventually sought help from my mentor. Interestingly, the menu worked fine for him. </Text>
                    <Text>I wondered if it was a problem with my browser or if I had forgotten to commit and push my changes to GitHub... </Text>
                    <Text>Eventually, after consulting with another developer, I learned that the issue was caused by the preview extension I was using. Once I installed the correct extension, the problem was resolved and I learned a valuable lesson. </Text>
                  </div>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col>
                  <Title variant="card">Menu working properly</Title>
                  <img src={imgPhoto15} alt="" className="img-fluid w-75" />
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
                Usability Testing - Code Quality - Cross-Browser Testing - Accessibility Testing - Lighthouse Testing
              </Title>
            </Container>
          </Section>
          <Section>
            <Row className='mt-4'>
              <div>
                <Text>Prior to testing I deployed the site on GitHub which allowed me to easily send the site to others. After the website was functional, I conducted usability testing with five participants. </Text>
                <br />
                <Text>Since the project is a portfolio website and a portfolio is used to attract potential employers, I focused on testing the overall usability of the site rather than the technical aspects of the code. To ensure that the testing was relevant to the purpose of the website, I recruited participants with hiring experience. </Text>
                <br />
                <Text>Participants were given 4 scenarios.</Text>
              </div>
            </Row>
            <Row className='mt-4'>
                <div>
                  <Title variant="card">Research Goal</Title>
                  <Text>Test for errors based on Jakob Nielsen's error rating scale.</Text>
                </div>
            </Row>
            <Row className='mt-4'>
              <div>
                  <Title variant="card">User Goals</Title>
                  <Text>Learn more about the designer and their work. Find the designer's contact information. </Text>
              </div>
            </Row>
            <Row className='mt-4'>
                <div>
                  <Title variant="card">Starting Situation</Title>
                  <Text><i>“You are a hiring manager and you have received this designer's portfolio to see if you are interested in interviewing them for an early career UX Design position.”</i></Text>
                </div>
            </Row>
            <Row className='mt-4'>
                <div>
                  <Title variant="card">Example Scenario</Title>
                  <Text><i>"You have viewed the designer's work and want to learn more on who they are. Please show me how you would go about doing so."</i></Text>
                </div>
            </Row>
            <Row className='mt-4'>
                <div>
                  <Title variant="card">Results</Title>
                  <Text>Test for errors based on Jakob Nielsen's error rating scale.</Text>
                </div>
            </Row>
            <Row className='mt-5'>
              <div>
                <Text>Overall there were no major usability issues, although 3 out of 5 participants wanted to see a phone number listed in the contact section. </Text>
                <br />
                <Text>One participant ran Lighthouse on the site and suggested I do the same to fix a few accessibility errors they found (more on this later). </Text>
                <br />
                <Text>For a positive user experience I chose to make the phone number clickable by using &lt;a&gt;href=“tel:PHONENUMBER>PHONE NUMBER&lt;/a&gt;  </Text>
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
                <div>
                  <Title variant="cardBig">Code Quality and Cross-Browser Testing</Title>
                  <Text>To ensure that my code was error- free and consistently formatted, I implemented linters (HTML Hint, Stylelint, Standard JS) and used Prettier to format the code. </Text>
                  <br />
                  <Text>One error was related to the use of ampersands. After doing some research online, I realized that my initial fix was incorrect. I was able to resolve the issue by using " & amp" instead of “[ & ]". </Text>
                  <br />
                  <Text>I learned an ampersand ( & ) by itself is technically an error in HTML and can potentially cause a browser to display strange things. </Text>
                </div>
              </Col>
            </Row>
          </Section>
        </Container>
      </Section>
    </>
  );
};

export default CaseStudy2Body;
