import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, Modal, Button} from 'react-native';
import theme from '../../themes/theme';

export default function GuardaRoupa({navigation}: any) {
    return (
        <SafeAreaView >
            <Text>Guarda Roupa</Text>
            <Button title="Home" onPress={() => navigation.navigate('Home')}/>
            <Button title="Login" onPress={() => navigation.navigate('Login')}/>
            <Button title="CriancaMain" onPress={() => navigation.navigate('CriancaMain')}/>
        </SafeAreaView>
    )
}