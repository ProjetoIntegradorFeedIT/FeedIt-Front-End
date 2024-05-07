import styled from 'styled-components/native';
import theme from '../../themes/theme';

export const Botao = styled.View`
  flex-direction: row;
  gap: 10px;
  background-color: ${theme.COLORS.BLUE_200};
  padding: 16px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${theme.COLORS.WHITE};
  width: 250px;
`;
export const Texto = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-size: 15px;
  font-weight: bold;
`;
export const Container = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.BLUE_100};
  align-items: center;
  justify-content: center;
`;
export const Tela = styled.Image`
    height: 100%;
    width: 100%;
    position: absolute;
`;
export const Title = styled.Text`
  color: ${theme.COLORS.BLACK};
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 40px;
  padding: 24px;
`;
export const ContainerInput = styled.View`
  gap: 80px;
`;