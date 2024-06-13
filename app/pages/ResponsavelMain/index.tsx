import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { View, ScrollView } from "react-native";
import { useState } from "react";
import { Container, Tela, SubTitulo, PopUpArea, NomeR, Botao, AddCriancaBotao, AddCriancaBotaoTexto } from "./style";
import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// imagens---------------------------------------------
const Background = require('../../../assets/nuvens.png');
// -----------------------------------------------------
// Componentes-----------------------------------------
import Acordeao from "../../components/Acordeao/Index";
import Spinner from "../../components/Spinner/Index";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
// -----------------------------------------------------

export default function ResponsavelMain({navigation}: any) {
    // Variaveis-------------------------------------------
    const [criancas, setCriancas] = useState(false);
    const [id_user, setIdUser] = useState('');
    const [estaTela, setEstaTela] = useState(true);
    // -----------------------------------------------------
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
    // Funções---------------------------------------------
    function validate(){
        getObject('usuario').then((value) => {
          if(value === null){
            navigation.navigate('Login');
          }
          if(value.finalizou_crianca === "0"){
            navigation.navigate('CadastroCrianca');
          }
          else{
            setIdUser(value.id_usuario);
            getCriancas(value.id_usuario);
          }
        });
      };

    function getCriancas(id: any){
        axios.get('https://www.gmerola.com.br/feedit/api/responsavel/listar_criancas/' + id)
        .then(response => {
            setCriancas(response.data);
            attCriancas();
        });
    }
    function AddCrianca(){
        navigation.navigate('CadastroCrianca');
    }
    function irTelaCriancas(id_crianca: any){
      setEstaTela(false);
      getObject('usuario').then((value) => {
        let all = {...value, id_crianca: id_crianca};
        storeObject('usuario', all);
        navigation.navigate('CriancaMain');
      });
    };
    // -----------------------------------------------------
    // useEffects-------------------------------------------
    useEffect(() => {
        validate();
    }, []);
    // -----------------------------------------------------
    // Loop------------------------------------------------
    function attCriancas(){
        setTimeout(() => {
          if (estaTela){
            console.log(estaTela);
            validate();
          }
        }, 10000);
    };
    // -----------------------------------------------------

    return (
        <Container>
            <Tela source={Background}/>
            <NomeR>Responsável</NomeR>
            <SubTitulo>Suas Crianças</SubTitulo>
            <ScrollView style={{paddingHorizontal: 4}}>
                {criancas ?
                Object.entries(criancas).map(([key, value]) => (
                    <Acordeao key={key} criancaNome={value.nome_crianca} missoes={value.missao} id={value.id_crianca} func={() => irTelaCriancas(value.id_crianca)}/>
                ))
                :
                <View style={{justifyContent: "center", alignItems: 'center', width: '100%'}}>
                    <Spinner/>
                </View>
                }
            </ScrollView>
            <View style={{marginVertical: 12}}>
                <AddCriancaBotao>
                    <AddCriancaBotaoTexto onPress={() => AddCrianca()}>Adicionar Criança</AddCriancaBotaoTexto>  
                </AddCriancaBotao>
            </View>
        </Container>
    );
}