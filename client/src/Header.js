import styled from "styled-components"

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
                        Contact
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