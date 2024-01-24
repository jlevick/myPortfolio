import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text } from "../../../components/Core";

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
                  <Text className="mb-4 mt-2 w-100">In UX design we use jargon all the time. The acronym "UX" is technically jargon, and we use it because "user experience" takes longer to say or type. While jargon isn't <i>bad</i>, <b>it's often exclusionary</b>. Using jargon is poor practice, and <b>decreases trust because it prevents clarity</b>.</Text>
                  <Text className="mb-4 w-100">After ensuring I understood what <i>whisper technology</i> was, the copy was changed to <b><i>customizable privacy settings</i></b>.</Text>
                <Col className='mt-5'>
                  <Title variant="card">Before</Title>
                  <img src={imgPhoto1} alt="Original: whisper technology, privacy is a priority, and messages as well as other users can be hidden in DM's" className="img-fluid w-100" />
                </Col>
                <Col className='mt-5 mb-5'>
                  <Title variant="card">After</Title>
                  <img src={imgPhoto2} alt="Updated: customizable privacy settings, messaging and others users can be hidden in our messaging feature" className="img-fluid w-100" />
                </Col>
                  <Title variant="cardBig" className='mt-2 mb-4'>You win some, you lose some: making a case for alliteration, but ultimately not gaining buy-in</Title>
                  <Text className="mb-4 w-100">"Buy-in" is jargon for "getting everyone to agree with my idea", and this time I wasn't able to convince my team to use my exact wording.</Text>
                  <Text className="mb-4 w-100">I wanted to use "personalized" instead of "customizable" because it's easier to read, and paired with "privacy", it's an alliteration. <b>Alliterations are when we use words with similiar sounds or letters next to each other</b>, such as "personalized privacy".</Text>
                  <Text className="mb-4 w-100">Alliteration helps emphasize specific text, and it's often a good way to gain and keep a user's attention.</Text>
                  <Title variant="cardBig" className='mt-2 mb-4'>Testing with a screen reader proved my efforts had increased accessibility</Title>
                  <Text className="mb-4 mt-2">Further clarification was provided by changing <i>DM's</i> to <i>messaging feature</i>. Not all screen readers read abbreviations or acronyms, sometimes making these forms of jargon incoherent. When I tested the initial copy with Voiceover, DM's was relayed as DIMS.</Text>
                  <Text className="mb-4 mt-2">UX writing can allow for the shorthand of common words, especially when we clarify the meaning upfront, but lessening ambiguity and increasing accessibility should outweigh brevity.</Text>
            </Row>
          </Section>
        </Container>
      </Section>
    </>
  );
};

export default JargonBody;