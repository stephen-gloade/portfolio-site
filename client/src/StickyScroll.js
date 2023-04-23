
import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import styled from "styled-components";
import { textColor, primaryColor } from "./GlobalStyles";
import gridImage from './grid.jpeg';
import { useInView } from 'react-intersection-observer';
import './intersection.css'
import Section2Animation from "./Section2Animation";
import Section2Content from "./Section2Content";
import { GrLocation } from "react-icons/gr";
import { IconContext } from "react-icons/lib";
import { FaGithubAlt, FaLinkedin, FaInstagram } from "react-icons/fa"


const StickyScroll = () => {


  const sections = [
    {
      id: 1,
      background: "#3498db",
      content: (
        <SectionDiv1 className="section1">
          <ContentWrap>
            <Img src={require('./avatar2.jpg')}/>
            <AboutInfo>
              <H2>About</H2>
              <P>My name is Stephen Gloade, a First Nations Canadian who loves working with teams, and pursuing ambitious dreams. 
                I am a Full-Stack web developer currently looking for work.
                I have a passion for design and enjoy making clean looking projects with a focus on usability.
                As a recent Concordia bootcamp graduate I found an immense passion for learning new technologies and diving
                into these opportunities with open arms.
              </P>
              <InfoWrap>
                <IconContext.Provider value={{ size: '30px'}}>
                <P><GrLocation/>Montreal, Canada</P>

                </IconContext.Provider>
              </InfoWrap>
            </AboutInfo>
          </ContentWrap>
        </SectionDiv1>
      ),
    },
    {
      id: 2,
      background: "#f1c40f",
      content: (
        <SectionDiv2 className="section2">
          <ContentWrap2>
            <AnimationWrap>
              <Section2Animation/>
            </AnimationWrap>
            <Section2ContentWrap>
              <Section2Content/>
            </Section2ContentWrap>
          {/* <Section2Img src={require('./laptopGraphic.png')}/> */}
          </ContentWrap2>
        </SectionDiv2>
      ),
    },
    {
      id: 3,
      background: "#e67e22",
      content: (
        <SectionDiv3 className="section3">
          <SkillsWrap>
            <div>
            <H1>Lets</H1>
            <H1Bot>get in touch.</H1Bot>
            </div>
          </SkillsWrap>
          <CardWrap>
          <Card class="card">
          <p>
            Stephen Gloade
          </p>
          <h2>
            Contact Me.
          </h2>
          <GridDiv>
          <IconContext.Provider value={{ size: '100px'}}>
            <GridItem><a  target="_blank" href="https://github.com/stephen-gloade"><FaGithubAlt/></a></GridItem>
            <GridItem></GridItem>
            <GridItem><a target="_blank" href="https://www.linkedin.com/in/stephen-gloade-8751bbb5/"><FaLinkedin/></a></GridItem>
            <GridItem></GridItem>
            <GridItem><a target="_blank" href="https://www.instagram.com/stephen.gloade/"><FaInstagram/></a></GridItem>
            <GridItem></GridItem>
          </IconContext.Provider>
          </GridDiv>
          </Card>
          </CardWrap>

        </SectionDiv3>
      ),
    },
    // Add more sections if needed
  ];

  return (
    <Container className="container">
      {sections.map((section, index) => (
        <SectionWrapper key={index}>
          <Controller>
            <Scene triggerHook="onLeave" duration="100%" pin>
              <Tween>
                <StickyDiv>
                  {section.content}
                </StickyDiv>
              </Tween>
            </Scene>
          </Controller>
        </SectionWrapper>
      ))}
    </Container>
  );
};


const GridItem = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid rgba(0, 0, 0, 0.1); // Optional, to visualize grid items */
  background-color: ${primaryColor};
  display: flex; 
  align-items: center; 
  justify-content: center; 
  box-sizing: border-box;

  :nth-child(odd) {
    border: 2px solid ${textColor}
  }

  :nth-child(even) {
    /* border: 2px solid ${textColor}; */
    background-color: ${textColor};
  }

`

const GridDiv = styled.div `
display: grid;
/* gap: 5px; */
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
width: 100%;
height: 80%;


`

const CardWrap = styled.div `
display: flex;
align-items: center;
justify-content: center;
width: 50%;
height: 100%;
padding: 30px;
`

const H1 = styled.h1 `
font-size: 40px;
`

const H1Bot = styled.h1 `
font-size: 40px;
border-bottom: 1px solid ${textColor};
width: fit-content;
`

const Skills = styled.div `
display: flex;
flex-direction: column;
width: 30%;
border: 1px solid red;
height: 100%;
`

const SkillsWrap = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
align-items: center;
`


const InfoWrap = styled.div `

`

const H2 = styled.h2`
border-bottom: 1px solid ${textColor};

`
const P = styled.p`

`

const AboutInfo = styled.div`
display: flex;
flex-direction: column;
`

const Img = styled.img`
border-radius: 50%;
width: 300px;
height: 300px;
`

const ContentWrap = styled.div`
display: flex;
width: 80%;
@media (max-width: 768px) {
    flex-direction: column;
  }

`

const ContentWrap2 = styled.div`
/* background-image: url(${gridImage}); */
display: flex;
justify-content: space-evenly;
width: 100%;
height: 60%;
`

const AnimationWrap = styled.div`
height: 100%;
width: 48%;
@media (max-width: 768px) {
    display: none;
  }

`

const Section2ContentWrap = styled.div `
height: 100%;
width: 48%;
@media (max-width: 768px) {
    width: 100%;
  }
`

const Card = styled.div`
background-color: ${primaryColor};
display: block;
width: 80%;
height: 50%;
min-height: 90px;
border: 3px solid #E5D9B6;
padding: 15px;
/* margin: calc(50vh - 30px) auto 0 auto; */
box-shadow: 10px -10px 0 -3px ${primaryColor}, 10px -10px #A4BE7B,
      20px -20px 0 -3px ${primaryColor}, 20px -20px #5F8D4E, 
      30px -30px 0 -3px ${primaryColor}, 30px -30px ${textColor}, 
      40px -40px 0 -3px ${primaryColor}, 40px -40px #263A29; 
transition: box-shadow 1s, top 1s, left 1s;
position: relative;
top: 0;
left: 0;

:hover {
  top: -40px;
  left: 40px;
  box-shadow: 0 0 0 -3px #fff, 0 0 0 0 #1FC11B,
      0 0 0 -3px #fff, 0 0 0 0 #FFD913,
      0 0 0 -3px #fff, 0 0 0 0 #FF9C55,
      0 0 0 -3px  #fff, 0 0 0 0 #FF5555;
}
`


const SectionDiv1 = styled.div`
background-color: ${primaryColor};
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
border-bottom: 1px solid ${textColor};


`

const SectionDiv2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${primaryColor};
height: 100%;
width: 100%;
border-top: 1px solid ${textColor};


`

const SectionDiv3 = styled.div`
display: flex;
background-color: ${primaryColor};
height: 100%;
width: 100%;
border-top: 1px solid ${textColor};

`

const SectionWrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const StickyDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${textColor};
  padding-bottom: 50px;
`;

const Container = styled.div`
  position: relative;
`;

export default StickyScroll;
