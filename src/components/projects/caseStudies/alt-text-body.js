import React from "react";
import { Container, Row } from "react-bootstrap";

import { Section, Title, Text } from "../../Core";
//import imgPhoto from "../../../assets/image/png/empty.png";
//import imgPhoto1 from "../../../assets/image/png/spreadsheet.png";


const Alt = () => {
  return (
    <>
     <Section className="position-relative">
        <Container>
            <Row className="mb-4 mt-4 w-100">
                <Title variant="cardBig" className='mt-4'>Title</Title>
                <Text>An initial on-page SEO audit of 7 key pages completed by my teammate highlighted 2 major misses: a lack of alt text and nonexistent meta descriptions.</Text> 
            </Row>
            <Row className="mb-4 mt-4 w-100">
                <Title variant="cardBig" className='mt-5'>Accessibility and SEO go hand-in-hand</Title>
                  <Text className="mb-4 mt-4 w-100">
                      Alt text and meta descriptions are important but often overlooked.Image alt text provides context and clarity in multiple situations
                    <li>People who utilize a screenreader which reads the text aloud</li>
                    <li>People with low internet bandwidth where images might not load</li>
                  </Text>
                  <Text className="mb-4 mt-4 w-100">
                      Meta descriptions are important for SEO because they tell both search engines and humans what they will find on any given page. If we want people to click on the page, we need to give them a reason why. 
                  </Text>
            </Row>
            <Row>
                <Title variant="cardBig" className='mt-5'>Advocating for accessibility</Title>
                  <Text className="mb-4 mt-4 w-100">
                    Internally I came up against pushback on the alt text implementation. Based on initial user interviews, my co-lead was unsure our client would continue to use many of the current photos. Some users reported not understanding the purpose or context of select images. <br/>
                  </Text>
                  <Text className="mb-4 mt-4 w-100">
                    My reasoning for moving forward with the alt text implementation was
                    <li>GJEP is co-founded by 2 professional photographers, so the images likely aren’t going anywhere</li>
                    <li>Even if they discontinue the use of many of these images, we will still be increasing accessibility and inclusion in the interim, and gaining valuable skills along the way</li>
                    <li>It can increase our SEO because alt text is indexed by search engines</li>
                    <li>Users with low internet bandwidth really won’t understand the context or purpose of an image if it doesn’t load</li>
                  </Text>
              <Text className="mb-4 mt-4 w-100">My decision to focus on image alt text was confirmed once I brought the idea to our client.</Text>
            </Row>
            <Row className="mb-4 mt-4 w-100">
                <Title variant="cardBig" className='mt-4'>Initiating a content inventory and adding writing instructions</Title>
                  <Text className="mb-4 mt-4 w-100">
                    I compiled a spreadsheet with images and importany information so our team could focus on writing useful and appropriate alt text. I collaborated with a teammate to include instructions, including but not limited to
                    <li><b>Don't include image/photo of in your alt text.</b>It's redudant as it's already assumed your alt text is referring to an image. Oh, and don't add alt text to decorative images.</li>
                    <li><b>Include your keywords, but avoid keyword stuffing.</b>Providing context for the image is the priority, but if it makes sense, include keywords.</li>
                    <li><b>Keep it (relatively) short.</b>Tect should be kept 125 characters or less (17-30 words).</li>
                </Text>
            </Row>
            <Row className="mb-4 mt-4 w-100">
              <Title variant="cardBig" className='mt-4'>How to respectfully and inclusively describe people</Title>
                <Text>Before we could begin writing, decisions regarding how people appear needed to be discussed.</Text>
                <Text>There are unfortunately no best practices out there for this, so I utilized an array of resources, providing suggestions to our client.</Text>
            </Row>
            <Row className="mb-4 mt-4 w-100">
                <Text>text</Text>
            </Row>
            <Row className="mb-4 mt-4 w-100">
            <Title variant="cardBig" className='mt-4'>"Jaime provided us with a wealth of information on accessibility best practices for writing inclusive image alt text"</Title>
                  <Text className="mb-2 mt-4"><i>"When we had concerns and questions about the topic, Jaime provided us with multiple resources, detailed explanations, and personalized recommendations that made me feel that I had received an entire course of the best material on this topic! Her encouragement and teaching style has also built the confidence in our team to fully implement the best practices she suggested. Jaime’s passion in, and enthusiasm towards, her field was extremely evident and has left a lasting impression at GJEP.</i> - <b>Heather Lee, Programs Associate and Lead Global Justice Ecology Project Client</b></Text>
            </Row>
        </Container>
      </Section>
    </>
  );
};

export default Alt;