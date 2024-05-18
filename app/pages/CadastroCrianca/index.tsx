import { View, Button, Alert } from 'react-native';
import { Container, Title, Input, ContainerInput, BotaoConfirma, Texto, Tela, TitleInput, BotaoOlho, ViewInput, InputSenha } from './style';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

// imagens---------------------------------------------
const Background = require('../../../assets/nuvens.png');

// -----------------------------------------------------

export default function CadastroCrianca({navigation}: any) {
    const [Nome, setNome] = useState('');
    const [Senha, setSenha] = useState('');
    const [ConfSenha, setConfSenha] = useState('');
    const [MostrarSenha, setMostrarSenha] = useState(false);
    const [MostrarConfSenha, setMostrarConfSenha] = useState(false);
    const [IconeOlho, setIconeOlho] = useState('eye-slash');


    const ativarMostrarSenha = () => {
        setMostrarSenha(!MostrarSenha);
        setMostrarConfSenha(!MostrarConfSenha);
        if (IconeOlho === 'eye-slash') {
            setIconeOlho('eye');
        } else {
            setIconeOlho('eye-slash');
        }
      };

    const validaConta = () => {
        const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        if (temCaracteresEspeciais(Nome)) {
            alert('Nome não pode conter caracteres especiais')
        }
        if (Senha !== ConfSenha) {
          Alert.alert('Senhas não conferem');
        }
      };

    function temCaracteresEspeciais(string: string) {
        return /[^\w\s]/.test(string);
    }

    function cadastrar(){
        if (Nome === '' || Senha === '' || ConfSenha === '') {
            alert('Preencha todos os campos');
        } else {
            validaConta();
        }
        axios.post('https://www.gmerola.com.br/feedit/api/cadastro/responsavel_email', {
            Nome: Nome,
            Senha: Senha,
        }).then(response => {
        }).catch(error => {
        });
        navigation.navigate('CadastroValidacao', {Nome: Nome, Senha: Senha});
    };
    
    return (
        <Container>
            <Tela source={Background}/>
            <Title>Cadastro</Title>
            <View>
                <ContainerInput>
                    <TitleInput>Nome da criança</TitleInput>
                    <Input onChangeText={(text) => setNome(text)}/>
                    <TitleInput>Senha da criança</TitleInput>
                    <ViewInput>
                        <InputSenha secureTextEntry={!MostrarSenha} value={Senha} onChangeText={setSenha}/>
                        <BotaoOlho onPress={ativarMostrarSenha}><FontAwesome5 name={IconeOlho} size={16} color="black" /></BotaoOlho>
                    </ViewInput>
                    <TitleInput>Confirmar senha</TitleInput>
                    <ViewInput>
                        <InputSenha secureTextEntry={!MostrarConfSenha} value={ConfSenha} onChangeText={setConfSenha}/>
                        <BotaoOlho onPress={ativarMostrarSenha}><FontAwesome5 name={IconeOlho} size={16} color="black" /></BotaoOlho>
                    </ViewInput>
                </ContainerInput>
            </View>
            <View>
                <BotaoConfirma>
                    <TouchableOpacity onPress={cadastrar}><Texto>Criar Perfil</Texto></TouchableOpacity>
                </BotaoConfirma>
                
            </View>
        </Container>
    );
}
