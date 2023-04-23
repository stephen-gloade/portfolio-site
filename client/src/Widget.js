import styled from "styled-components";
import { useState } from "react";
import './widget.css'
import gridImage from "./grid.jpeg";

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
                            <Li>Developed a website for a sports advising company I co-founded</Li>
                            <Li>Implemented many technologies such as Twilio, Stripe, Paypal, Sendgrid, and Auth0 to create a seamless customer experience</Li>
                            <Li>Became a project lead upon hiring two software developers to assist with future iterations</Li>
                        </Ul>
                        <P>The project is still in the works! <a href="">Github project repo</a></P>
                    </DescriptionWrap>
                </ItemContentWrap>);
        case "bootcamp":
          return <p>Bootcamp content</p>;
        case "wip":
          return <p>W.I.P content</p>;
        default:
          return <p>No content available</p>;
      }
    };

    return (
        <WidgetWrap>
            <H1>Experience</H1>
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
                        <ActiveHeaderItem>W.I.P</ActiveHeaderItem>
                        ) : (
                        <HeaderItem>W.I.P</HeaderItem>
                        )}
                    </Button>
                </StyledUl>
            </HeaderWrap>
            <ContentWrap>{renderContent()}</ContentWrap>
        </WidgetWrap>
    )
}

const Ul = styled.ul`
margin: 20px;
`

const Li = styled.li`

`

const H1 = styled.h1`
font-family: 'Fira Code Light';
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