import styled from 'styled-components';
import colors from '../../utils/style/color';

export const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`;

export const CardTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`;

export const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;
