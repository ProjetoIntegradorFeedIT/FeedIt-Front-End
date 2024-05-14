import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button } from 'react-native';
import theme from '../../themes/theme';
import { AreaTela, ContainerInput, Title, TelaFundo, Input, BotaoEntrar, Texto, TitleInput, BotaoOlho, ViewInput, InputSenha } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const background = require('../../../assets/nuvens.png');

export default function Login({navigation}: any) {

    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [MostrarSenha, setMostrarSenha] = useState(false);
    const [IconeOlho, setIconeOlho] = useState('eye-slash');

    const ativarMostrarSenha = () => {
        setMostrarSenha(!MostrarSenha);
        if (IconeOlho === 'eye-slash') {
            setIconeOlho('eye');
        } else {
            setIconeOlho('eye-slash');
      };
    }

    return (
        <AreaTela>
            <TelaFundo source={background}/>
            <Title>Login</Title>
            <ContainerInput>
                <TitleInput>Nome ou E-mail</TitleInput>
                    <Input></Input>
                <TitleInput>Senha</TitleInput>
                <ViewInput>
                    <InputSenha secureTextEntry={!MostrarSenha} value={Senha} onChangeText={setSenha}/>
                    <BotaoOlho onPress={ativarMostrarSenha}><FontAwesome5 name={IconeOlho} size={16} color="black"/></BotaoOlho>
                </ViewInput>
                <Button title="Criar conta" onPress={() => navigation.navigate('Cadastro')}/>
                <BotaoEntrar>
                    <TouchableOpacity><Texto>Entrar</Texto></TouchableOpacity>
                </BotaoEntrar>
            </ContainerInput>
        </AreaTela>
    );
}