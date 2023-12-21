import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";

import { Section, Title, Text, Button } from "../../Core";
import imgPhoto11 from "../../../assets/image/png/questions.png";
import imgPhoto13 from "../../../assets/image/png/faqbefore.png";
import imgPhoto14 from "../../../assets/image/png/faqafter.png";
import imgPhoto15 from "../../../assets/image/png/words.png";
import imgPhoto16 from "../../../assets/image/png/mentorsupport.png";

const fgwr = () => {
  return (
    <>
     <Section className="position-relative">
        <Container>
            <Row>
                <Title variant="cardBig" className='mt-4'>As long as volunteers were learning useful skills, they could continue to earn their monthly stipend</Title>
                  <Text className="mb-4 mt-4 w-100">As a government-funded project, certain requirements were non-negotiable. Volunteers could no longer serve in their usual setting (schools), and guidelines were changed to allow for new ways of serving. 
                  </Text>
            </Row>
            <Row>
                <Title variant="cardBig" className='mt-4'>Lack of tech experience, or no interest in learning</Title>
                  <Text className="mb-4 mt-4 w-100">As most volunteeres were born in the 1930's-50's, this group had limited experience using technology. Moreso, a few were uninterested in learning to use technology. If I was going to help teach them, I needed to make the process as easy as possible.
                  </Text>
                  <Text className="mb-4 mt-4 w-100">
                    But first, I needed a way for volunteers to practice using technology. Since only 2 out of 11 had a smart device of any kind, <a style={{textDecoration: "underline"}} href="https://www.wyomingnews.com/laramieboomerang/news/local_news/foster-grandparents-of-the-wyoming-rockies-receives-grant/article_8f3964f8-9dfa-5680-999e-14a40422d439.html">we submitted for and were awarded a grant to buy tablets for each of our volunteers.</a>
                  </Text>
            </Row>
            <Row>
                <Title variant="cardBig" className='mt-4'>However, the user guide that came with each tablet was inaccessible</Title>
                  <Text className="mb-4 mt-4 w-100">
                   Full of jargon, heavy paragraphs, and complicated instructions, I rewrote the guide to suit our volunteers - pulling only necessary information and editing for clarification. 
                  </Text>
                  <Text className="mb-4 mt-4 w-100">
                    The original user guide lacked imagery, so I took screenshots to include in my updated user guide. I annotated with arrows and tips to help users better understand their new device.
                  </Text>
                  <Text className="mb-4 mt-4 w-100"> <b>Fun fact:</b> this is when I learned the importance of <b><i>consistent terminology</i></b>. Prior to my first revision, it was pointed out I was using both <i>Click</i> and <i>Tap</i> interchangeably.</Text>
                  <Title variant="cardBig" className='mt-5'>Redesigning content to meet the accessibility of my users</Title>
                  <Text className="mb-4 mt-4 w-100">
                  With an average age of 76, the small print was illegible. Additionally there were volunteers who lacked much formal education, and most of the original content wasn't readable for them. <b>Accessibility was enhanced through</b>:
                  <br />
                  <br />
                    <li>Increasing body font size to 14</li>
                    <li>Using consistent terminology </li>
                    <li>Utilizing plain language at a 6th grade reading level, following plainlanguage.gov guidelines</li>
                    <li>Adding bullet points and short lists to help with comprehension and readability</li>
                    <li>Offering both written and video content to accomodate learning styles and abilities</li>
                  </Text>
            </Row>
            <Row>
                <Title variant="cardBig" className='mt-4'>Throughout our 32 weeks, each training was tailored to volunteer's questions and interests</Title>
                <Text className="mb-4 mt-4 w-100">
                  The group was not shy to let me know what they were (or were not!) interested in. One volunteer wanted to see her grandchild and expressed an interest in setting up her own Zoom account. Another volunteer - the oldest at 92 - loved the opera and was delighted to find out about the "Nightly Met Opera" livestream.
                </Text>
                <Text>
                  I began was basics such as how to use Gmail and Zoom, and the remaining were based on user needs and wants:
                  <br /> <br /> 
                    <li>Intro to Gmail</li>
                    <li>Intro to Zoom, parts 1 and 2</li>
                    <li>Common Tech Terms</li>
                    <li>Common Tech Symbols</li>
                    <li>Intro to Youtube</li>
                    <li>Intro to On-Screen Keyboards</li>
                    <li>What are Internet Cookies?</li>
                    <li>How and Why to Install Updates</li>
                    <li>How to Listen to Podcasts</li>
                    <li>How to Sign Up for a Zoom Account</li>
                    <li>...in addition to many others</li>
                </Text>
            </Row>
            <Row>
                <Title variant="cardBig" className='mt-4'>To increase participation and offer unique content, I invited guest speakers</Title>
                <Text className="mb-4 mt-4 w-100">
                 Our volunteers were thrilled to connect with the outside world, and reported feeling quite special when others wanted to share time with them. Our guest speakers spoke to their unique areas of interest:
                 <br /> <br />
                    <li>AARP: Caregiving for Others and Yourself</li>
                    <li>Dr. Mary Moreno, Local Physician: Benefits of Telehealth and Pro Tips</li>
                    <li>Bernard Stein, UW Professor: Senior Economics, parts 1 and 2</li>
                    <li>Jackie Walker, Retired UW Professor: Internet Safety and Phishing Scams</li>
                    <li>...to name a few!</li>
                  </Text>
            </Row>
            <Row className="mb-4 mt-4 w-100">
              <div>
                <Title variant="cardBig" className='mt-4'>Surveying volunteers allowed me to tailor lessons specifically to their needs</Title>
              </div>
            </Row>
            <Row className="mb-4 mt-4 w-100">
              <div>
                <Text className="mb-4 mt-4 w-100">
                  During the 7 plus months of training, I sent out 2 anonymous surveys to gain feedback (<i>and yes, we did a training on how to complete an online survey!</i>) Responses helped me understand which topics were too confusing and needed a second training, and which were the most useful. 
                </Text>
              </div>
            </Row>
            <Row>
              <div>
                <Title variant="cardBig" className='mt-4'>2 notable difficulties arose during the process</Title>
                <Text className="mb-4 mt-4 w-100">
                  <li>The need to continuously iterate upon the user guide</li>
                  <li>Resistance to learning technology</li>
                </Text>
                <Text className="mb-4 mt-4 w-100">
                  1. The user guide, originally designed to help volunteers use their tablet, grew into more of a general technology guide. There are notably fewer than desired resources designed specifically for senior aged users. I curated a selection of content suited to older adults, and arranged content under easy-to-understand headings. At first it was difficult to distribute the updated guide, but once volunteers became more familiar with Gmail the process became a breeze.
                </Text>
                <Text className="mb-4 mt-4 w-100">
                 2. Learning new things is not easy. Many volunteers struggled in the beginning, and a couple needed extra support. Through personal training sessions, many phone calls, and refining my ability to translate complex processes and jargon into easily-understood terms, we were able to move through this process together. 
                </Text>
              </div>
            </Row>
            <Row>
              <Title variant="cardBig" className='mt-4'>A whopping 80% increase in attendance in 6 months</Title>
                  <Text className="mb-2 mt-4">Attendance grew steadily and eventually nearly every volunteer in our program was participating in the tech training. <b>Here are a few other highlights</b>:
                  <br /> <br />
                  <li>The program expanded from 5 counties to 8 in 6 months</li> 
                  <li>My phone rang less often and my email inbox got much busier</li>
                  <li>Some volunteers earned a larger monthly stipend than they usually did serving in their original capacity, leading to increased attendance</li>
                  <li>I began receiving attention from senior leadership and was able to share the resources I created and the learnings I had gained to help other programs begin their own technology training</li></Text>
                  <Text className="mb-2 mt-4">The experience was both personally and professionally fulfilling. Witnessing such tremendous growth in a short amount of time made me proud of all the hardwork the volunteers put into learning. Once they were able to return to their schools, they reported feeling more confident working with and relating to students.</Text>
            </Row>
            <Row>
              <Title variant="cardBig" className='mt-4'>"Had Jaime not taught us all how to 'Zoom', many of us would have little to no contact outside our home"</Title>
                  <Text className="mb-2 mt-4">Toward the end of training I sent out a 3rd and final survey, asking how the program personally affected users. <b>Here are a few of their reponses:</b>
                  <br /> <br />
                    <li><i>"Jaime has been put in a position where she has to teach old dogs new tricks so to speak but she never makes us feel stupid because we didn't grow up in a computer or technology oriented era."</i></li>
                    <li><i>"She is able to give the training on a level that is easy to understand (age appropriate for senior adults)."</i></li>
                    <li><i>"Jaime is very understanding and kind and teaches us only what we need to know on a level that is very easy to understand."</i></li>
                  </Text>
            </Row>
        </Container>
      </Section>
    </>
  );
};

export default fgwr;