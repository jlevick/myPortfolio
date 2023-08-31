import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text } from "../../../components/Core";

import imgPhoto5 from "../../../assets/image/png/safetybefore.png";
import imgPhoto6 from "../../../assets/image/png/safetyafter.png";
import imgPhoto1 from "../../../assets/image/png/jargonbefore.png";
import imgPhoto2 from "../../../assets/image/png/jargonafter.png";

const JargonBody = () => {
  return (
    <>
     <Section className="position-relative">
        <Container>
          <Section>
            <Row>
                  <Title variant="cardBig" className='mt-2 mb-4'>Jargon is specialized language used by a certain group</Title>
                  <Text className="mb-4 mt-2 w-100">While not always bad, <b>it's often exclusionary</b>. Using jargon is poor practice, and <b>decreases trust because it prevents clarity</b>.</Text>
                  <Text className="mb-4 w-100">After ensuring I understood this jargon, <i>whisper technology</i> was changed to <b><i>customizable privacy settings</i></b>.</Text>
                  <Text className="mb-4 mt-2">Further clarification is given by changing <i>DM's</i> to <i>messaging feature</i>. Removing abbreviations is best practice for accessibility because <b>screen readers don't read abbreviations</b>. Although UX writing can allow for abbreviations of common words, lessening ambiguity and increasing accessibility should outweigh brevity.</Text>
                <Col className='mt-5'>
                  <Title variant="card">Before</Title>
                  <img src={imgPhoto1} alt="Original: whisper technology, privacy is a priority, and messages as well as other users can be hidden in DM's" className="img-fluid w-100" />
                </Col>
                <Col className='mt-5'>
                  <Title variant="card">After</Title>
                  <img src={imgPhoto2} alt="Updated: customizable privacy settings, messaging and others users can be hidden in our messaging feature" className="img-fluid w-100" />
                </Col>
            </Row>
          </Section>
        </Container>
      </Section>
    </>
  );
};

export default JargonBody;