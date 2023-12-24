import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";

import { Section, Title, Text, Button } from "../../Core";
import imgPhoto11 from "../../../assets/image/png/questions.png";


const Alt = () => {
  return (
    <>
     <Section className="position-relative">
        <Container>
            <Row>
                <Title variant="cardBig" className='mt-4'>The Global Justice Ecology Project (GJEP) has been around for 20 years, using direct action to defend forests and people from greedy corporations and the threat of genetically engineered (GE) trees</Title>
                <Text>So you can imagine they haven't had much time to devote to increasing the accessibility of their website.</Text> 
            </Row>
            <Row>
                  <Title variant="cardBig" className='mt-5'>Alt text is important - but often overlooked</Title>
                  <Text className="mb-4 mt-4 w-100">
                    
                  </Text>
            </Row>
            <Row>
                  <Title variant="cardBig" className='mt-5'>Limited research</Title>
                  <Text className="mb-4 mt-4 w-100">
                    
                  </Text>
            </Row>
            <Row className="mb-4 mt-4 w-100">
              <div>
                <Title variant="cardBig" className='mt-4'>Now comes the awkward part: describing how people look</Title>
                <Text>Our client wasn't shy to say they felt weird describing how people look...</Text>
              </div>
            </Row>
            
            <Row>
              <div>
                <Title variant="cardBig" className='mt-5'>Following best practices when they don't really exist yet</Title>
              </div>
            </Row>
            <Row>
                <Text>text</Text>
            </Row>
            <Row>
            <Title variant="cardBig" className='mt-4'>"Jaime provided us with a wealth of information on accessibility best practices for writing inclusive image alt text"</Title>
                  <Text className="mb-2 mt-4"><i>"When we had concerns and questions about the topic, Jaime provided us with multiple resources, detailed explanations, and personalized recommendations that made me feel that I had received an entire course of the best material on this topic! Her encouragement and teaching style has also built the confidence in our team to fully implement the best practices she suggested. Jaime’s passion in, and enthusiasm towards, her field was extremely evident and has left a lasting impression at GJEP.</i> - <b>Heather Lee, Programs Associate and Lead Global Justice Ecology Project Client</b></Text>
            </Row>
        </Container>
      </Section>
    </>
  );
};

export default Alt;