import styled from "styled-components";
import { useState } from "react";
import './widget.css'
import gridImage from "./grid.jpeg";
import { textColor } from "./GlobalStyles";

const Widget = () => {


    const [activeTab, setActiveTab] = useState("dubs");

    const handleClick = (tab) => {
      setActiveTab(tab);
      console.log("Switching to tab:", tab);
    };
  
    const renderContent = () => {
      switch (activeTab) {
        case "dubs":
          return (<ItemContentWrap>
                    <DescriptionWrap>
                        <H1>Dubs Advising</H1>
                        <Ul>
                            <Li>Developed a website for a sports advising company I co-founded using React, Node.js and MongoDB</Li>
                            <Li>Implemented many technologies such as Twilio, Stripe, Paypal, Sendgrid, and Auth0 to create a seamless customer experience</Li>
                            <Li>Became a project lead upon hiring two software developers to assist with future iterations</Li>
                            <Li>Working on an app version via React Native</Li>
                        </Ul>
                        <P>The project is still in the works!</P>
                        <a target="blank" href="https://github.com/stephen-gloade/dubs-advising">Github project repo</a>
                    </DescriptionWrap>
                </ItemContentWrap>);
        case "bootcamp":
          return (<ItemContentWrap>
            <DescriptionWrap>
                <H1>Concordia Bootcamp</H1>
                <Ul>
                    <Li>Graduated from the Concordia University Full-Stack Web Developer Bootcamp</Li>
                    <Li>Learned how to develop web apps using JavaScript, React, Node.js, and MongoDB</Li>
                    <Li>Learned how to self teach concepts and learn new technologies at a rapid pace</Li>
                </Ul>
                {/* <P>The project is still in the works!</P>
                <a target="blank" href="https://github.com/stephen-gloade/dubs-advising">Github project repo</a> */}
            </DescriptionWrap>
        </ItemContentWrap>);
        case "wip":
          return (<ItemContentWrap>
            <DescriptionWrap>
                <H1>Open Source Software</H1>
                <Ul>
                    <Li>While making my projects I learned the importance of open source software and am beyond excited to start contributing</Li>
                    <Li>As I start my journey into OSS contributions I will be updating this portfolio</Li>
                </Ul>
            </DescriptionWrap>
        </ItemContentWrap>);
        default:
          return <p>No content available</p>;
      }
    };

    return (
        <WidgetWrap>
            <HeaderWrap>
                <StyledUl>
                    <Button onClick={() => handleClick("dubs")}>
                    {activeTab === "dubs" ? (
                        <ActiveHeaderItem>Dubs</ActiveHeaderItem>
                        ) : (
                        <HeaderItem>Dubs</HeaderItem>
                        )}
                    </Button>
                    <Button onClick={() => handleClick("bootcamp")}>
                    {activeTab === "bootcamp" ? (
                        <ActiveHeaderItem>Bootcamp</ActiveHeaderItem>
                        ) : (
                        <HeaderItem>Bootcamp</HeaderItem>
                        )}
                    </Button>
                    <Button onClick={() => handleClick("wip")}>
                        {activeTab === "wip" ? (
                        <ActiveHeaderItem>OSS</ActiveHeaderItem>
                        ) : (
                        <HeaderItem>OSS</HeaderItem>
                        )}
                    </Button>
                </StyledUl>
            </HeaderWrap>
            <ContentWrap>{renderContent()}</ContentWrap>
        </WidgetWrap>
    )
}

const Span = styled.span `

`

const Ul = styled.ul`
margin: 20px;
`

const Li = styled.li`
text-align: left;
margin: 10px;
`

const H1 = styled.h1`
font-family: 'Fira Code Light';
margin: 10px;
`
const P = styled.p `

`

const ImgWrap = styled.div`
display: flex;
justify-content: center;
height: 30%;
width: 100%;
`

const DescriptionWrap = styled.div `
display: flex;
flex-direction: column;
width: 100%;
/* background-image: url(${gridImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
`

const Img = styled.img`
height: 100%;
width: 30%;

`

const ItemContentWrap = styled.div `
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
`

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 25px;
`;

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 33%;
border: none;
background: none;
`

const StyledUl = styled.ul `
list-style-type: none;
display: flex;
width: 100%;
justify-content: space-between;

`

const HeaderItem = styled.li`
text-align: center;
margin: 10px 20px;
position: relative;
transition: border-bottom 0.3s ease-in-out;
font-size: 2rem;
cursor: pointer;

border-bottom: 1px solid ${textColor};

&:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #333;
  transition: width 0.3s ease-in-out;
}

&:hover:before {
  width: 100%;
}
`;

const ActiveHeaderItem = styled(HeaderItem)`

&:before {
width: 100%;
}
`;

const HeaderWrap = styled.div `
width: 100%;
`

const WidgetWrap = styled.div`  

display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
height: 100%;
width: 100%;

`

export default Widget;