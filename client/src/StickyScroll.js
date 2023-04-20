// import React from "react";
// import { Controller, Scene } from "react-scrollmagic";
// import { Tween } from "react-gsap";
// import './StickyScroll.css'
// import styled from "styled-components";


// const StickyScroll = () => {
//   const sections = [
//     {
//       id: 1,
//       background: "#3498db",
//       content: (
//         <div>
//           <h2>Section 1</h2>
//           <p>Section 1 content goes here.</p>
//         </div>
//       ),
//     },
//     {
//       id: 2,
//       background: "#f1c40f",
//       content: (
//         <div>
//           <h2>Section 2</h2>
//           <p>Section 2 content goes here.</p>
//         </div>
//       ),
//     },
//     {
//       id: 3,
//       background: "#e67e22",
//       content: (
//         <div>
//           <h2>Section 3</h2>
//           <p>Section 3 content goes here.</p>
//         </div>
//       ),
//     },
//     // Add more sections if needed
//   ];
//   return (
//     <Container className="container">
//       <Controller>
//         {sections.map((section, index) => (
//           <Scene
//             key={index}
//             triggerHook="onLeave"
//             duration="100%"
//             pin
//           >
//             <Tween>
//               <StickyDiv className="sticky-div"
//           style={{
//             backgroundColor: section.background,
//           }}>
//                 {section.content}
//               </StickyDiv>
//             </Tween>
//           </Scene>
//         ))}
//       </Controller>
//     </Container>
//   );
// };

// const StyledScene = styled(Scene)`

// `

// const ScrollingContent = styled.div`
// height: 1000px; /* adjust this value according to your content */
// background-color: #f0f0f0;
// display: flex;
// justify-content: center;
// align-items: center;
// `

// const StickyDiv = styled.div`
// .sticky-div {
// width: 100%;
// height: 100%; /* adjust this value according to your content */
// background-color: #3498db;
// position: absolute;
// top: 0;
// display: flex;
// align-items: center;
// justify-content:center;
// }
// `

// const Container = styled.div`
// position: relative;
// `

// export default StickyScroll;

// import React from "react";
// import { Controller, Scene } from "react-scrollmagic";
// import { Tween } from "react-gsap";
// import styled from "styled-components";

// const StickyScroll = () => {
//   const sections = [
//     {
//       id: 1,
//       background: "#3498db",
//       content: (
//         <div>
//           <h2>Section 1</h2>
//           <p>Section 1 content goes here.</p>
//         </div>
//       ),
//     },
//     {
//       id: 2,
//       background: "#f1c40f",
//       content: (
//         <div>
//           <h2>Section 2</h2>
//           <p>Section 2 content goes here.</p>
//         </div>
//       ),
//     },
//     {
//       id: 3,
//       background: "#e67e22",
//       content: (
//         <div>
//           <h2>Section 3</h2>
//           <p>Section 3 content goes here.</p>
//         </div>
//       ),
//     },
//     // Add more sections if needed
//   ];

//   return (
//     <Container className="container">
//       <Controller>
//         {sections.map((section, index) => (
//           <Scene
//             key={index}
//             triggerHook="onLeave"
//             duration="100%"
//             pin
//           >
//             <Tween>
//               <StickyDiv
//                 style={{
//                   backgroundColor: section.background,
//                 }}
//               >
//                 {section.content}
//               </StickyDiv>
//             </Tween>
//           </Scene>
//         ))}
//       </Controller>
//     </Container>
//   );
// };

// const StickyDiv = styled.div`
//   width: 100%;
//   height: 100vh;
//   position: absolute;
//   top: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Container = styled.div`
//   position: relative;
// `;

// export default StickyScroll;

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
        <div>
          <h2>Section 1</h2>
          <p>Section 1 content goes here.</p>
        </div>
      ),
    },
    {
      id: 2,
      background: "#f1c40f",
      content: (
        <div>
          <h2>Section 2</h2>
          <p>Section 2 content goes here.</p>
        </div>
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
