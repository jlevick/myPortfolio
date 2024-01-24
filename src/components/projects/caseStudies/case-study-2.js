import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Section, Title, Text, Button } from '../../../components/Core'

const CaseStudy2 = ({ hero = true, bg = 'dark', ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row>
              <div>
                <Title color="light" variant="secSm">
                  Challenge
                </Title>
                <Text
                  color="light"
                  className="mt-4 mb-5"
                  css={`
                    line-height: 0.07;
                  `}
                >
                  Not understanding design constraints or the language developers use is costly, especially in agile environments.
                </Text>
              </div>
          </Row>
          <Row>
              <div>
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
                  Become more familliar with development concepts by learning HTML, CSS, and JavaScript, and coding a website from scratch.
                </Text>
              </div>
          </Row>
          <Row>
              <div>
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
                  A responsive website, smoother collaborations with the dev team, easier design hand-offs, and more successful projects.
                </Text>
              </div>
          </Row>
        </Container>
      </Section>
      <Container>
        <Row className="pl-4 mt-5 mb-5 justify-content-center">
          <div>
            <a target='_blank' rel="noreferrer" href={'https://jlevick.github.io/portfolio-website/index.html'}>
                <Button variant={'#7155ff'}>Finished Website</Button>
            </a>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default CaseStudy2
