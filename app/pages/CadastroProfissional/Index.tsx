
import { Text, View } from 'react-native';
import { Container, Title, Input, ContainerInput, Botaoconfirma, Texto, TitleInput, Tela, Botaoolho } from './style';
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
    const [ConfirmaSenha, setConfirmaSenha] = useState('');

    const handlePress = () => {
        navigation.navigate('NavegacaoTestes');
    }

    function temCaracteresEspeciais(string: string) {
        return /[^\w\s]/.test(string);
    }

    function verificaCaracteres(){
        if (temCaracteresEspeciais(Nome)) {
            alert('Nome não pode conter caracteres especiais')
        }
    };
    

    return (
        <Container>
            <Tela source={Background}/>
            <View>
                <Title>Cadastro</Title>
                
                <ContainerInput>
                    <TitleInput>Email</TitleInput>
                    <Input/>
                    <TitleInput>CRM</TitleInput>
                    <Input onChangeText={(text) => setNome(text)}/>
                    <TitleInput>CPF</TitleInput>
                    <Input/>
                    <TitleInput>Senha</TitleInput>
                    <Input/>
                    <Botaoolho><FontAwesome5 name="eye" size={24} color="black" /></Botaoolho>
                    <TitleInput>Confirmar senha</TitleInput>
                    <Input/>
                    <Botaoolho><FontAwesome5 name="eye" size={24} color="black" /></Botaoolho>
                    
                </ContainerInput>
            </View>
            <View>
                <Botaoconfirma>
                    <TouchableOpacity onPress={verificaCaracteres}><Texto>Criar Perfil</Texto></TouchableOpacity>
                </Botaoconfirma>
                
            </View>
        </Container>
    );
}


