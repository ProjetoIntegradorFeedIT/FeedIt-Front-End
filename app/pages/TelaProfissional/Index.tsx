import { Keyboard, TouchableWithoutFeedback, ScrollView, Text, Alert} from 'react-native';
import { AreaTela, ContainerInput, Title, TelaFundo, InputID, TelaPacientes, BotaoAdicionar, BotaoContainer, TitleMenor, Texto} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { text } from '@fortawesome/fontawesome-svg-core';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Menu = require('../../../assets/menu.png');

export default function TelaProfissional({navigation}: any) {
    const [precionado, setPrecionado] = useState(false);
    const [justify, setJustify] = useState('center');
    const [padding, setPadding] = useState(0);
    const [pacienteID, setPacienteID] = useState('');
    const [nomeDoProfissional, setNomeDoProfissional] = useState('');

    const carregarNomeDoProfissional = async () => {
        try {
            const nomeArmazenado = await AsyncStorage.getItem('nome');
            if (nomeArmazenado !== null) {
                setNomeDoProfissional(nomeArmazenado);
            }
        } catch (error) {
            console.error('Erro ao carregar o nome do profissional:', error);
        }
    };
    carregarNomeDoProfissional();

    function modificaTela(){
        setJustify('flex-start')
        setPrecionado(true)
        setPadding(80)
    }

    return (
        <TouchableWithoutFeedback onPress={() => { 
            Keyboard.dismiss(); 
            setPrecionado(false);
            setJustify('center');
            setPadding(0);
        }}>
            <AreaTela style={{justifyContent: justify, paddingTop: padding}}>
                <TelaFundo/>
                <Title>Olá, {nomeDoProfissional}</Title>
                <TitleMenor>Seus pacientes:</TitleMenor>
                {!precionado ? 
                <TelaPacientes>
                    <ScrollView>
                        <Text style={{fontSize: 60}}>Scroll me plz</Text>
                        <Text style={{fontSize: 60}}>If you like</Text>
                        <Text style={{fontSize: 60}}>Scroll me plz</Text>
                        <Text style={{fontSize: 60}}>If you like</Text>
                        <Text style={{fontSize: 60}}>Scroll me plz</Text>
                        <Text style={{fontSize: 60}}>If you like</Text>
                    </ScrollView>
                </TelaPacientes>
                : <></>
                }
                <ContainerInput>
                    <InputID 
                        value={pacienteID}
                        placeholder='ID do paciente' 
                        onFocus={() => modificaTela()}
                        keyboardType='numeric'
                        onChangeText={(text) => setPacienteID(text)}
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
