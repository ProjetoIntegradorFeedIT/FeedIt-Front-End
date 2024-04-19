import React, {useState} from 'react';
import { Text, View, Image, Modal, TouchableOpacity } from 'react-native';
import theme from '../../themes/theme';
import { BotaoMenuAberto, BotaoMenuFechado, Dinheiro, Container, DisplayElementos, Footer, FooterDetailH, FooterDetailV, FooterDir, FooterEsq, Valor, Topo, MenuSuperior, FechaModalStyle, Linha } from './styles';
import Icon from '@expo/vector-icons/FontAwesome5'

// import de images
const IconeMoeda = require('../../../assets/moedas.png');
const GuardaRoupa = require('../../../assets/guardaRoupa.png');
const Menu = require('../../../assets/menu.png');
// ---------------

// Import de componentes
import StatuBar from '../../components/StatusBar/Index';
import ObjetivosBar from '../../components/ObjetivosBar/Index';
// ---------------------

export default function CrincaMain( {navigation}: any ) {
  // Variáveis ----------------------------------------------
  const [modalVisible, setModalVisible] = useState(false);
  // -------------------------------------------------------

  // Funções -------
  function popUpMenu(){
    setModalVisible(!modalVisible);
  }
  function goToGuardaRoupa(){
    setModalVisible(!modalVisible);
    navigation.navigate('GuardaRoupa');
  }
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
            <Icon name="camera" size={100} color={theme.COLORS.YELLOW_100}/>
          </FooterDir>
        </DisplayElementos>
      </Footer>
      {/* ------------------------------------------------------ */}
    </Container>
  );
}
