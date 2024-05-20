import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import theme from '../../themes/theme';
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

// Imagem
const IconeMoeda = require('../../../assets/moedas.png');

// Define a interface para os props (coloque aqui os dados que serão passados para o componente)
interface ObjetivosBarProps {
    objetivoName: string;
    tamanho: number;
    progresso: number;
    valor: number;
    tipo: string;
}

export default function ObjetivosBar(props: ObjetivosBarProps) {
    return (
        <View style={styles.container}>
            <View style={styles.texto}>
                <Text style={styles.paragraph}>{props.objetivoName}</Text>
            </View>
            <View style={styles.barras}>
                <View style={styles.barraNula}>
                    <View style={{width: props.progresso === 0 ? 0 : props.progresso/props.tamanho*200, height: 8, backgroundColor: "green", borderRadius: 90}}></View>
                </View>
                <Text style={{color: theme.COLORS.WHITE}}>{props.progresso}/{props.tamanho}</Text>
                <View style={styles.moedas}>
                  <Image source={IconeMoeda} style={{width: 20, height: 20}}/>
                  <Text style={{color: theme.COLORS.WHITE}}>{props.valor}</Text>
                </View>
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
    },
    moedas: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 2,
    }
  });
  