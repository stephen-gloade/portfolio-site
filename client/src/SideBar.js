import styled from "styled-components";
import { FaGithubAlt, FaLinkedin, FaInstagram } from "react-icons/fa"
import { IconContext } from "react-icons/lib";
import { textColor } from "./GlobalStyles";

const SideBar = () => {
    return (
    <SideWrap>
        <NavWrap>
            <Navul>
                <BorderLeft/>
                <IconContext.Provider value={{ size: '30px'}}>
                    <NavItem>
                        <FaGithubAlt/>
                    </NavItem>
                    <NavItem>
                        <FaInstagram/>
                    </NavItem>
                    <NavItem>
                        <FaLinkedin/>
                    </NavItem>
                </IconContext.Provider>
                <BorderRight/>
            </Navul>
        </NavWrap>
    </SideWrap>
    )
}

const BorderLeft = styled.div`
height: 150px;
border-left: 1px solid ${textColor};
/* border-bottom: 3px dashed #fff; */
`

const BorderRight = styled.div`
height: 150px;
border-right: 1px solid ${textColor};
/* border-top: 3px dashed #fff; */
`

const Navul = styled.ul`
display: flex;
flex-direction: column;

`

const NavItem = styled.li`
color: #fff;
text-decoration: none;
list-style-type: none;
margin: 30px;
/* border-bottom: 1px solid ${textColor}; */

&:nth-child(2) {
    border-top: 1px solid ${textColor};
}

&:nth-child(3) {

}
&:nth-child(4) {
    border-bottom: 1px solid ${textColor};
}

`

const NavWrap = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`

const SideWrap = styled.div`
height: calc(100vh - 250px);
width: 100px;
display: flex;
flex-direction: column;
margin: 10px 30px;



`

export default SideBar;