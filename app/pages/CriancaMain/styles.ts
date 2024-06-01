import styled from 'styled-components/native';
import theme from '../../themes/theme';

export const TextoNivel = styled.Text`
    font-size: 12px;
    color: ${theme.COLORS.WHITE};
    font-weight: bold;
    background-color: ${theme.COLORS.BLUE_200};
    border-radius: 90px;
    border-width: 2px;
    border-color: ${theme.COLORS.WHITE};
    padding-left: 4px;
    padding-right: 4px;
`;

export const Nivel = styled.View`
    width: 30%;
    align-items: center;
`;

export const Rodape = styled.View`
    background-color: ${theme.COLORS.WHITE};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5%;
    z-index: 0;
`;

export const Chao = styled.View`
    background-color: #CDB767;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
    z-index: 0;
`;

export const Meio = styled.View` 
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 70%;
    margin-top: 20px;
`;

export const Linha = styled.View`
    width: 100%;
    height: 2px;
    background-color: ${theme.COLORS.BLACK};
`;

export const FechaModalStyle = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    color: ${theme.COLORS.BLACK};
`;

export const MenuSuperior = styled.View`
    margin-horizontal: 10px;
    height: 50%;
    background-color: 'rgba(0, 0, 0, 0.5)';
    border-radius: 30px;
    padding: 10px;
`;

export const BotaoMenuFechado = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: 'rgba(0, 0, 0, 0.6)';
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const BotaoMenuAberto = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${theme.COLORS.BLACK};
    opacity: 0;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const Dinheiro = styled.View`
    flex-direction: row;
    gap: 5px;
    width: 30%;
    height: 60px;
    align-items: center;
    justify-content: flex-end;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${theme.COLORS.BLUE_100};
  padding: 0;
`;

export const Valor = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: ${theme.COLORS.YELLOW_100};
`;

export const Topo = styled.View`
  position: absolute;
  top: 0;
  margin-top: 25px;
  width: 100%;
  height: 140px;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 10px;
  padding-horizontal: 20px;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 16%;
  background-color: #366DFC;
  align-items: center;
  justify-content: flex-start;
`;

export const FooterDetailH = styled.View`
  width: 100%;
  height: 16px;
  background-color: #89AAFF;
`;

export const DisplayElementos = styled.View`
  width: 100%;
  height: 124px;
  flex-direction: row;
`;

export const FooterDetailV = styled.View`
  width: 2px;
  height: 100%;
  background-color: #9CB8FF;
`;

export const FooterEsq = styled.View`
  width: 50%;
  height: 100%;
  background-color: ${theme.COLORS.BLUE_200};
  align-items: center;
`;

export const FooterDir = styled.View`
  width: 50%;
  height: 100%;
  background-color: ${theme.COLORS.BLUE_200};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;