import styled from "styled-components"
import { Link } from "react-scroll";

const Header = () => {
    return (
        <HeaderWrap>
            <Img src={require('./greenColorLogo.png')} alt="Personal Logo"/>
            <NavWrap>
                <Navul>
                    <NavItem>
                        About
                    </NavItem>
                    <NavItem>
                        Experience
                    </NavItem>
                    <NavItem>
                    <Link to="section3" smooth={true} duration={500} offset={-50}>Contact</Link>
                    </NavItem>
                </Navul>
            </NavWrap>
        </HeaderWrap>
    )

}

const Navul = styled.ul`
display: flex;

`

const Img = styled.img`
width: 100px;
height: 100px;
margin:30px;
transition: transform 1s ease-in-out;

:hover {
transform: rotate(150deg);
}
`

const NavItem = styled.li`
text-decoration: none;
list-style-type: none;
margin: 30px;
font-family: 'Fira Code';
`

const NavWrap = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
`

const HeaderWrap = styled.div`
width: 100vw;
display: flex;
justify-content: space-between;
align-items: center;


`

export default Header