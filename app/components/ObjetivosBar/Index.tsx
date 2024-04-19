import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import theme from '../../themes/theme';

// Define a interface para os props (coloque aqui os dados que serão passados para o componente)
interface ObjetivosBarProps {
    objetivoName: string;
    porcentagem: number;
}

export default function ObjetivosBar(props: ObjetivosBarProps) {
    return (
        <View style={styles.container}>
            <View style={styles.texto}>
                <Text style={styles.paragraph}>{props.objetivoName}</Text>
            </View>
            <View style={styles.barras}>
                <View style={styles.barraNula}>
                    <View style={styles.barraPreenchimento}></View>
                </View>
                <Text style={{color: theme.COLORS.WHITE}}>0/{props.porcentagem}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 4,
      width: '75%',
    //   backgroundColor: theme.COLORS.BLUE_200,
    },
    barras: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    texto: {
        width: '100%',
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
      width: 200,
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
  