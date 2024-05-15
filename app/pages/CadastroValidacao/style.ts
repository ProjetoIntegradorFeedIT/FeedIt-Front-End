import styled from 'styled-components/native';
import theme from '../../themes/theme';

export const Title = styled.Text`
  color: ${theme.COLORS.BLACK};
  font-size: 40px;
  font-weight: bold;
  align-items: center;
  margin-bottom: 80px;
`;

export const Texto = styled.Text`
  color: ${theme.COLORS.BLACK};
  font-size: 20px;
  font-weight: bold;
  padding: 4px;
  border-radius: 30px;
  width: 175px;
  text-align: center;
  
`;
export const Input = styled.TextInput`
    background-color: ${theme.COLORS.WHITE};
    padding: 12px;
    width: 24%;
    border: 1px solid ${theme.COLORS.BLACK};
    font-size: 20px;
    text-align: center;
`;

export const Container = styled.View`
flex: 1;
background-color: ${theme.COLORS.BLUE_100};
align-items: center;
justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${theme.COLORS.GREEN_100};
  padding: 4px;
  border-radius: 20px;
  width: 200px;
  align-items: center;
  justify-content: center;
  border: 2px ${theme.COLORS.BLACK};
`;

export const Tela = styled.Image`
    height: 100%;
    width: 100%;
    position: absolute;
`;

export const ContainerInput = styled.View`
  margin: 80px;
  margin-bottom: 160px;
  margin-top: 4px;
  flex-direction: row;
`;
export const SubTitle = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: 16px;
    font-weight: bold;
`;
