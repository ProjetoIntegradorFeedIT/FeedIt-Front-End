
import { View, Button, Alert } from 'react-native';
import { Container, Title, Input, ContainerInput, Botaoconfirma, Texto, Tela, TitleInput, BotaoOlho, ViewInput, InputSenha } from './style';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

// imagens---------------------------------------------
const Background = require('../../../assets/nuvens.png');

// -----------------------------------------------------

export default function CadastroProfissional({navigation}: any) {
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
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

    const handlePress = () => {
        navigation.navigate('NavegacaoTestes');
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
      };

    function temCaracteresEspeciais(string: string) {
        return /[^\w\s]/.test(string);
    }

    // function verificaCaracteres(){
    //     if (temCaracteresEspeciais(Nome)) {
    //         alert('Nome não pode conter caracteres especiais')
    //     }
    // };
    
    return (
        <Container>
            <Tela source={Background}/>
            <Title>Cadastro</Title>
            <View>
                
                <ContainerInput>
                    <TitleInput>Nome</TitleInput>
                    <Input onChangeText={(text) => setNome(text)}/>
                    <TitleInput>Email</TitleInput>
                    <Input value={Email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none"/>
                    <TitleInput>Senha</TitleInput>
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
                <Botaoconfirma>
                    <TouchableOpacity onPress={validaConta}><Texto>Criar Perfil</Texto></TouchableOpacity>
                </Botaoconfirma>
                
            </View>
        </Container>
    );
}


