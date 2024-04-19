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
            <View style={styles.barraNula}>
                <View style={styles.barraPreenchimento}></View>
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
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'left',
      color: theme.COLORS.WHITE,
    },
    barraNula: {
      width: 158,
      height: 10,
      backgroundColor: theme.COLORS.BLUE_400,
      paddingVertical: 5,
      paddingHorizontal: 1,
      borderRadius: 90,
      justifyContent: 'center',
    },
    barraPreenchimento: {
      width: 100,
      height: 8,
      backgroundColor: "green",
      borderRadius: 90,
    }
  });
  