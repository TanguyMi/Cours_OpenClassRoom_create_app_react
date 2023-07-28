import { Component, useState } from 'react';
import { func } from 'prop-types';


const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`;

const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: transparent;
  border-bottom: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  margin-top: 5px;
  margin-bottom: 15px;
`;

function EmailInput({ theme }) {

      const [inputValue, setInputValue] = useState('');

      return (
            <InputWrapper theme={theme}>
                  <StyledLabel theme={theme}>Adresse email</StyledLabel>
                  <StyledInput
                        theme={theme}
                        onChange={(e) => setInputValue(e.target.value)}
                  />
                  {inputValue}
            </InputWrapper>
      );
}


// class EmailInput extends Component {
//       constructor(props) {
//             super(props);
//             this.updateInputValue = this.updateInputValue.bind(this);
//             this.state = {
//                   inputValue: ''
//             };
//       }
//
//       updateInputValue(value) {
//             this.setState({ inputValue: value });
//       }
//
//       render() {
//             return (
//                   <div>
//                         {this.state.inputValue}
//                         <input
//                               onChange={(e) => this.updateInputValue(e.target.value)}
//                         />
//                   </div>
//             );
//       }
// }

export default EmailInput;

