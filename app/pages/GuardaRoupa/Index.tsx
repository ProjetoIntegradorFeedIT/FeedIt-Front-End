import React, {useEffect, useState} from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, Modal, Button} from 'react-native';
import { Container, Topo, Baixo, Armazem, Rodape, Chao, Voltar, Salvar } from './styles';
import theme from '../../themes/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import de componentes
import SlotBar from '../../components/GuardaRoupaSlot/Index';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function GuardaRoupa({navigation}: any) {
    // Variáveis ----------------------------------------------
    const [idCrianca, setIdCrianca] = useState(0);
    const [cabeça, setCabeça] = useState(null);
    const [roupa, setRoupa] = useState(null);
    const [cor, setCor] = useState(null);
    const [fundo, setFundo] = useState(null);
    const [listaCabeça, setListaCabeça] = useState([]);
    const [listaRoupa, setListaRoupa] = useState([]);
    const [listaCor, setListaCor] = useState([]);
    const [listaFundo, setListaFundo] = useState([]);
    const [posCabeca, setPosCabeca] = useState(0);
    const [posRoupa, setPosRoupa] = useState(0);
    const [posCor, setPosCor] = useState(0);
    const [posFundo, setPosFundo] = useState(0);
    const [idPet, setIdPet] = useState(0);
    // -------------------------------------------------------
    // Funções -------
    const getObject = async (key: string) => {
        try {
          const jsonValue = await AsyncStorage.getItem(key);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          console.error(e);
        }
      };

    function validate(){
      getObject('usuario').then((value) => {
        if(value === null){
          navigation.navigate('Login');
        }
        else{
          setIdCrianca(value.id_crianca);
          getPersonalizacoes(value.id_crianca);
        }
      });
    };

    const getPersonalizacoes = (id: any) => {
        axios.get('https://www.gmerola.com.br/feedit/api/crianca/personalizacao_pet/' + id)
        .then((response: { data: any; }) => {
            // Manipule a resposta aqui
            console.log(response.data);
            setIdPet(response.data.idPet);
            setListaCabeça(response.data.personalizacoes.Chapeu);
            setListaRoupa(response.data.personalizacoes.Roupa);
            setListaCor(response.data.personalizacoes.Cor);
            // setListaFundo(response.data.Fundo);
            for (let i = 0; i < response.data.personalizacoes.Chapeu.length; i++) {
                if (response.data.personalizacoes.Chapeu[i].id_perso == response.data.chapeu) {
                    setPosCabeca(i);
                    setCabeça(response.data.personalizacoes.Chapeu[i].url);
                }
            }
            for (let i = 0; i < response.data.personalizacoes.Roupa.length; i++) {
                if (response.data.personalizacoes.Roupa[i].id_perso == response.data.roupa) {
                    setPosRoupa(i);
                    setRoupa(response.data.personalizacoes.Roupa[i].url);
                }
            }
            for (let i = 0; i < response.data.personalizacoes.Cor.length; i++) {
                if (response.data.personalizacoes.Cor[i].id_perso == response.data.cor) {
                    setPosCor(i);
                    setCor(response.data.personalizacoes.Cor[i].url);
                }
            }
            // for (let i = 0; i < response.data.Fundo.length; i++) {
            //     if (response.data.Fundo[i].id_perso == response.data.fundo) {
            //         setPosFundo(i);
            //         setFundo(response.data.Fundo[i].url);
            //     }
            // }

        })
        .catch((error: any) => {
            // Manipule o erro aqui
            console.error('Erro ao fazer requisição:', error);
        });
    };

    function trocaPersonalizacao(tipo: string, dir: string) {
        if(tipo == "cabeca"){
            if(dir == "esq"){
                if(posCabeca > 0){
                    setPosCabeca(posCabeca - 1);
                    setCabeça(listaCabeça[posCabeca - 1].url);
                }
                else{
                    setPosCabeca(listaCabeça.length - 1);
                    setCabeça(listaCabeça[listaCabeça.length - 1].url);
                }
            }else{
                if(posCabeca < listaCabeça.length - 1){
                    setPosCabeca(posCabeca + 1);
                    setCabeça(listaCabeça[posCabeca + 1].url);
                }
                else{
                    setPosCabeca(0);
                    setCabeça(listaCabeça[0].url);
                }
            }
        } else if(tipo == "roupa"){
            if(dir == "esq"){
                if(posRoupa > 0){
                    setPosRoupa(posRoupa - 1);
                    setRoupa(listaRoupa[posRoupa - 1].url);
                }
                else{
                    setPosRoupa(listaRoupa.length - 1);
                    setRoupa(listaRoupa[listaRoupa.length - 1].url);
                }
            }else{
                if(posRoupa < listaRoupa.length - 1){
                    setPosRoupa(posRoupa + 1);
                    setRoupa(listaRoupa[posRoupa + 1].url);
                }
                else{
                    setPosRoupa(0);
                    setRoupa(listaRoupa[0].url);
                }
            }
        } else if(tipo == "cor"){
            if(dir == "esq"){
                if(posCor > 0){
                    setPosCor(posCor - 1);
                    setCor(listaCor[posCor - 1].url);
                }
                else{
                    setPosCor(listaCor.length - 1);
                    setCor(listaCor[listaCor.length - 1].url);
                }
            }else{
                if(posCor < listaCor.length - 1){
                    setPosCor(posCor + 1);
                    setCor(listaCor[posCor + 1].url);
                }
                else{
                    setPosCor(0);
                    setCor(listaCor[0].url);
                }
            }
        } else if(tipo == "fundo"){
            if(dir == "esq"){
                if(posFundo > 0){
                    setPosFundo(posFundo - 1);
                    setFundo(listaFundo[posFundo - 1].url);
                }
                else{
                    setPosFundo(listaFundo.length - 1);
                    setFundo(listaFundo[listaFundo.length - 1].url);
                }
            }else{
                if(posFundo < listaFundo.length - 1){
                    setPosFundo(posFundo + 1);
                    setFundo(listaFundo[posFundo + 1].url);
                }
                else{
                    setPosFundo(0);
                    setFundo(listaFundo[0].url);
                }
            }
        }
    }

    function salvarPersonalizacao(){
        axios.post('https://www.gmerola.com.br/feedit/api/crianca/salvar_personalizacao_pet', {
            'id_pet': idPet,
            'chapeu': listaCabeça[posCabeca]["id_perso"],
            'roupa': listaRoupa[posRoupa]["id_perso"],
            'cor': listaCor[posCor]["id_perso"],
            'fundo': 0
        }).
        then((response: { data: any; }) => {
            // Manipule a resposta aqui
            alert('Que pet chique! A roupa dele foi salvada! 🎩👗🎨🌈');
            console.log(response.data);
        })
        .catch((error: any) => {
            // Manipule o erro aqui
            console.error('Erro ao fazer requisição:', error);
        });
    }

    function voltar(){
        navigation.navigate('CriancaMain');
    }
    

    useEffect(() => {
        validate();
    }, []);
    // ---------------


    return (
        <Container >
            {/* Parte de cima */}
            <Topo>
                <Armazem>
                    {/* <SlotBar slotName="Cabeça" slotImage={cabeça}></SlotBar>
                    <SlotBar slotName="Roupa" slotImage={roupa}></SlotBar>
                    <SlotBar slotName="Cor" slotImage={cor}></SlotBar>
                    <SlotBar slotName="Fundo" slotImage={fundo}></SlotBar> */}
                    <SlotBar slotName="Cabeca" slotImage={cabeça} func1={() => trocaPersonalizacao("cabeca", "esq")} func2={() => trocaPersonalizacao("cabeca", "dir")}></SlotBar>
                    <SlotBar slotName="Roupa" slotImage={roupa} func1={() => trocaPersonalizacao("roupa", "esq")} func2={() => trocaPersonalizacao("roupa", "dir")}></SlotBar>
                    <SlotBar slotName="Cor" slotImage={cor} func1={() => trocaPersonalizacao("cor", "esq")} func2={() => trocaPersonalizacao("cor", "dir")}></SlotBar>
                    {/* <SlotBar slotName="Fundo" slotImage={fundo} func1={trocaPersonalizacao("fundo", "esq")} func2={trocaPersonalizacao("fundo", "dir")}></SlotBar> */}
                </Armazem>
                <View>
                </View>
            </Topo>
            {/* Parte de Baixo */}
            <Voltar onPress={() => voltar()}><Text style={{color: theme.COLORS.WHITE, fontSize: 20}}>Voltar</Text></Voltar>
            <Salvar onPress={() => salvarPersonalizacao()}><Text style={{color: theme.COLORS.WHITE, fontSize: 20}}>Salvar</Text></Salvar>
            <Baixo>
                <Image source={{ uri: cabeça }} style={{ width: 400, height: 400, position: 'absolute', zIndex: 3}} />
                <Image source={{ uri: roupa }} style={{ width: 400, height: 400, position: 'absolute', zIndex:2}} />
                <Image source={{ uri: cor }} style={{ width: 400, height: 400, position: 'absolute', zIndex: 1}} />
                {/* <Image source={{ uri: fundo }} style={{ width: 400, height: 400, position: 'absolute', zIndex: -1}} /> */}
                <Rodape/>
                <Chao/>
                <Voltar onPress={() => voltar()}><Text style={{color: theme.COLORS.WHITE, fontSize: 20}}>Voltar</Text></Voltar>
                <Salvar onPress={() => salvarPersonalizacao()}><Text style={{color: theme.COLORS.WHITE, fontSize: 20}}>Salvar</Text></Salvar>
            </Baixo>
        </Container>
    )
}