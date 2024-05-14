import styled from 'styled-components/native';
import theme from '../../themes/theme';

export const Cima = styled.View`
    background-color: ${theme.COLORS.BLUE_200};
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    height: 5%;
    width: 100%;
`;

export const Direita = styled.View`
    background-color: ${theme.COLORS.BLUE_200};
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    height: 100%;
    width: 50%;
`;

export const Esquerda = styled.View`
    background-color: ${theme.COLORS.BLUE_200};
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    height: 100%;
    width: 50%;
`;

export const Baixo = styled.TouchableOpacity`
    background-color: ${theme.COLORS.BLUE_200};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 16%;
    width: 100%;
    position: absolute;
    bottom: 0;
`;