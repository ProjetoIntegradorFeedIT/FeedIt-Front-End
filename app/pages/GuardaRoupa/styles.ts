import styled from 'styled-components/native';
import theme from '../../themes/theme';

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
    background-color: ${theme.COLORS.GREEN_100};
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    height: 65%;
`;

export const Armazem = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;