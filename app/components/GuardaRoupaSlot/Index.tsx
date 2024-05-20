import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import theme from '../../themes/theme';
import Icon from '@expo/vector-icons/FontAwesome5';

// Define a interface para os props (coloque aqui os dados que serão passados para o componente)
interface SlotBarProps {
    slotName: string;
    slotImage: any; // Pode ser um número (import de imagem) ou string (URI)
    func1: any; // Função a ser executada ao clicar na seta esquerda
    func2: any; // Função a ser executada ao clicar na seta direita
}

export default function SlotBar(props: SlotBarProps) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.slotName}>{props.slotName}</Text>
            </View>
            <View style={styles.conj}>
                <TouchableOpacity onPress={props.func1}><Icon name="arrow-left" size={24} color={theme.COLORS.BLACK} /></TouchableOpacity>
                <View style={styles.box}>
                    <Image source={{ uri: props.slotImage }} style={{ width: 100, height: 100 }} />
                </View>
                <TouchableOpacity onPress={props.func2}><Icon name="arrow-right" size={24} color={theme.COLORS.BLACK} /></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2%',
    },
    slotName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.COLORS.WHITE,
    },
    box: {
        width: 80,
        height: 80,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: theme.COLORS.BLACK,
        justifyContent: 'center',
        alignItems: 'center',
    },
    conj: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    }
});
