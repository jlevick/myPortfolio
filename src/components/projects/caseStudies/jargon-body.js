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
                  <Text className="mb-4 mt-4 w-100">After checking with the client, <i>Whisper Technology</i> was changed to <b><i>Customizable privacy settings</i></b>. Further clarification is provided by changing <i>DM's</i> to <i>messaging feature</i>. <br /> <br />Removing abbreviations is best practice for accessibility. <b>Screen readers don't read abbreviations</b>, they read them as one word. Although UX writing allows for abbreviations of common words, accessibility and inclusion outweigh brevity.</Text>
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
                  <Text className="mb-4 mt-4">Only mentors complete a background check, and existing copy made it sound as though mentees must also undergo a background check, so copy was adjusted to best reflect this.</Text>
                  <Text className="mb-4 mt-4"><i>Safe end-to-end encrypted chats</i> was simplified to <i>Secure communications</i>, with the meaning of "end-to-end encrypted chats" clearly explained in the copy.</Text>
                  <Text className="mb-4 mt-4">The <i>Mentee verification</i> title and copy were added when our client decided to move forward with 2-factor authorization in order to increase safety; I was solely in charge of writing this copy.</Text>
                </div>
            </Row>
          </Section>
        </Container>
      </Section>
    </>
  );
};

export default JargonBody;