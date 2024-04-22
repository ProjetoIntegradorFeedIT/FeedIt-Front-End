import styled from 'styled-components/native';
import theme from '../../themes/theme';

export const Container = styled.TouchableOpacity`
    flex: 1;
    background-color: ${theme.COLORS.BLUE_100};
    align-items: center;
    justify-content: center;
`;

export const Tela = styled.Image`
    height: 100%;
    width: 100%;
`;