import styled from 'styled-components/native';
import theme from '../../themes/theme';

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

export const StatsAlimentos = styled.View`
  width: 84%;
  height: 48%;
  border: 1px;
  background-color: ${theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  color: ${theme.COLORS.BLACK};
  margin-top: 80px;
  font-size: 40px;
  font-weight: bold;
  align-items: center;
  padding: 10px;
;`

export const TitleMenor = styled.Text`
  color: ${theme.COLORS.BLACK};
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  margin-top: 8px;
  text-align: center;
;`

export const Texto = styled.Text`
  color: ${theme.COLORS.BLACK};
  font-size: 16px;
  font-weight: bold;
  padding: 4px;
  border-radius: 30px;
  width: 175px;
  text-align: left;
;`
