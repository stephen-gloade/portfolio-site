import SideBar from "./SideBar"
import styled from "styled-components"
import Typewriter from 'typewriter-effect';
import './home.css'
const Home = () => {
    return (
        <PageWrap>
            <SideBar/>
            <MainWrap>
                {/* <H1Typewriter
                    options={{
                    strings: ['Hello', 'World'],
                    autoStart: true,
                    loop: true,
                    }}
                /> */}
                <Typewriter 
                onInit={(typewriter) => {
                    typewriter.typeString(`<h1 style="display: inline; font-family: 'Fira Code Light';">console.log("Hello World!");</h1>`)
                    .pauseFor(500)
                    .deleteChars(15)
                    .typeString(`<h1 style="display: inline; font-family: 'Fira Code Light';">My name is <span style="font-family: 'Fira Code Bold';">Stephen Gloade</span>");</h1>`)
                    .pauseFor(200)
                    .typeString('<h1 style="opacity: 0;">|</h1>')
                    .pauseFor(200)
                    .typeString('<h1 style="opacity: 0;">|</h1>')
                    .pauseFor(200)
                    .pasteString('<h1>I am a Full-Stack software developer with experience in JavaScript, React, and Node.js</h1>')
                    .start()
                    }}
                options={{
                    // strings: ['Hello', 'World'],
                    // autoStart: true,
                    cursor: '|',
                    delay: 75,
                    loop: false,
                    cursorClassName: 'TypewriterCursor'
                    // stringSplitter()
                    }}
/>
            </MainWrap>
        </PageWrap>
    )
}

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