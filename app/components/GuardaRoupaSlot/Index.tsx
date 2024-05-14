import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import theme from '../../themes/theme';
import Icon from '@expo/vector-icons/FontAwesome5'

// Define a interface para os props (coloque aqui os dados que serão passados para o componente)
interface SlotBarProps {
    slotName: string;
}

export default function SlotBar(props: SlotBarProps) {
    return (
        <View>
            <View>
                <Text style={styles.slotName}>{props.slotName}</Text>
            </View>
            <View>
                <Icon name="arrow-left" size={24} color={theme.COLORS.BLACK} />
                <View style={styles.box}></View>
                <Icon name="arrow-right" size={24} color={theme.COLORS.BLACK} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 4,
        width: '75%',
    },
    slotName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.COLORS.WHITE,
        
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: theme.COLORS.RED_100,
    },
});