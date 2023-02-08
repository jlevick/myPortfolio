import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span, Box } from "../../../components/Core";
import imgPhoto from "../../../assets/image/png/aspect_index2@2x.png";


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
                <Text className="mb-4">text section 1</Text>
                <Text>text section 2</Text>
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
                <Text className="my-4">text</Text>
                <Text>more text</Text>
              </div>
              <div>
                <Box
                  className="d-flex w-25 justify-content-center align-items-center"
                  mr={3}
                >
                  <img src={imgPhoto} alt="" className="img-fluid" />
                </Box>
              </div>
            </Row>
          </Section>
        </Container>
      </Section>
    </>
  );
};

export default CaseStudy2Body;
