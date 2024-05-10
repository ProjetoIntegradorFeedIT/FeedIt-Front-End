import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, Modal, Button} from 'react-native';
import { Container, Topo, Baixo } from './styles';
import theme from '../../themes/theme';

// Import de componentes
import SlotBar from '../../components/GuardaRoupaSlot/Index';

export default function GuardaRoupa({navigation}: any) {
    return (
        <Container >
            {/* Parte de cima */}
            <Topo>
                <View>
                    <SlotBar slotName="Cabeça"></SlotBar>
                </View>
                <View>
                </View>
            </Topo>
            {/* Parte de Baixo */}
            <Baixo></Baixo>
        </Container>
    )
}