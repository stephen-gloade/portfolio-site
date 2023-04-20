
import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import styled from "styled-components";
import { textColor } from "./GlobalStyles";

const StickyScroll = () => {
  const sections = [
    {
      id: 1,
      background: "#3498db",
      content: (
        <SectionDiv1>
          <Card class="card">
          <p>
            Stephen Gloade
          </p>
          <h2>
            Suck my weiny
          </h2>
          </Card>
        </SectionDiv1>
      ),
    },
    {
      id: 2,
      background: "#f1c40f",
      content: (
        <SectionDiv2>
          <h2>Section 2</h2>
          <p>Section 2 content goes here.</p>
        </SectionDiv2>
      ),
    },
    {
      id: 3,
      background: "#e67e22",
      content: (
        <div id="section3">
          <h2>Section 3</h2>
          <p>Section 3 content goes here.</p>
        </div>
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

const Card = styled.div`
background-color: #fff;
display: block;
width: 300px;
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

const SectionDiv1 = styled.div`
background-color: blue;
height: 400px;
width: 600px;

`

const SectionDiv2 = styled.div`
background-color: red;
height: 400px;
width: 600px;

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
