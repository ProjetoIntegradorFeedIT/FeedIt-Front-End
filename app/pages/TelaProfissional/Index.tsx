import { Button, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { AreaTela, ContainerInput, Title, TelaFundo, InputID, TelaPacientes, BotaoAdicionar, BotaoContainer , TitleMenor, Texto, ViewInput } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react';

//const background = require('../../../assets/nuvens.png');

export default function TelaProfissional({navigation}: any) {
    const [precionado, setPrecionado] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={() => { 
            Keyboard.dismiss(); 
            setPrecionado(false); 
        }}>
            <AreaTela>
                <TelaFundo/>
                <Title>Olá, Nome</Title>
                <TitleMenor>Seus pacientes:</TitleMenor>
                {!precionado ? 
                <TelaPacientes>
                    {/* Conteúdo da tela de pacientes */}
                </TelaPacientes>
                : <></>
                }
                <ContainerInput>
                    <InputID 
                        placeholder='ID do paciente' 
                        onFocus={() => setPrecionado(true)}
                    />
                    <BotaoContainer>
                        <BotaoAdicionar>
                            <TouchableOpacity><Texto>Adicionar</Texto></TouchableOpacity>
                        </BotaoAdicionar>
                    </BotaoContainer>
                </ContainerInput>
            </AreaTela>
        </TouchableWithoutFeedback>
    );
}
