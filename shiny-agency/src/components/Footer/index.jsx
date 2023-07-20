import { useContext } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import { ThemeContext } from '../../utils/context';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`;

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
`;

function Footer() {
      const { toggleTheme, theme } = useContext(ThemeContext);

      // sans le useContext
      // import de {ThemeContext} from utilis context
      // dans le return
      // <ThemeContext.Consumer>
      // {({toggleTheme, theme }) =>(
      // <FooterContainer>
      //       <NightModeButton onClick={() => toggleTheme()}>
      //             Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      //       </NightModeButton>
      // </FooterContainer>
      // )}
      //
      // </ThemeContext.Consumer>
      return (
            <FooterContainer>
                  <NightModeButton onClick={() => toggleTheme()}>
                        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
                  </NightModeButton>
            </FooterContainer>
      );
}

export default Footer;
