import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text } from "../../Core";
import imgPhoto from "../../../assets/image/png/empty.png";
import imgPhoto1 from "../../../assets/image/png/meta_brazil.png";
import imgPhoto2 from "../../../assets/image/png/spreadsheet.png";
import imgPhoto3 from "../../../assets/image/png/brazil_before.png";
import imgPhoto4 from "../../../assets/image/png/brazil_after.png";
import imgPhoto5 from "../../../assets/image/png/what_before.png";
import imgPhoto6 from "../../../assets/image/png/what_after.png";


const Alt = () => {
  return (
    <>
    <Section className="position-relative">
      <Container>
        <Row className="mb-2 mt-2 w-100">
          <Title variant="cardBig" className='mt-5'>Alt text and meta descriptions are important but often overlooked</Title>
            <Text className="mb-2 mt-4 w-100">
              Image alt text provides context and clarity for:
                <li>Folks who utilize a screenreader (a tool that speaks text aloud)</li>
                <li>Those with low internet bandwidth (causing images to load slowly or not at all)</li>
            </Text>
        </Row>
        <Row className="mb-2 mt-2 w-100">
            <Text className="mb-4 mt-4 w-100">
              Meta descriptions help SEO because they tell both search engines and humans what they will find on any given page.
            </Text>
        </Row>
        <Row className="mb-4 mt-4 w-100">
          <img src={imgPhoto1} alt="Good search results showing the client's Brazil trip meta descripiton" className="img-fluid w-75"/>
        </Row>
        <Row className="mb-4 mt-2 w-100">
          <Title variant="cardSm">The meta description I wrote for GJEP's trip to Brazil, offering a call to action and utilizing a top keyword, "GE trees"</Title>
        </Row>
        <Row>
          <Text className="mb-2 mt-2 w-100">
              My teammate performed an SEO audit of 7 key pages and found both alt text and meta descriptions were missing. Their findings guided my decision to focus on these 2 areas, but first I had to defend my rationale.
          </Text>
        </Row>
        <Row className="mb-4 mt-4 w-100">
          <Title variant="cardBig" className='mt-5'>Advocating for accessibility and alt text</Title>
            <Text className="mb-4 mt-4 w-100">
              Based on initial user interviews, 2 out of 5 reported not understanding the purpose or context of certain images, despite their high-quality. Because of this, my co-lead was unsure our client would continue to use the current photos.
            </Text>
            <Text className="mb-2 mt-2 w-100">
              Neither of us wanted to waste valuable time, but I was convinced writing alt text was the right call. In an effort to align on this decision (<i>we agreed on the importance of meta descriptions right away</i>), I offered the following reasoning:
            </Text>
        </Row>
        <Row className="mb-4 mt-4 w-100">
          <Text>
              <li>GJEP was co-founded by two professional photographers, so the high-quality images are likely to stay</li>
              <li>Even if the use of these images is discontinued, we will still increase accessibility, inclusion, and gain valuable skills</li>
              <li>Alt text can improve SEO by providing indexable descriptions for images</li>
              <li>Users with low internet bandwidth really won't understand an image if it fails to load</li>
          </Text> 
        </Row>
        <Row className="mb-4 mt-2 w-100">
          <img src={imgPhoto} alt="example of an unloaded or broken image with random numbers at the top of an empty box" className="img-fluid w-25"/>
        </Row>
        <Row className="mb-4 mt-2 w-100">
          <Title variant="cardSm">Images that don't load are confusing, annoying, and distract from a positive user experience</Title>
          <Text className="mb-4 mt-4 w-100">
            We ultimately agreed to spend some time writing alt text. I presented the idea to our client and they were fully behind the decision. 
          </Text>
        </Row>
        <Row className="mb-4 mt-4 w-100">
          <Title variant="cardBig" className='mt-4'>Initiating a content inventory and offering useful instructions</Title>
            <Text className="mb-4 mt-4 w-100">
            <a style={{textDecoration: "underline"}} target="blank" href="https://docs.google.com/document/d/1LrG7X1llGykjVYRvVyees0tICkuGDmEbYBo7c5mx2NM/edit">I created a spreadsheet containing images and important details. </a> This allowed our team to concentrate on composing useful and appropriate alt text.
            </Text>
        </Row>
        <Row className="mb-4 mt-4 w-100">
          <img src={imgPhoto2} alt="Spreadsheet with image and location, proposed alt text, word count, keywords used, and date of implementation" className="img-fluid w-75"/>
        </Row>
        <Row className="mb-4 mt-2 w-100">
          <Title variant="cardSm">I included captions when available, providing context to my team so they could write appropriate alternative text</Title>
        </Row>
        <Row className="mb-4 mt-4 w-100">
            <Text className="mb-2 mt-4 w-100">
              A sample of the alt text instructions:
              <li><b>Don't include "image/photo of".</b> Screenreaders know alt text belongs to an image. Also, don't add alt text to purely decorative images.</li>
              <li><b>Include your keywords, but avoid keyword stuffing.</b> Providing context for the image is our priority, but if it makes sense, include keywords.</li>
            </Text>
        </Row>
        <Row className="mb-4 mt-4 w-100">
          <Text className="mb-2 mt-4 w-100">
              My teammate provided a spreadsheet of our client's <b>top keywords</b>, which we used when appropriate. I went through their findings and pulled out the keywords I felt would be most applicable: 
              <li>gjep</li>
              <li>ge trees</li>
              <li>1971 protest</li>
              <li>step ge trees</li>
              <li>global justice ecology project</li>
              <li>the trees are not what they seem</li>
            </Text>
        </Row>
        <Row className="mb-2 mt-2 w-100">
          <Title variant="cardBig" className='mt-5'>How to respectfully and inclusively describe people</Title>
            <Text className="mb-4 mt-4 w-100">
              Before we could begin crafting copy, we needed to discuss how we would write about people. We wanted to <a style={{textDecoration: "underline"}} target="blank" href="https://ux.shopify.com/the-case-for-describing-race-in-alternative-text-attributes-a093380634f2?gi=131e59691e58"> deflect the narrative that bodies are white and male by default,</a> but there are unfortunately no best practices out there for this.
            </Text>
        </Row>
        <Row className="mb-2 mt-2 w-100">
          <Text className="mb-2 mt-2 w-100">
            <b>I utilized an array of resources, providing suggestions to our client</b>:
            <li>Don't assume race, ethnicity, or gender when describing people</li>
            <li><a style={{textDecoration: "underline"}} target="blank" href="https://www.sandstormdesign.com/blog/website-accessibility-101-5-best-practices-writing-alt-text-images">Do use gender-neutral language.</a> If gender is already identified in the caption, follow that. Otherwise, use neutral terms like "person," "people," or "child" </li>
            <li><a style={{textDecoration: "underline"}} target="blank" href="https://vocaleyes.co.uk/wp-content/uploads/2020/09/Twelve-principles-for-describing-human-characteristics-in-an-Audio-Introduction.pdf">Do describe skin color (versus ethnicity or race) with pale, light, medium, medium-dark, or dark skin tones when relevant.</a> If GJEP has identified someone's ethnicity, feel free to follow suit (examples already in use: Cree Indigenous, Mapuche, Quilombola)</li>
          </Text>
        </Row>
        <Row className="mb-2 mt-2 w-100">
          <Title variant="cardBig" className='mt-5'>"Jaime provided us with a wealth of information on accessibility best practices for writing inclusive image alt text"</Title>
            <Text className="mb-2 mt-4 w-100">
              "<i>When we had concerns and questions about the topic, Jaime provided us with multiple resources, detailed explanations, and personalized recommendations that made me feel that I had received an entire course of the best material on this topic! Her encouragement and teaching style has also built the confidence in our team to fully implement the best practices she suggested.</i>" - Heather Lee, Programs Associate and Lead Global Justice Ecology Project Client
            </Text>
        </Row>
        <Row className="mb-2 mt-2 w-100">
          <Title variant="cardBig" className='mt-5'>Increased SEO scores, but accessibility scores remained the same</Title>
            <Text className="mb-4 mt-4 w-100">
              Lighthouse scores are not the only or best way to measure success with SEO, but merely an easy way to check their pulse. Our client didn't have Google Analytics set up prior to the alt text implementation, so we chose to use Lighthouse to determine if our changes made any difference.
            </Text>
        </Row>
        <Row className='mt-5'>
                <Col>
                  <Title variant="card">Before: SEO scored at 83 for the Brazil page</Title>
                  <img src={imgPhoto3} alt="landing page with tagline" className="img-fluid w-100" />
                </Col>
                <Col>
                  <Title variant="card">After: SEO score went up to 92</Title>
                  <img src={imgPhoto4} alt="landing page providing useful info" className="img-fluid w-100" />
                </Col>
          </Row>
          <Row className='mt-5'>
                <Col>
                  <Title variant="card">Before: SEO was at 83 for the What we do page</Title>
                  <img src={imgPhoto5} alt="landing page with tagline" className="img-fluid w-100" />
                </Col>
                <Col>
                  <Title variant="card">After: SEO increased to 92</Title>
                  <img src={imgPhoto6} alt="landing page providing useful info" className="img-fluid w-100" />
                </Col>
          </Row>
          <Row className="mb-4 mt-2 w-100">
            <Text className="mb-4 mt-4 w-100">
              Although we clearly made an impact on SEO, the accessibility scores only went up by 1%. Regardless, I consider this a win. Numbers and concrete data are important, but so is ensuring <i>everyone</i> has access to the same information. <br/> <br />Now, if an image fails to load or someone who uses a screenreader comes across an iamge, they will have much more underestanding than before - and I consider that a success.
            </Text>
          </Row>
      </Container>
    </Section>
    </>
  );
};

export default Alt;
    
