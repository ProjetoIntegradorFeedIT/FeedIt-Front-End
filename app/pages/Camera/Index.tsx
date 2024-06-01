import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Cima, Esquerda, Direita, Baixo } from './styles';
import theme from '../../themes/theme';
import { Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Spinner from '../../components/Spinner/Index';
import Carrossel from '../../components/Carrossel/Index';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const borderWidthPercentage = 10;

export default function Camera({ route, navigation }: any) {
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();
  const options = { quality: 0.5, base64: true };
  const [loading, setLoading] = useState(true);
  const [fotoTirada, setFotoTirada] = useState(false);
  const [alimento, setAlimento] = useState('');
  const [alimentacaoSaudavel, setAlimentacaoSaudavel] = useState('');
  const [forca, setForca] = useState('');
  const [energia, setEnergia] = useState('');
  const [felicidade, setFelicidade] = useState('');
  const [foto, setFoto] = useState('');
  const [verificacaoImagem, setVerificacaoImagem] = useState(304);

  const id_crianca = route.params.id_crianca;

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Autorizar o uso da camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  async function takePicture() {
    if(cameraRef){
        const photo = await cameraRef.current.takePictureAsync(options);
        setFoto(photo.uri);
        // console.log(photo.base64);
        const postData = {
          id_crianca: id_crianca,
          imagem: photo.base64,
        };
        console.log(postData);
        console.log(photo)
        setFotoTirada(true);
        axios.post('https://www.gmerola.com.br/feedit/api/img_recog/verificar', postData)
        .then((response: { data: any; }) => {
          // Manipule a resposta aqui
          setLoading(false);
          setAlimento(response.data.alimento);
          setVerificacaoImagem(response.data.status_code);
          setAlimentacaoSaudavel(response.data.alimentacaoSaudavel);
          setForca(response.data.forca);
          setEnergia(response.data.energia);
          setFelicidade(response.data.felicidade);
          console.log('Resposta do servidor:', response.data);
        })
        .catch((error: any) => {
          // Manipule o erro aqui
          console.error('Erro ao fazer requisição:', error);
        });
    }
  }

  function voltaCamera() {
    setFotoTirada(false);
  }

  function goToMain() {
    navigation.navigate('CriancaMain');
  }

  return (
    <>
      {fotoTirada === false ?
        <CameraView
          style = {{ flex: 1}}
          ref = {cameraRef}
        >
          <View style = {styles.bordas}></View>
          <TouchableOpacity style={styles.baixo} onPress={() => takePicture()}>
            <Icon name="camera" size={100} color={theme.COLORS.YELLOW_100} />
          </TouchableOpacity>
        </CameraView>
      :
        <View style={styles.container}>
          <View style={styles.telaPos}>
            <img src={foto} style={styles.imgTeste}/>
            <View style={styles.box}>
              {loading === true ?
                <Spinner/>
              :
                <>
                  {verificacaoImagem === 200 ?
                    <>
                      <Text style={styles.texto}>Parabéns!!!</Text>
                      <Text style={styles.texto}>Você alimentou o seu bichinho com um(a) <Text style={styles.textoDestaques}>{alimento}</Text>!</Text>
                      <Text style={styles.texto}>Alimentação: {alimentacaoSaudavel}, Força: {forca}, Energia: {energia}, Felicidade: {felicidade}</Text>
                      <Text style={styles.texto}>Continue assim!</Text>
                      <TouchableOpacity style={styles.botao} onPress={() => goToMain()}>
                        <Text style={styles.textoBotao}>Continuar</Text>
                      </TouchableOpacity>
                    </>
                  :
                    <>
                      <Text style={styles.texto}>Opa, parece que isso não é um alimento, se a gente se enganou conta ai pra gente o que que é isso!</Text>
                      <Carrossel id_crianca={id_crianca}/>
                    </>
                  }
                </>
              }
            </View>
          </View>
        </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bordas: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: theme.COLORS.BLUE_200,
    borderTopWidth: (windowHeight * 4) / 100,
    borderLeftWidth: (windowWidth * 4) / 100,
    borderRightWidth: (windowWidth * 4) / 100,
  },
  baixo: {
    backgroundColor: theme.COLORS.BLUE_200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    width: '100%',
    paddingVertical: 16,
  },
  telaPos: {
    backgroundColor: theme.COLORS.BLUE_200,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 48,
  },
  imgTeste: {
    width: 300,
    height: 500,
    marginBottom: 24,
  },
  texto: {
    fontSize: 16,
    color: theme.COLORS.WHITE,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  textoDestaques: {
    color: theme.COLORS.YELLOW_100,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: theme.COLORS.GREEN_100,
    padding: 16,
    borderRadius: 8,
  },
  textoBotao: {
    color: theme.COLORS.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },
});