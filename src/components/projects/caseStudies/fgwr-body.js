import React from "react";
import { Container, Row, Col} from "react-bootstrap";

import { Section, Title, Text} from "../../Core";
import imgPhoto1 from "../../../assets/image/png/zoom.png";
import imgPhoto2 from "../../../assets/image/png/resources.png";
import imgPhoto3 from "../../../assets/image/png/resources2.png";


const AccessibleContent = () => {
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
                  <Text className="mb-4 mt-4 w-100">With most of the volunteers born between the 1930's-50's, this group had limited experience using technology. Moreso, a few were uninterested in learning to use technology. <b>If I was going to help teach them, I needed to make the process as easy as possible</b>.
                  </Text>
                  <Text className="mb-4 mt-4 w-100">
                    But first, I needed a way for volunteers to practice using technology. Since only 2 out of 11 had a smart device of any kind, <a style={{textDecoration: "underline"}} href="https://www.wyomingnews.com/laramieboomerang/news/local_news/foster-grandparents-of-the-wyoming-rockies-receives-grant/article_8f3964f8-9dfa-5680-999e-14a40422d439.html">we submitted for and were awarded a grant to buy tablets for each of our volunteers.</a>
                  </Text>
            </Row>
            <Row>
                <Title variant="cardBig" className='mt-4'>However, the user guide that came with each tablet was inaccessible</Title>
                  <Text className="mb-4 mt-4 w-100">
                   Full of jargon, heavy paragraphs, and complicated instructions. I rewrote the guide to suit our volunteers - pulling only necessary information and editing for clarification. 
                  </Text>
                  <Text className="mb-4 mt-4 w-100">
                    The original user guide lacked imagery, so I took screenshots to include in my updated user guide. I annotated with arrows and tips to help users better understand their new device.
                  </Text>
                  <Text className="mb-4 mt-4 w-100"> <b>Fun fact:</b> this is when I learned the importance of <b><i>consistent terminology</i></b>. Prior to my first revision, it was pointed out I was using both <i>Click</i> and <i>Tap</i> interchangeably. Since I was writing for a tablet, I went with <i>Tap</i>.</Text>
                  <Title variant="cardBig" className='mt-5'>Redesigning content to meet the accessibility of my users</Title>
                  <Text className="mb-4 mt-4 w-100">
                  With an average age of 76, the small print was hard to read. A few volunteers lacked formal education, and most of the original content wasn't accessible to them. <b>Accessibility was enhanced through</b>:
                  <br />
                  <br />
                    <li>Increasing body font size to 14</li>
                    <li>Using consistent terminology</li>
                    <li>Utilizing plain language at a 7th grade reading level, following plainlanguage.gov guidelines</li>
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
                  I began with basics such as how to use Gmail and Zoom, and then tailored trainings based on user needs and wants:
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
                  <div className="d-flex justify-content-center align-items-center w-50 mb-4 mt-4">
                      <img src={imgPhoto1} alt="Zoom screen with six participants, only two faces are visible and the rest have cameras off or are sitting in the dark" className="img-fluid" />
                  </div>
            </Row>
            <Row>
                  <Title variant="cardSm">One of our Zoom training sessions. Out of 11 volunteers, I started with 3 participants and ended with 8.</Title>
            </Row>
            <Row>
                <Title variant="cardBig" className='mt-5'>To increase participation and offer unique content, I invited guest speakers</Title>
                <Text className="mb-4 mt-4 w-100">
                 Our volunteers were thrilled to connect with the outside world, and reported feeling quite special when others wanted to share time with them. Our guest speakers shared about their area of expertise:
                 <br /> <br />
                    <li>Stella M., AARP: Caregiving for Yourself</li>
                    <li>Dr. Mary M., Local Physician: Benefits of Telehealth</li>
                    <li>Bernard S., UW Professor: Senior Economics, parts 1 and 2</li>
                    <li>Jackie W., Retired UW Professor: Internet Safety and Phishing Scams</li>
                    <li>Terri L., UW Office Associate: How to Edit Photos Online</li>
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
                  <Text className="mb-2 mt-4">The experience was both personally and professionally fulfilling. Witnessing such tremendous growth and an increase in tech literacy in a short amount of time was inspiring. Once volunteers were able to return to their schools, they reported feeling more confident working with - and relating to - their students.</Text>
            </Row>
            <Row>
              <Title variant="cardBig" className='mt-4'>"Had Jaime not taught us all how to 'Zoom', many of us would have little to no contact outside our home"</Title>
                  <Text className="mb-2 mt-4">Toward the end of training I sent out a 3rd and final survey, asking how the program personally affected users. <b>Here are a few of their reponses:</b>
                  <br /> <br />
                    <li><i>"There is a big age gap between Jaime and those she serves but she has bridged that gap. I have never noticed Jaime talk down to anyone if they didn't understand something."</i></li>
                    <li><i>"Jaime has been put in a position where she has to teach old dogs new tricks so to speak but she never makes us feel stupid because we didn't grow up in a computer or technology oriented era."</i></li>
                    <li><i>"She is able to give the training on a level that is easy to understand (age appropriate for senior adults)."</i></li>
                    <li><i>"Jaime is very understanding and kind and teaches us only what we need to know on a level that is very easy to understand."</i></li>
                  </Text>
            </Row>
            <Row>
              <Title variant="cardBig" className='mt-4'>Making accessible content doesn't have to be a pain (in fact, it's incredibly rewarding)</Title>
                  <Text className="mb-2 mt-4">This project was one of my earliest forays into creating accessible content and truly focusing on the user experience. I made choices then that I wouldn't now, for example center aligning everything in the guide and using a serif font for headers, both of which are very difficult to read and not best practice.</Text>
                  <Text className="mb-2 mt-4">With a few small changes - and despite the fact I wasn't totally sure what I was doing - people who didn't think they could learn new technology became proficient within 6 months. I still email with some of the volunteers to this day.</Text>
            </Row>
        </Container>
      </Section>
    </>
  );
};

export default AccessibleContent;