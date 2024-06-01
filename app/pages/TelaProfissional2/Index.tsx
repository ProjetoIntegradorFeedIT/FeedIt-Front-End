import { Keyboard, Text} from 'react-native';
import { AreaTela, Title, TitleMenor, TelaFundo, StatsAlimentos, Texto} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PieChart from 'react-native-pie-chart'
import React, { useState } from 'react';

export default function TelaProfissional2({navigation}: any) {

    return (
        <AreaTela>
            <Title>Nome do paciente</Title>
            <PieChart 
                widthAndHeight={100} 
                series={[123, 321, 123, 789, 537]} 
                sliceColor={['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00']}/>
            <TitleMenor>Alimentos ingeridos: 0</TitleMenor>
            <StatsAlimentos>
                <Texto>Frutas: 0</Texto>
                <Texto>Vegetais e Folhas: 0</Texto>
                <Texto>Carnes e Ovos: 0</Texto>
                <Texto>Cereais: 0</Texto>
                <Texto>Tubérculos: 0</Texto>
                <Texto>Pão e Raízes: 0</Texto>
                <Texto>Legumes: 0</Texto>
                <Texto>Leite e Laticínios: 0</Texto>
                <Texto>Doces: 0</Texto>
                <Texto>Petiscos: 0</Texto>
                <Texto>Fungos: 0</Texto>
            </StatsAlimentos>
        </AreaTela>
    );
}