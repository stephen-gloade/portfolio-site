import styled from "styled-components";
import { useState } from "react";
import './styles/widget.css'
import { textColor } from "./GlobalStyles";

const Widget = () => {


    const [activeTab, setActiveTab] = useState("dubs");

    const handleClick = (tab) => {
      setActiveTab(tab);
    };
  
    const renderContent = () => {
      switch (activeTab) {
        case "dubs":
          return (<ItemContentWrap>
                    <DescriptionWrap>
                        <H1>Dubs Advising</H1>
                        <Ul>
                            <Li>Developed a website for a sports advising company I co-founded using React, Flask and PostgreSQL</Li>
                            <Li>Implemented many technologies such as Twilio, Stripe, and Paypal to create a seamless customer experience</Li>
                            <Li>Became a project lead upon hiring two software developers to assist with future iterations</Li>
                            <ConcordiaProjectDiv>
                            <Project target='_blank' href="https://dubsadvising.com/">Dubs Advising</Project>
                            </ConcordiaProjectDiv>
                        </Ul>
                        
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
                <ConcordiaProjectDiv>
                  <Project target='_blank' href="https://github.com/stephen-gloade/dubs-advising">Capstone Project</Project>
                  <Project target='_blank' href="https://github.com/stephen-gloade/ecommerce-project">Ecommerce Website</Project>
                </ConcordiaProjectDiv>
            </DescriptionWrap>
        </ItemContentWrap>);
        case "wip":
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
                        <ActiveHeaderItem>Work</ActiveHeaderItem>
                        ) : (
                        <HeaderItem>Work</HeaderItem>
                        )}
                    </Button>
                    <Button onClick={() => handleClick("bootcamp")}>
                    {activeTab === "bootcamp" ? (
                        <ActiveHeaderItem>Bootcamp</ActiveHeaderItem>
                        ) : (
                        <HeaderItem>Bootcamp</HeaderItem>
                        )}
                    </Button>
                </StyledUl>
            </HeaderWrap>
            <ContentWrap>{renderContent()}</ContentWrap>
        </WidgetWrap>
    )
}

const ConcordiaProjectDiv = styled.div`
display: flex;
width: 100%;
justify-content: center;

`

const Project = styled.a`
margin: 10px;
padding: 20px;
text-decoration: none;
border: 1px solid ${textColor};
transition: all 0.5s ease-out;

&:hover {
  background-color: darkgray;
  cursor: pointer;
}
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

const DescriptionWrap = styled.div `
display: flex;
flex-direction: column;
width: 100%;
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
  border-bottom: 1px solid black;

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
justify-content: space-evenly;
padding-left: 0px;

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
@media (max-width: 767px) {
  width: 90%;
  margin: 0px 10px;
}

`

export default Widget;