import styled from "styled-components"
const RightSideBar = () => {
    return (
        <RightSideBarWrap>
            <H1>S</H1>
            <H1>T</H1>
            <H1>E</H1>
            <H1>P</H1>
            <H1>H</H1>
            <H1>E</H1>
            <H1>N</H1>
            <H1>G</H1>
            <H1>L</H1>
            <H1>O</H1>
            <H1>A</H1>
            <H1>D</H1>
            <H1>E</H1>

        </RightSideBarWrap>
    )
}

const H1 = styled.h1`
transform: rotate(90deg);
margin: 0px;
padding: 0px;
font-size:32px;
font-weight: 700;
`

const RightSideBarWrap = styled.div`
width: 100px;
display: flex;
flex-direction: column;
height: calc(100vh - 250px);
position: fixed;

/* margin: 10px 30px; */
`

export default RightSideBar