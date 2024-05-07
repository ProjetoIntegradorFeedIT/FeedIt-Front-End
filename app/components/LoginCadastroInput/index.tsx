import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import theme from '../../themes/theme';

interface CampoInputProps {
    titulo: string;
    input: string;
}

export default function CampoInput(props: CampoInputProps) {
    return (
        
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        gap: 40
    },
    titleInput: {

    },
    input: {
        backgroundColor: theme.COLORS.WHITE,
        padding: 10,
        borderRadius: 20,
        width: 250,
        borderColor: theme.COLORS.BLACK
    }
});