import React, {useEffect, useState} from 'react';
import { Text, View, Image, Modal, TouchableOpacity, ImageBackground } from 'react-native';
import theme from '../../themes/theme';
import { TextoNivel, BotaoMenuAberto, BotaoMenuFechado, Dinheiro, Container, DisplayElementos, Footer, FooterDetailH, FooterDetailV, FooterDir, FooterEsq, Valor, Topo, MenuSuperior, FechaModalStyle, Linha, Meio, Chao, Rodape, Nivel } from './styles';
import Icon from '@expo/vector-icons/FontAwesome5';
import { FaSpinner } from "react-icons/fa";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import de images
const IconeMoeda = require('../../../assets/moedas.png');
const GuardaRoupa = require('../../../assets/guardaRoupa.png');
const Menu = require('../../../assets/menu.png');
const Maca = require('../../../assets/maca.png');
// ---------------

// Import de componentes
import StatuBar from '../../components/StatusBar/Index';
import ObjetivosBar from '../../components/ObjetivosBar/Index';
import Spinner from '../../components/Spinner/Index';
// ---------------------

export default function CrincaMain( {navigation}: any ) {
  // Variáveis ----------------------------------------------
  const [modalVisible, setModalVisible] = useState(false);
  const [nivel, setNivel] = useState(0);
  const [xpAtual, setXpAtual] = useState(0);
  const [xpNecessario, setXpNecessario] = useState(0);
  const [moedas, setMoedas] = useState(0);
  const [id_pet, setIdPet] = useState(0);
  const [nome_pet, setNomePet] = useState('');
  const [tipo_pet, setTipoPet] = useState('');
  const [cor, setCor] = useState('');
  const [chapeu, setChapeu] = useState('');
  const [roupa, setRoupa] = useState('');
  const [fundo, setFundo] = useState('');
  const [id_crianca, setIdCrianca] = useState(0);
  const [missoes, setMissoes] = useState<any[] | null>(null);
  const [alimentacao, setAlimentacao] = useState(0);
  const [energia, setEnergia] = useState(0);
  const [felicidade, setFelicidade] = useState(0);
  const [forca, setForca] = useState(0);
  // -------------------------------------------------------
  // const functions ----------------------------------------
  const getObject = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error(e);
    }
  };

  // -------------------------------------------------------
  // Funções -------
  function popUpMenu(){
    attMissoes();
    setModalVisible(!modalVisible);
  };
  function goToGuardaRoupa(){
    setModalVisible(!modalVisible);
    navigation.navigate('GuardaRoupa');
  };
  function openCamera() {
    navigation.navigate('Camera', {id_crianca: id_crianca});
  };
  function validate(){
    getObject('usuario').then((value) => {
      if(value === null){
        navigation.navigate('Login');
      }
      else{
        console.log(value);
        setIdCrianca(value.id_crianca);
        getPet(value.id_crianca);
      }
    });
  };
  function getPet(id: number) {
    axios.get('https://www.gmerola.com.br/feedit/api/crianca/info_crianca/'+ id)
    .then(response => {
      console.log(response.data);
      setNivel(response.data['crianca'].nivel);
      setXpAtual(response.data['crianca'].xp_atual);
      setXpNecessario(response.data['crianca'].xp_necessario);
      setMoedas(response.data['crianca'].moedas);
      setIdPet(response.data['crianca'].id_pet);
      setNomePet(response.data['crianca'].nome_pet);
      setTipoPet(response.data['crianca'].tipo_pet);
      setCor(response.data['crianca'].cor);
      setChapeu(response.data['crianca'].chapeu);
      setRoupa(response.data['crianca'].roupa);
      setFundo(response.data['crianca'].fundo);
      axios.post("https://www.gmerola.com.br/feedit/api/digestao", {
        id_pet: response.data['crianca'].id_pet
      }).then(response => {
        setAlimentacao(response.data.alimentacao);
        setEnergia(response.data.energia);
        setFelicidade(response.data.felicidade);
        setForca(response.data.forca);
      }).catch(error => {
        console.error("Erro ao fazer a requisição: ", error);
      });
    }).catch(error => {
      console.error("Erro ao fazer a requisição: ", error);
    });
  };
  function attMissoes(){
    console.log(id_crianca);
    axios.post("https://www.gmerola.com.br/feedit/api/missoes/gerenciar", {
      id_crianca: id_crianca
    })
    .then(response => {
      axios.get("https://www.gmerola.com.br/feedit/api/crianca/missao_pet/"+id_crianca)
      .then(response => {
        setMissoes(response.data);
      }).catch(error => {
        console.error("Erro ao fazer a requisição: ", error);
      });
    }).catch(error => {
      console.error("Erro ao fazer a requisição: ", error);
    });
  };
  // ---------------
  // UseEffect
  useEffect(() => {
    validate();
  }, []);
  // ---------------

  return (
    <Container>
      {/* Topo da tela */}
      <Topo>
        {/* Modal do menu superior */}
        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible);}}>
          <MenuSuperior>
            <FechaModalStyle onPress={popUpMenu}><Text style={{fontSize: 32, fontWeight: 'bold'}}>X</Text></FechaModalStyle>
            <Linha/>
            <View style={{paddingBottom: 8, paddingTop: 16, width: '100%', flexDirection: 'column', alignItems: 'center'}}>
              <Text style={{fontSize: 20, color: theme.COLORS.WHITE, fontWeight: 'bold', marginBottom: 4}}>Objetivos Diarios e Semanais</Text>
              {missoes === null ? (
                  <Spinner />
              ) : (
                  Object.entries(missoes).map(([missionName, missionDetails]) => (
                      <ObjetivosBar 
                          key={missionName} 
                          objetivoName={missionName} 
                          tamanho={missionDetails.tamanho} 
                          progresso={missionDetails.progresso_tarefa} 
                          valor={missionDetails.valor} 
                          tipo={missionDetails.tipo}
                      />
                  ))
              )}
            </View>
            <Linha/>
            <View style={{height: '15%', borderBottomEndRadius: 15, borderBottomStartRadius: 15, flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 2}}>
              <TouchableOpacity onPress={() => goToGuardaRoupa()} style={{backgroundColor: theme.COLORS.BRONW_100, width: 50, height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 90, borderColor: theme.COLORS.BLACK, borderWidth: 1}}>
                <Image source={GuardaRoupa} style={{width: 32, height: 34}}/>
              </TouchableOpacity>
            </View>
          </MenuSuperior>
        </Modal>
        {/* ----------------------- */}
        <View style={{width: '30%'}}>
          {modalVisible ? (
            <BotaoMenuAberto onPress={popUpMenu}></BotaoMenuAberto>)
            : 
            (<BotaoMenuFechado onPress={popUpMenu}><Image source={Menu}/></BotaoMenuFechado>)
          }
        </View>
        <Nivel>
          <ImageBackground source={Maca} style={{ width: 60, height: 60, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: theme.COLORS.YELLOW_100}}>{nivel}</Text>
          </ImageBackground>
          <TextoNivel>{xpAtual}/{xpNecessario}</TextoNivel>
        </Nivel>
        <Dinheiro>
          <Valor>{moedas}</Valor>
          <Image source={IconeMoeda} style={{width: 50, height: 50}}/>
        </Dinheiro>
      </Topo>
      {/* -------------- */}
      {/* Meio da Tela ----------------------------------------------- */}
      <Meio>
        {chapeu === '' ? <Spinner />
        : 
          <>
            <Text style={{position: 'absolute', top:160, zIndex: 4, fontSize: 24, color: theme.COLORS.WHITE, borderWidth: 2, borderBlockColor: theme.COLORS.WHITE, backgroundColor: theme.COLORS.BLUE_200, borderRadius: 90, paddingEnd: 8, width: '30%', textAlign: 'center'}}>{nome_pet}</Text>
            <Image source={{ uri: chapeu }} style={{ width: 400, height: 400, position: 'absolute', zIndex: 3}} />
            <Image source={{ uri: roupa }} style={{ width: 400, height: 400, position: 'absolute', zIndex:2}} />
            <Image source={{ uri: cor }} style={{ width: 400, height: 400, position: 'absolute', zIndex: 1}} />
            {/* <Image source={{ uri: fundo }} style={{ width: 400, height: 400, position: 'absolute', zIndex: -1}} /> */}
          </>
        }
        <Rodape/>
        <Chao/>
      </Meio>
      {/* ------------------------------------------------------------ */}
      {/*Footer ------------------------------------------------*/}
      <Footer>
        <FooterDetailH/>
        <DisplayElementos>
          <FooterEsq>
            <StatuBar valor={alimentacao} statusName='Alimentação Saudável'></StatuBar>
            <StatuBar valor={energia} statusName='Energia'></StatuBar>
            <StatuBar valor={felicidade} statusName='Felicidade'></StatuBar>
            <StatuBar valor={forca} statusName='Força'></StatuBar>
          </FooterEsq>
          <FooterDetailV/>
          <FooterDir>
          <TouchableOpacity onPress={openCamera}>
            <Icon name="camera" size={100} color={theme.COLORS.YELLOW_100} />
          </TouchableOpacity>
          </FooterDir>
        </DisplayElementos>
      </Footer>
      {/* ------------------------------------------------------ */}
    </Container>
  );
}
