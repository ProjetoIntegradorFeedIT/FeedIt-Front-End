
import { View, Button } from 'react-native';
import { Container, Title, Input, ContainerInput, BotaoConfirma, Texto, TitleInput, Tela, BotaoOlho, InputSenha, ViewInput } from './style';
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

    const ativarMostrarSenha = () => {
        setMostrarSenha(!MostrarSenha);
        setMostrarConfSenha(!MostrarConfSenha);
      };

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
    function EsconderSenha (){
        
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
                    <TouchableOpacity onPress={verificaCaracteres}><Texto>Criar Perfil</Texto></TouchableOpacity>
                </BotaoConfirma>
                
            </View>
        </Container>
    );
}


