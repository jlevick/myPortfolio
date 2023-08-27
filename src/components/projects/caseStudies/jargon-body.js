import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Box, Button } from "../../../components/Core";
import imgPhoto5 from "../../../assets/image/png/safetybefore.png";
import imgPhoto6 from "../../../assets/image/png/safetyafter.png";

const JargonBody = () => {
  return (
    <>
     <Section className="position-relative">
        <Container>
          <Section>
            <Row>
                  <Text className="mb-4 mt-4 w-100">After ensuring I understood this jargon, <i>whisper technology</i> was changed to <b><i>customizable privacy settings</i></b>.</Text>
                <Col className='mt-5'>
                  <Title variant="card">Before</Title>
                  <img src={imgPhoto5} alt="Original: whisper technology, privacy is a priority, and messages as well as other users can be hidden in DM's" className="img-fluid w-100" />
                </Col>
                <Col className='mt-5'>
                  <Title variant="card">After</Title>
                  <img src={imgPhoto6} alt="Updated: customizable privacy settings, messaging and others users can be hidden in our messaging feature" className="img-fluid w-100" />
                </Col>
            </Row>
            <Row className='mt-5'>
                <div>
                  <Text className="mb-4 mt-4">Further clarification is given by changing <i>DM's</i> to <i>messaging feature</i>. <br /> <br />Removing abbreviations is best practice for accessibility because <b>screen readers don't read abbreviations</b>. Although UX writing can allow for abbreviations of common words, lessening ambiguity and increasing accessibility should outweigh brevity</Text>
                  <Text className="mb-4 mt-4">The original <i>background check</i> information is unclear and wordy. Clarity is increased by rewriting the copy and adding "mentor" to the title.</Text>
                  <Text className="mb-4 mt-4">The <i>Mentee verification</i> information was added when we moved forward with two-factor authorization to increase safety; I was solely in charge of writing this copy.</Text>
                </div>
            </Row>
          </Section>
        </Container>
      </Section>
    </>
  );
};

export default JargonBody;