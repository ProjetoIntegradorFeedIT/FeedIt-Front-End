import React, {useEffect, useState} from 'react';
import { Text, View, Image, Modal, TouchableOpacity } from 'react-native';
import theme from '../../themes/theme';
import { BotaoMenuAberto, BotaoMenuFechado, Dinheiro, Container, DisplayElementos, Footer, FooterDetailH, FooterDetailV, FooterDir, FooterEsq, Valor, Topo, MenuSuperior, FechaModalStyle, Linha, Meio, Chao, Rodape } from './styles';
import Icon from '@expo/vector-icons/FontAwesome5';
import axios from 'axios';

// import de images
const IconeMoeda = require('../../../assets/moedas.png');
const GuardaRoupa = require('../../../assets/guardaRoupa.png');
const Menu = require('../../../assets/menu.png');
// ---------------

// Import de componentes
import StatuBar from '../../components/StatusBar/Index';
import ObjetivosBar from '../../components/ObjetivosBar/Index';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    setModalVisible(!modalVisible);
  }
  function goToGuardaRoupa(){
    setModalVisible(!modalVisible);
    navigation.navigate('GuardaRoupa');
  }
  function openCamera() {
    navigation.navigate('Camera');
  }
  function validate(){
    getObject('usuario').then((value) => {
      if(value === null){
        navigation.navigate('Login');
      }
      else{
        setIdCrianca(value.id_crianca);
        getPet(value.id_crianca);
      }
    });
  }
  function getPet(id: number) {
    axios.get('https://www.gmerola.com.br/feedit/api/crianca/info_crianca/'+ id)
    .then(response => {
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
      console.log(response.data['crianca']);
    }).catch(error => {
      console.error("Erro ao fazer a requisição: ", error);
    });
  }
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
              <Text style={{fontSize: 28, color: theme.COLORS.WHITE, fontWeight: 'bold', marginBottom: 4}}>Objetivos Semanais</Text>
              <ObjetivosBar objetivoName='Teste' porcentagem={50}></ObjetivosBar>
              <ObjetivosBar objetivoName='Teste' porcentagem={50}></ObjetivosBar>
              <ObjetivosBar objetivoName='Teste' porcentagem={50}></ObjetivosBar>
              <ObjetivosBar objetivoName='Teste' porcentagem={50}></ObjetivosBar>
              <ObjetivosBar objetivoName='Teste' porcentagem={50}></ObjetivosBar>
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
        {modalVisible ? (
          <BotaoMenuAberto onPress={popUpMenu}></BotaoMenuAberto>)
          : 
          (<BotaoMenuFechado onPress={popUpMenu}><Image source={Menu}/></BotaoMenuFechado>)
        }
        <Dinheiro>
          <Valor>000</Valor>
          <Image source={IconeMoeda} style={{width: 50, height: 50}}/>
        </Dinheiro>
      </Topo>
      {/* -------------- */}
      {/* Meio da Tela ----------------------------------------------- */}
      <Meio>
        <Rodape/>
        <Chao/>
      </Meio>
      {/* ------------------------------------------------------------ */}
      {/*Footer ------------------------------------------------*/}
      <Footer>
        <FooterDetailH/>
        <DisplayElementos>
          <FooterEsq>
            <StatuBar statusName='Alimentação Saudável'></StatuBar>
            <StatuBar statusName='Energia'></StatuBar>
            <StatuBar statusName='Felicidade'></StatuBar>
            <StatuBar statusName='Força'></StatuBar>
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
