import React, {useEffect, useState} from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, Modal, Button} from 'react-native';
import { Container, Topo, Baixo, Armazem } from './styles';
import theme from '../../themes/theme';

// Import de componentes
import SlotBar from '../../components/GuardaRoupaSlot/Index';
import axios from 'axios';

export default function GuardaRoupa({navigation}: any) {
    // Variáveis ----------------------------------------------
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
    const [tipoPet, setTipoPet] = useState('Dino');
    // -------------------------------------------------------
    // Funções -------
    const getPersonalizacoes = () => {
        axios.get('https://www.gmerola.com.br/feedit/api/crianca/listar_personalizacao_tipo/' + tipoPet)
        .then((response: { data: any; }) => {
            // Manipule a resposta aqui
            console.log('Infos recebidas');
            setListaCabeça(response.data.Chapeu);
            setListaRoupa(response.data.Roupa);
            setListaCor(response.data.Cor);
            // setListaFundo(response.data.Fundo);
            setCabeça(response.data.Chapeu[posCabeca].url);
            setRoupa(response.data.Roupa[posRoupa].url);
            setCor(response.data.Cor[posCor].url);
            // setFundo(response.data.Fundo[posFundo].url);
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
                    setCabeça(listaCabeça[posCabeca].url);
                }
            }else{
                if(posCabeca < listaCabeça.length - 1){
                    setPosCabeca(posCabeca + 1);
                    setCabeça(listaCabeça[posCabeca].url);
                }
            }
        }else if(tipo == "roupa"){
            if(dir == "esq"){
                if(posRoupa > 0){
                    setPosRoupa(posRoupa - 1);
                    setRoupa(listaRoupa[posRoupa].url);
                }
            }else{
                if(posRoupa < listaRoupa.length - 1){
                    setPosRoupa(posRoupa + 1);
                    setRoupa(listaRoupa[posRoupa].url);
                }
            }
        }else if(tipo == "cor"){
            if(dir == "esq"){
                if(posCor > 0){
                    setPosCor(posCor - 1);
                    setCor(listaCor[posCor].url);
                }
            }else{
                if(posCor < listaCor.length - 1){
                    setPosCor(posCor + 1);
                    setCor(listaCor[posCor].url);
                }
            }
        }else if(tipo == "fundo"){
            if(dir == "esq"){
                if(posFundo > 0){
                    setPosFundo(posFundo - 1);
                    setFundo(listaFundo[posFundo].url);
                }
            }else{
                if(posFundo < listaFundo.length - 1){
                    setPosFundo(posFundo + 1);
                    setFundo(listaFundo[posFundo].url);
                }
            }
        }
    }
    

    useEffect(() => {
        getPersonalizacoes();
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
            <Baixo>
                <Image source={{ uri: cabeça }} style={{ width: 400, height: 400, position: 'absolute', zIndex: 2}} />
                <Image source={{ uri: roupa }} style={{ width: 400, height: 400, position: 'absolute', zIndex:1}} />
                <Image source={{ uri: cor }} style={{ width: 400, height: 400, position: 'absolute', zIndex: 0}} />
                {/* <Image source={{ uri: fundo }} style={{ width: 400, height: 400, position: 'absolute', zIndex: -1}} /> */}
            </Baixo>
        </Container>
    )
}