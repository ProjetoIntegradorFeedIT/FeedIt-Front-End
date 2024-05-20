import { Button } from 'react-native';
import { AreaTela, ContainerInput, Title, TelaFundo, InputID, TelaPacientes, BotaoAdicionar, BotaoContainer , TitleMenor, Texto, ViewInput } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react';

//const background = require('../../../assets/nuvens.png');

export default function TelaProfissional({navigation}: any) {
    return (
        <AreaTela>
            <TelaFundo/>
            <Title>Olá, Nome</Title>
            <TitleMenor>Seus pacientes:</TitleMenor>
            <TelaPacientes>
                
            </TelaPacientes>
            <ContainerInput>
                <InputID placeholder='ID do paciente'/>
                <BotaoContainer>
                    <BotaoAdicionar>
                        <TouchableOpacity><Texto>Adicionar</Texto></TouchableOpacity>
                    </BotaoAdicionar>
                </BotaoContainer>
            </ContainerInput>
        </AreaTela>
    );
}