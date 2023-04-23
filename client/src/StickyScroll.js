
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

          <Card class="card">
          <p>
            Stephen Gloade
          </p>
          <h2>
            Skills.
          </h2>
          </Card>
          <SkillsWrap>
            <Skills>
              <H1>React</H1>
            </Skills>
            <Skills>
              <H1>React</H1>
            </Skills>
            <Skills>
              <H1>React</H1>
            </Skills>
          </SkillsWrap>
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

const H1 = styled.h1 `

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
justify-content: space-evenly;
width: 100%;
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

`

const Section2ContentWrap = styled.div `
height: 100%;
width: 48%;
`

const Card = styled.div`
margin-top: 100px;
background-color: #fff;
display: block;
width: 100px;
height: 300px;
min-height: 90px;
border: 3px solid #555BFF;
padding: 15px;
/* margin: calc(50vh - 30px) auto 0 auto; */
box-shadow: 10px -10px 0 -3px #fff, 10px -10px #1FC11B,
      20px -20px 0 -3px #fff, 20px -20px #FFD913, 
      30px -30px 0 -3px #fff, 30px -30px #FF9C55, 
      40px -40px 0 -3px #fff, 40px -40px #FF5555; 
transition: box-shadow 1s, top 1s, left 1s;
position: relative;
top: 0;
left: 0;
cursor: pointer;

:hover {
  top: -40px;
  left: 40px;
  box-shadow: 0 0 0 -3px #fff, 0 0 0 0 #1FC11B,
      0 0 0 -3px #fff, 0 0 0 0 #FFD913,
      0 0 0 -3px #fff, 0 0 0 0 #FF9C55,
      0 0 0 -3px  #fff, 0 0 0 0 #FF5555;
}
`

const Section2Img = styled.img`
height: 200px;
width: 200px;
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
flex-direction: column;
align-items: center;
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
