import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span, Box } from "../../../components/Core";
import imgPhoto from "../../../assets/image/png/portfolio_index@2x.png";


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
                Problem Statement - User Personas - User Flows
              </Title>
            </Container>
          </Section>
          <Section>
            <Row>
              <div>
                <Text className="mb-4">
                  The main objectives of this portfolio website project were to practice front-end skills and to build a responsive website. In the following case study, I'll highlight both the technical skills I gained and the design process I followed.
                </Text>
                <Text className="mb-4">
                  Before starting the front-end work, I gathered all necessary assets and copy in a single zip file to make the transition from design to development more efficient. I took a mobile first approach and utilized Figma to re-create and resize pre-existing assets from a finished case study.
                </Text>
                <Text className="mb-4">
                  In order to fit within the guidelines of 600px and 1200px, which are equivalent to mobile and large screen sizes, I re-created this pie chart for mobile.
                </Text>
              </div>
            </Row>
            <Row>
              <Col>
                <Title variant="card">Original</Title>
                <img src={imgPhoto} alt="" className="img-fluid w-50" />
              </Col>
              <Col>
                <Title variant="card">Redesigned</Title>
                <Box
                  className="d-flex w-50 justify-content-center align-items-center"
                  mr={3}
                >
                  <img src={imgPhoto} alt="" className="img-fluid" />
                </Box>
              </Col>
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
                  className="d-flex w-25 justify-content-center align-items-center"
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
                  <img src={imgPhoto} alt="" className="img-fluid w-50" />
                </Col>
                <Col>
                  <Title variant="card">Lo-Fi</Title>
                  <img src={imgPhoto} alt="" className="img-fluid w-50" />
                </Col>
              </Row>
              <Row className='mt-5'>
                <div>
                  <Title variant="cardBig">HTML</Title>
                  <Text className="mb-4">Once I could visualize what I was going to build, I started with a basic HTML structure. In order to achieve a positive user experience, I made the decision to open all links in a new tab so users aren't redirected from the site. I was able to do this using the 	&lt;a&gt; tag and target=“_blank”. </Text>
                </div>
              </Row>
              <Row>
                <Col>
                  <Title variant="cardSm">On the left is the HTML, on the right is how it appears in the browser</Title>
                  <img src={imgPhoto} alt="" className="img-fluid w-50" />
                </Col>
              </Row>
            </Row>
          </Section>
        </Container>
      </Section>
    </>
  );
};

export default CaseStudy2Body;
