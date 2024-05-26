import { View, Button, Alert } from 'react-native';
import { Container, Title, Input, ContainerInput, Botaoconfirma, Texto, Tela, TitleInput, BotaoOlho, ViewInput, InputSenha } from './style';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

// imagens---------------------------------------------
const Background = require('../../../assets/nuvens.png');

// -----------------------------------------------------

export default function CadastroProfissional({navigation}: any) {
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [ConfSenha, setConfSenha] = useState('');
    const [Cpf, setCpf] = useState('');
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
        if (!regex.test(Email)) {
          Alert.alert('Endereço de e-mail inválido');
        }
        if (Senha !== ConfSenha) {
          Alert.alert('Senhas não conferem');
        }
        if (Cpf.length !== 14) {
          Alert.alert('CPF inválido');
        }
      };

    function temCaracteresEspeciais(string: string) {
        return /[^\w\s]/.test(string);
    }

    function formatarCPF(cpf: string): string {
        cpf = cpf.replace(/\D/g, ''); // Remove tudo que não é dígito
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto depois dos primeiros 3 dígitos
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto depois dos segundos 3 dígitos
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um traço antes dos últimos 2 dígitos
        return cpf;
    }

    function handleChangeCpf(text: string) {
        if (text.length <= 14) {
            setCpf(formatarCPF(text));
        }
    }

    function cadastrar(){
        if (Nome === '' || Email === '' || Senha === '' || ConfSenha === '' || Cpf === '') {
            alert('Preencha todos os campos');
        } else {
            validaConta();
        }
        axios.post('https://www.gmerola.com.br/feedit/api/cadastro/responsavel_email', {
            email: Email,
        }).then(response => {
            navigation.navigate('CadastroValidacao', {Nome: Nome, Email: Email, Senha: Senha, Cpf: Cpf});
        }).catch(error => {
        });
    };
    
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
                    <TitleInput>Cpf</TitleInput>
                    <Input value={Cpf} onChangeText={handleChangeCpf} keyboardType="numeric"/>
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
                    <TouchableOpacity onPress={cadastrar}><Texto>Criar Perfil</Texto></TouchableOpacity>
                </Botaoconfirma>
                
            </View>
        </Container>
    );
}
