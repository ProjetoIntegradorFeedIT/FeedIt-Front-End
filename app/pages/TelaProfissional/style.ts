import styled from 'styled-components/native';
import theme from '../../themes/theme';

export const TextoTabela = styled.Text`
  font-size: 16px;
  color: ${theme.COLORS.BLACK};
  text-align: center;
`;

export const TextoTabelaTitulo = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.COLORS.BLACK};
  text-align: center;
`;

export const AreaTela = styled.View`
  flex: 1;
  align-items: center;
  position: absolute;
  position: top;
  background-color: ${theme.COLORS.BLUE_100};
`;

export const TelaFundo = styled.Image`
  height: 100%;
  width: 100%;
  resizeMode: cover;
  position: absolute;
`;

export const TelaPacientes = styled.View`
  width: 84%;
  height: 52%;
  border: 1px;
  background-color: ${theme.COLORS.WHITE};
`;

export const InputID = styled.TextInput`
  background-color: ${theme.COLORS.WHITE};
  padding: 8px;
  border: 20px;
  width: 200px;
  align-self: flex-start;
  border: 2px solid ${theme.COLORS.BLACK};
;`

export const ContainerInput = styled.View`
  gap: 8px;
  margin-top: 40px;
  width: 84%;
;`

export const Title = styled.Text`
  color: ${theme.COLORS.BLACK};
  font-size: 40px;
  font-weight: bold;
  align-items: center;
  padding: 10px;
;`

export const BotaoAdicionar = styled.TouchableOpacity`
  background-color: ${theme.COLORS.GREEN_100};
  border-radius: 30px;
  align-items: center;
  width: 80px;
  border: 2px solid ${theme.COLORS.BLACK};
;`

export const BotaoContainer = styled.View`
  position: absolute;
  right: 10px;
  justify-content: center;
`;

export const TitleMenor = styled.Text`
  color: ${theme.COLORS.BLACK};
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  border-radius: 30px;
  width: 175px;
  text-align: center;
;`

export const Texto = styled.Text`
  color: ${theme.COLORS.BLACK};
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 30px;
  width: 175px;
  text-align: center;
;`
