import React from 'react'
import { Container, Row } from 'react-bootstrap'

import { Section, Title, Text, Button } from '../../../components/Core'

const CaseStudy1 = ({ hero = true, bg = 'dark', ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-start justify-content-start">
              <div className="pl-4 pl-lg-4">
                <Title color="light" variant="secSm">
                  Challenge
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-4"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  People want astrology readings but don't know how to find reputable astrologers, and no single resource offers everything they need.
                </Text>
              </div>
              <div className="pl-4 pl-lg-4">
                <div className="mt-2 mb-5">
                </div>
                <div className="mt-4 mb-5"></div>
                <Text color="light" className="mt-3 font-weight-bold"></Text>
                <Text color="light" variant="small"></Text>
              </div>
          </Row>
          <Row className="align-items-start justify-content-start">
              <div className="pl-4 pl-lg-4">
                <Title color="light" variant="secSm">
                  Solution
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  Design the minimum viable prototype of a mobile app that
                  allows users to instantly connect with astrologers.</Text>
              </div>
          </Row>
          <Row className="align-items-start justify-content-start">
              <div className="pl-4 pl-lg-4">
                <Title color="light" variant="secSm">
                  Outcome
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  An inclusive astrology app with 3 distinct features, offering users exactly what they want.
                </Text>
              </div>
              <div className="pl-4 pl-lg-4">
                <div className="mt-4 mb-5">
                </div>
                <div className="mt-4 mb-5"></div>
                <Text color="light" className="mt-3 font-weight-bold"></Text>
                <Text color="light" variant="small"></Text>
              </div>
          </Row>
          <Row className="align-items-start justify-content-start">
              <div className="pl-4 pl-lg-4">
                <Title color="light" variant="secSm">
                  My Role
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  Sole UX/UI Designer
                </Text>
              </div>
              <div className="pl-4 pl-lg-4">
                <div className="mt-4 mb-5">
                </div>
                <div className="mt-4 mb-5"></div>
                <Text color="light" className="mt-3 font-weight-bold"></Text>
                <Text color="light" variant="small"></Text>
              </div>
          </Row>
        </Container>
      </Section>
      <Container>
        <Row className="pl-4 mt-5 justify-content-center">
          <div className="pt-lg-0">
            <a
              target="_blank"
              rel="noreferrer"
              href={
                "https://www.figma.com/proto/W2qPXH6fRc4VrBPhPlc93i/Aspect-v11?node-id=1334%3A7185&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1330%3A7221"
              }
            >
              <Button variant={"#7155ff"}>Final Prototype</Button>
            </a>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default CaseStudy1
