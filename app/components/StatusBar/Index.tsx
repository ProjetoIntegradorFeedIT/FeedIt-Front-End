import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import theme from '../../themes/theme';

// Define a interface para os props (coloque aqui os dados que serão passados para o componente)
interface StatuBarProps {
    statusName: string;
}

export default function StatuBar(props: StatuBarProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>{props.statusName}</Text>
            <View style={styles.barraTotal}>
              <View style={styles.barraNulaEsquerda}>
                <View style={styles.barraPreenchimentoNegativo}></View>
              </View>
              <View style={styles.divisao}></View>
              <View style={styles.barraNulaDireita}>
                <View style={styles.barraPreenchimentoPositivo}></View>
              </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
    },
    paragraph: {
      margin: 0,
      marginTop: 0,
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'left',
      color: theme.COLORS.WHITE,
    },
    barraTotal:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    barraNulaEsquerda: {
      width: 77,
      height: 8,
      backgroundColor: theme.COLORS.BLUE_400,
      paddingVertical: 5,
      paddingHorizontal: 1,
      borderTopLeftRadius: 90,
      borderBottomLeftRadius: 90,
      justifyContent: 'flex-end',
      flexDirection: 'row',
      alignItems: 'center',
    },
    divisao:{
      width: 4,
      height: 12,
      backgroundColor: theme.COLORS.WHITE,
    },
    barraNulaDireita: {
      width: 77,
      height: 8,
      backgroundColor: theme.COLORS.BLUE_400,
      paddingVertical: 5,
      paddingHorizontal: 1,
      borderTopRightRadius: 90,
      borderBottomRightRadius: 90,
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
    },
    barraPreenchimentoPositivo: {
      width: 27,
      height: 6,
      backgroundColor: "green",
      borderTopRightRadius: 90,
      borderBottomRightRadius: 90,
    },
    barraPreenchimentoNegativo: {
      width: 15,
      height: 6,
      backgroundColor: "red",
      borderTopLeftRadius: 90,
      borderBottomLeftRadius: 90,
    },
  });
  