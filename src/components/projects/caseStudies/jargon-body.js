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
                  <Title variant="cardBig" className='mt-2 mb-4'>Jargon is specialized language used by a certain group to make communication quicker</Title>
                  <Text className="mb-4 mt-2 w-100">In UX design we use jargon all the time. The abbreviation "UX" is technically jargon, and we use it because "user experience" takes longer to say or type. While jargon isn't <i>bad</i>, <b>it's often exclusionary</b>. Using jargon is poor practice, and <b>decreases trust because it prevents clarity</b>.</Text>
                  <Text className="mb-4 w-100">After ensuring I understood this jargon, <i>whisper technology</i> was changed to <b><i>customizable privacy settings</i></b>.</Text>
                  <Title variant="cardBig" className='mt-2 mb-4'>You win some, you lose some: making a case for alliteration, but ultimately not gaining buy-in</Title>
                  <Text className="mb-4 w-100">"Buy-in" is jargon for "getting everyone to agree with my idea", and this time I wasn't able to convince my team to use my exact wording.</Text>
                  <Text className="mb-4 w-100">I wanted to use "personalized" instead of "customizable" because it's easier to read, and paired with "privacy", it's an alliteration. <b>Alliterations are when we use words with similiar sounds or letters next to each other</b>, such as "personalized privacy".</Text>
                  <Text className="mb-4 w-100">Alliteration can help emphasize specific text, and it's a good way of gaining a users attention.</Text>
                  <Title variant="cardBig" className='mt-2 mb-4'>Clarifying copy and increasing accessibility</Title>
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