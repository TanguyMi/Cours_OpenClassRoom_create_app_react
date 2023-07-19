import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import Logo from '../../assets/dark-logo.png';

const StyledLink = styled(Link)`
    padding: 10px 30px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
      props.$isFullLink &&
      `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;
const HeaderContainer = styled.header`
    height: 100px;
    display: flex;
    align-content:center;
    align-items:center;
    position:relative
`;

const Nav = styled.nav`
   position:absolute;
   right:0
`;
const LogoHeader = styled.img`
     position:relative;
   left:30px;
   bottom: 0px;
   width: 187.629px;
      height: 70px;
      flex-shrink: 0;
`;

function Header() {
      return (
            <HeaderContainer>
                  <LogoHeader src={Logo} alt='Logo'></LogoHeader>
                  <Nav>
                        <StyledLink to='/'>Accueil</StyledLink>
                        <StyledLink to='/freelances'>Profils</StyledLink>
                        <StyledLink to='/survey/1' $isFullLink>Faire le test</StyledLink>
                  </Nav>
            </HeaderContainer>
      );
}

export default Header;
