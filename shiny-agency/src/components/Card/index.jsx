import PropTypes from 'prop-types';
import { Component, useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import { useTheme } from '../../utils/hooks';
import DefaultPicture from '../../assets/profile.jpeg';
import { CardWrapper, CardLabel, CardImage, CardTitle } from './style';

// function Card({ label, title, picture }) {
//       const { theme } = useTheme();
//       const [isFavorite, setIsFavorite] = useState(false);
//       const star = isFavorite ? '⭐️' : '';
//
//       return (
//             <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
//                   <CardLabel theme={theme}>{label}</CardLabel>
//                   <CardImage src={picture} alt='freelance' />
//                   <CardTitle theme={theme}>
//                         {star} {title} {star}
//                   </CardTitle>
//             </CardWrapper>
//       );
// }

//// OLD VERSION WITH CLASS

class Card extends Component {
      constructor(props) {
            super(props);
            this.updateInputValue = this.setIsFavorite.bind(this);
            this.state = {
                  isFavorite: false
            };
      }

      setIsFavorite() {
            this.setState({ isFavorite: !this.state.isFavorite });
      }

      render() {
            const { theme, label, picture, title } = this.props;
            const { isFavorite } = this.state;
            const star = isFavorite ? '⭐️' : '';
            return (
                  <CardWrapper theme={theme} onClick={(e) => this.setIsFavorite()}>
                        <CardLabel theme={theme}>{label}</CardLabel>
                        <CardImage src={picture} alt='freelance' />
                        <CardTitle theme={theme}>
                              {star} {title} {star}
                        </CardTitle>
                  </CardWrapper>
            );
      }
}

Card.propTypes = {
      label: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
};

Card.defaultProps = {
      label: '',
      title: '',
      picture: DefaultPicture
};

export default Card;
