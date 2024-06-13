import { View, Button, Alert } from 'react-native';
import { Container, Title, Input, ContainerInput, BotaoConfirma, Texto, Tela, TitleInput, BotaoOlho, ViewInput, InputSenha } from './style';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddCriancaBotao } from '../ResponsavelMain/style';

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
    const [id_user, setIdUser] = useState('');

    // const functions ----------------------------------------
    const getObject = async (key: string) => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        console.error(e);
      }
    };
    const storeObject = async (key: string, value: any) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
      } catch (e) {
        console.error(e);
      }
    };
    // -------------------------------------------------------

    function validate(){
      getObject('usuario').then((value) => {
        if(value === null){
          navigation.navigate('Login');
        }
        else{
          setIdUser(value.id_usuario);
        }
      });
    };

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
        axios.post('https://www.gmerola.com.br/feedit/api/cadastro/crianca', {
            "id_user": id_user,
            "nome": Nome,
            "senha": Senha
        }).then(response => {
            alert('Criança cadastrada com sucesso');
            getObject('usuario').then((value) => {
              let all = {...value, finalizou_crianca: 1};
              storeObject('usuario', all);
              navigation.navigate('ResponsavelMain');
            });
            navigation.navigate('ResponsavelMain');
        }).catch(error => {
        });
    };

    useEffect(() => {
        validate();
    }, []);
    
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
