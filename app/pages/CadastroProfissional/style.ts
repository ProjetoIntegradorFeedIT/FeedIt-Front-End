import styled from 'styled-components/native';
import theme from '../../themes/theme';

export const Botao = styled.View`
  background-color: ${theme.COLORS.BLUE_200};
  padding: 10px;
  border-radius: 30px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${theme.COLORS.WHITE};
  width: 250px;
  `;
export const Container = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.BLUE_100};
  align-items: center;
  justify-content: center;
  
  
`;
export const Title = styled.Text`
  color: ${theme.COLORS.BLACK};
  font-size: 40px;
  font-weight: bold;
  margin-left: 20px;
`;
export const Input = styled.TextInput`
  flex-direction: row;
  background-color: ${theme.COLORS.WHITE};
  padding: 10px;
  border-radius: 20px;
  width: 250px;
  border: 2px solid ${theme.COLORS.BLACK};
`;
export const ContainerInput = styled.View`
  gap: 8px;
  margin-top: 40px;
  
`;
export const Botaoconfirma = styled.View`
  margin-top: 40px;
  background-color: ${theme.COLORS.GREEN_100};
  border-radius: 30px;
  justify-content: center;
  border: 2px solid ${theme.COLORS.BLACK};
`;
export const Texto = styled.Text`
  color: ${theme.COLORS.BLACK};
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  border-radius: 30px;
  width: 175px;
  text-align: center;
`;
export const Botaoolho = styled.View`
  position: relative;
  align-items:flex-end;
  margin-right: 20px;
  margin-top: -46px;
  margin-bottom: 10px;
`;
export const Tela = styled.Image`
    height: 100%;
    width: 100%;
    position: absolute;
    
    
`;
export const TitleInput = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-size: 18px;
  font-weight: bold;
  margin-left: 16px;
`;