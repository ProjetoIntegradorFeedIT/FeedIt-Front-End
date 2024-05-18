import styled from 'styled-components/native';
import theme from '../../themes/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.BLUE_100};
  
`;

export const SubTitulo = styled.Text`
    color: ${theme.COLORS.BLACK};
    font-size: 24px;
    font-weight: bold;
    align-items: center;
    align-self: center;
    margin-bottom: 4px;
`;

export const NomeR = styled.Text`
  color: ${theme.COLORS.BLACK};
  font-size: 40px;
  font-weight: bold;
  align-self: center;
  margin: 80px;

`;
export const PopUpArea = styled.View`
    border-radius: 12px;
    justify-content: center;
    align-self: center;
    width: 320px;
    flex-direction: row;
    background-color: ${theme.COLORS.BLUE_300};
    width: 240px;

    `;
export const Tela = styled.Image`
    height: 100%;
    width: 100%;
    position: absolute;
`;
export const Texto = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-size: 20px;
  font-weight: bold;
  padding: 4px;
  border-radius: 30px;
  width: 175px;
  text-align: center;
`;
export const Botao = styled.TouchableOpacity`
  align-items: center;
  align-self: center;
  color: ${theme.COLORS.WHITE};

`;