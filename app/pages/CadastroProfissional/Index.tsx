
import { View, Button, Alert } from 'react-native';
import { Container, Title, Input, ContainerInput, BotaoConfirma, Texto, TitleInput, Tela, BotaoOlho, InputSenha, ViewInput } from './style';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// imagens---------------------------------------------
const Background = require('../../../assets/nuvens.png');

// -----------------------------------------------------

export default function CadastroProfissional({navigation}: any) {
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [ConfSenha, setConfSenha] = useState('');
    const [Crm, setCrm] = useState('');
    const [MostrarSenha, setMostrarSenha] = useState(false);
    const [MostrarConfSenha, setMostrarConfSenha] = useState(false);

    const ativarMostrarSenha = () => {
        setMostrarSenha(!MostrarSenha);
        setMostrarConfSenha(!MostrarConfSenha);
    };

    function temCaracteresEspeciais(string: string) {
        return /[^\w\s]/.test(string);
    }

    const validaConta = () => {
        const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        if (temCaracteresEspeciais(Nome)) {
            alert('Nome não pode conter caracteres especiais')
        }
        if (!regex.test(Email)) {
          Alert.alert('Endereço de e-mail inválido');
        }
        if (Senha !== ConfSenha) {
          Alert.alert('Senhas não conferem');
        }
        if (Crm.length !== 10) {
          Alert.alert('CPF inválido');
        }
    };

    function formataCRM(crm: string): string {
        crm = crm.replace(/[^a-zA-Z0-9-]/g, '');
        crm = crm.replace(/(\d{7})(\d{1,2})$/, '$1-$2'); // Coloca um traço antes dos últimos 2 dígitos
        return crm;
    }

    function cadastrar(){
        if (Nome === '' || Email === '' || Senha === '' || ConfSenha === '' || Crm === '') {
            alert('Preencha todos os campos');
        } else {
            validaConta();
        }
        axios.post('https://www.gmerola.com.br/feedit/api/cadastro/profissional', {
            crm: Crm,
            nome: Nome,
            email: Email,
            senha: Senha
        }).then(response => {
            alert(response.data.message)
            navigation.navigate('Login')
        }).catch(error => {
            alert(error.response.data.message)
        });
    };

    return (
        <Container>
            <Tela source={Background}/>
            <View>
                <Title>Cadastro</Title>
                
                <ContainerInput>
                    <TitleInput>Nome</TitleInput>
                    <Input value={Nome} onChange={(event) => setNome(event.nativeEvent.text)}/>
                    <TitleInput>Email</TitleInput>
                    <Input value={Email} onChange={(event) => setEmail(event.nativeEvent.text)}/>
                    <TitleInput>CRM</TitleInput>
                    <Input maxLength={10} value={Crm} onChange={(event) => setCrm(formataCRM(event.nativeEvent.text))}/>
                    <TitleInput>Senha</TitleInput>
                    <ViewInput>
                        <InputSenha secureTextEntry={!MostrarSenha} value={Senha} onChangeText={setSenha}/>
                        <BotaoOlho onPress={ativarMostrarSenha}><FontAwesome5 name="eye" size={16} color="black" /></BotaoOlho>
                    </ViewInput>
                        <TitleInput>Confirmar senha</TitleInput>
                    <ViewInput>
                        <InputSenha secureTextEntry={!MostrarConfSenha} value={ConfSenha} onChangeText={setConfSenha}/>
                        <BotaoOlho onPress={ativarMostrarSenha}><FontAwesome5 name="eye" size={16} color="black" /></BotaoOlho>
                    </ViewInput>
                    
                </ContainerInput>
            </View>
            <View>
                <BotaoConfirma>
                    <TouchableOpacity onPress={() => {
                        cadastrar();
                    }}><Texto>Criar Perfil</Texto></TouchableOpacity>
                </BotaoConfirma>
                
            </View>
        </Container>
    );
}


