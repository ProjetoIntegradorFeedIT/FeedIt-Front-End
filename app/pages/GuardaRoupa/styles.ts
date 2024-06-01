import styled from 'styled-components/native';
import theme from '../../themes/theme';

export const Salvar = styled.TouchableOpacity`
    background-color: ${theme.COLORS.GREEN_100};
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
    align-items: center;
    justify-content: center;
    width: 20%;
    border-width: 2px;
    border-color: ${theme.COLORS.BLACK};
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
`;

export const Voltar = styled.TouchableOpacity`
    background-color: ${theme.COLORS.GREEN_100};
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
    align-items: center;
    justify-content: center;
    width: 20%;
    border-width: 2px;
    border-color: ${theme.COLORS.BLACK};
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
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
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 20%;
    z-index: 0;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${theme.COLORS.BLUE_100};
  padding: 0;
`;

export const Topo = styled.View`
    background-color: #C99D5A;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    height: 35%;
    border-width: 20px;
    border-color: ${theme.COLORS.BRONW_100};
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
`;

export const Baixo = styled.View`
    
    flex-direction: column;
    height: 65%;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    z-index: 0;
`;

export const Armazem = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;