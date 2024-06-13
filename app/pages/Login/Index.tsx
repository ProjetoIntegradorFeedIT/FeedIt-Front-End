import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import { AreaTela, ContainerInput, Title, TelaFundo, Input, BotaoEntrar, Texto, TitleInput, BotaoOlho, ViewInput, InputSenha } from './style';
import theme from '../../themes/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const background = require('../../../assets/nuvens.png');

export default function Login({ navigation }: any) {

    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [MostrarSenha, setMostrarSenha] = useState(false);
    const [IconeOlho, setIconeOlho] = useState('eye-slash');

    const toggleMostrarSenha = () => {
        setMostrarSenha(!MostrarSenha);
        setIconeOlho(IconeOlho === 'eye-slash' ? 'eye' : 'eye-slash');
    }

    const storeObject = async (key: string, value: any) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
      } catch (e) {
        console.error(e);
      }
    };

    const getObject = async (key: string) => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        console.error(e);
      }
    };

    function verificaNomeEmail(input: string) {
        if (input.includes('@')) {
            setEmail(input);
            setNome('');
        } else {
            setNome(input);
            setEmail('');
        }
    }

    function logar() {
        if ((Nome === '' && Email === '') || Senha === '') {
            alert('Preencha todos os campos');
            return;
        }
        axios.post('https://www.gmerola.com.br/feedit/api/login', {
            nome: Nome,
            email: Email,
            senha: Senha
        }).then(response => {
            storeObject('usuario', response.data);
            if (response.data.tipo === 'C') {
                navigation.navigate('CriancaMain');
            }
            else if (response.data.tipo === 'R') {
                if (response.data.finalizou_crianca === 0) {
                    navigation.navigate('CadastroCrianca');
                }
                navigation.navigate('ResponsavelMain');
            }
            else if (response.data.tipo === 'P') {
                navigation.navigate('TelaProfissional');
            }
        }).catch(error => {
            console.error("Erro ao fazer a requisição: ", error);
            alert('Erro ao logar');
        });
    }

    function validate(){
        getObject('usuario').then((value) => {
          if(value === null){
          }
          else{
            if (value.tipo === 'C') {
                navigation.navigate('CriancaMain');
            }
            else if (value.tipo === 'R') {
                if (value.finalizou_crianca === 0) {
                    navigation.navigate('CadastroCrianca');
                }
                navigation.navigate('ResponsavelMain');
            }
            else if (value.tipo === 'P') {
                navigation.navigate('TelaProfissional');
            }
          }
        });
    };

    useEffect(() => {
        validate();
    }, []);

    return (
        <AreaTela>
            <TelaFundo source={background}/>
            <Title>Login</Title>
            <ContainerInput>
                <TitleInput>Nome ou E-mail</TitleInput>
                <Input 
                    value={Nome ? Nome : Email} 
                    onChangeText={verificaNomeEmail}
                />
                <TitleInput>Senha</TitleInput>
                <ViewInput>
                    <InputSenha 
                        secureTextEntry={!MostrarSenha} 
                        value={Senha} 
                        onChangeText={setSenha}
                    />
                    <BotaoOlho onPress={toggleMostrarSenha}>
                        <FontAwesome5 name={IconeOlho} size={16} color="black"/>
                    </BotaoOlho>
                </ViewInput>
                <View style={{gap: 12}}>
                    <BotaoEntrar onPress={() => logar()}>
                        <Texto>Entrar</Texto>
                    </BotaoEntrar>
                    <Button title="Criar conta" onPress={() => navigation.navigate('CadastroBi')}/>
                </View>
            </ContainerInput>
        </AreaTela>
    );
}
