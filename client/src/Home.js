import { useState } from "react";
import SideBar from "./SideBar"
import styled from "styled-components"
import Typewriter from 'typewriter-effect';
import './home.css'
import StickyScroll from "./StickyScroll";
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import { IconContext } from "react-icons/lib";
import { Link } from "react-scroll"
import RightSideBar from "./RightSideBar";
import { textColor } from "./GlobalStyles";

const Home = () => {

    const [showPasteString, setShowPasteString] = useState(false);
    const [ showButton, setShowButton ] =useState(false)


    const handleClick = () => {
        setShowPasteString(prevState => !prevState);
    };


    const baseIconStyle = {
        transition: 'transform 0.3s ease',
    };

    const activeIconStyle = {
        transform: 'rotate(90deg)',
    };

    return (
        <PageWrap>
            <SideBarWrapper>
                <SideBar/>
            </SideBarWrapper>
            <MainWrap>
                <TypeWrap>
                <Typewriter 
                onInit={(typewriter) => {
                    typewriter.typeString(`<h1 style="display: inline; font-family: 'Fira Code Light';">console.log("Hello World! 👋");</h1>`)
                    .pauseFor(500)
                    .deleteChars(19)
                    .typeString(`<h1 style="display: inline; font-family: 'Fira Code Light';"><span style="font-family: 'Fira Code Bold';">stephen</span>);</h1>`)
                    .pauseFor(200)
                    .typeString('<h1 style="opacity: 0;">|</h1>')
                    .pauseFor(200)
                    .callFunction(() => {
                        setShowButton(true);
                    })
                    .start()
                    }}
                options={{
                    cursor: '|',
                    delay: 30,
                    loop: false,
                    cursorClassName: 'TypewriterCursor'
                    }}
                />
                {showButton && (
                    <div>
                        <Button onClick={handleClick}>
                        <IconContext.Provider value={{ size: '30px'}}>
                        <IoMdArrowDroprightCircle style={{ ...baseIconStyle, ...(showPasteString ? activeIconStyle : {})}}/>
                        </IconContext.Provider>
                        </Button>
                        <Button onClick={handleClick}>Object</Button>
                    </div>
                )}
                {showPasteString && (
                    <div style={{borderRadius: '25px', margin: '10px', padding: '5px',}}><h1 style={{fontFamily: 'Fira Code Light'}}>
                        <span style={{color: '#576CBC'}}>&#123;</span>
                        <br/><span style={{marginLeft: '30px', color: '#05BFDB'}}>firstName:</span> <span style={{color: '#A4BE7B'}}>"Stephen"</span>,
                        <br/><span style={{marginLeft: '30px', color: '#05BFDB'}}>lastName:</span> <span style={{color: '#A4BE7B'}}>"Gloade"</span>,
                        <br/><span style={{marginLeft: '30px', color: '#05BFDB'}}>status:</span> <span style={{color: '#A4BE7B'}}>418</span>,
                        <br/><StyledLink to="section1" smooth={true} duration={500}>
                        <IconContext.Provider value={{ size: '30px', marginLeft: '30px'}}>
                        <IoMdArrowDroprightCircle/>
                        </IconContext.Provider>
                        </StyledLink><span style={{color: '#05BFDB'}}>about:</span> [<span style={{color: '#A4BE7B'}}>"Full-Stack Web Developer"</span>],
                        <br/><Link to="section2" smooth={true} duration={500}>
                        <IconContext.Provider value={{ size: '30px', marginLeft: '30px'}}>
                        <IoMdArrowDroprightCircle/>
                        </IconContext.Provider>
                        </Link><span style={{color: '#05BFDB'}}>technologies:</span> [<span style={{color: '#A4BE7B'}}>"Node.js", "React", "React Native"</span>],
                        <br/><span style={{color: '#576CBC'}}>&#125;</span>
                    </h1></div>
                )}
                </TypeWrap>
                <StickyScroll/>
            </MainWrap>
            <RightSideWrap>
                <RightSideBar/>
            </RightSideWrap>
        </PageWrap>
    )
}

const StyledLink = styled(Link)`
cursor: pointer;
`

const TypeWrap = styled.div`
height: calc(100vh - 150px);
border-bottom: 1px solid ${textColor};
`

const RightSideWrap = styled.div`
width: 100px;
display: flex;
margin: 10px 30px;

`

const Button = styled.button`
border: none;
text-decoration: none;
font-size: 32px;
cursor: pointer;
background: none;
`

const SideBarWrapper = styled.div`
width: 175px;
margin: 10px 30px;
display: flex;
justify-content:center;

@media (max-width: 768px) {
    display: none;
  }
`

const P  = styled.p `
font-size: 50px;

`

const MainWrap = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

const PageWrap = styled.div`
display: flex;
`

export default Home