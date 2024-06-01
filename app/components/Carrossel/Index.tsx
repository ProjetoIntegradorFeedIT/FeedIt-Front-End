import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container } from '../../pages/Home/style';
import theme from '../../themes/theme';
import Icon from '@expo/vector-icons/FontAwesome5';
import axios from 'axios';

interface CarrosselProps {
  id_crianca: number;
}

const Carrossel = (props: CarrosselProps) => {
  const [entradas, setEntradas] = useState([
    { title: 'Tubérculo', img: '../../../assets/carrossel/batata.png', grupo: 'Cereais, tubérculos, pão e raízes' },
    { title: 'Carne', img: '../../../assets/carrossel/carne.png', grupo: 'Carne e ovos' },
    { title: 'Doce', img: '../../../assets/carrossel/doce.png', grupo: 'Doces, Petiscos' },
    { title: 'Fruta', img: '../../../assets/carrossel/frutas.png', grupo: 'Frutas' },
    { title: 'Fungo', img: '../../../assets/carrossel/fungos.png', grupo: 'Fungos' },
    { title: 'Legume', img: '../../../assets/carrossel/legumes.png', grupo: 'Legumes' },
    { title: 'Leite', img: '../../../assets/carrossel/leite.png', grupo: 'Leite e laticínios' },
    { title: 'Ovo', img: '../../../assets/carrossel/ovo.png', grupo: 'Carne e ovos' },
    { title: 'Pão', img: '../../../assets/carrossel/pao.png', grupo: 'Cereais, tubérculos, pão e raízes' },
    { title: 'Petisco', img: '../../../assets/carrossel/petiscos.png', grupo: 'Doces, Petiscos' },
    { title: 'Cereal', img: '../../../assets/carrossel/trigo.png', grupo: 'Cereais, tubérculos, pão e raízes' },
    { title: 'Vegetal', img: '../../../assets/carrossel/vegetais.png', grupo: 'Vegetais e folhas' },
  ]);
  const [selecionado, setSelecionado] = useState(false);
  const [posicaoEsquerda, setPosicaoEsquerda] = useState(11);
  const [posicaoCentro, setPosicaoCentro] = useState(0);
  const [posicaoDireita, setPosicaoDireita] = useState(1);

  function mudaItem(direcao: string) {
    setSelecionado(false);
    if (direcao === 'esquerda') {
      if (posicaoEsquerda === 0) {
        setPosicaoEsquerda(11);
        setPosicaoCentro(0);
        setPosicaoDireita(1);
      } else if (posicaoCentro === 0) {
        setPosicaoEsquerda(10);
        setPosicaoCentro(11);
        setPosicaoDireita(0);
      } else if (posicaoDireita === 0) {
        setPosicaoEsquerda(9);
        setPosicaoCentro(10);
        setPosicaoDireita(11);
      } else {
        setPosicaoEsquerda(posicaoEsquerda - 1);
        setPosicaoCentro(posicaoCentro - 1);
        setPosicaoDireita(posicaoDireita - 1);
      }
    } else if (direcao === 'direita'){
        if (posicaoEsquerda === 11) {
            setPosicaoEsquerda(0);
            setPosicaoCentro(1);
            setPosicaoDireita(2);
        } else if (posicaoCentro === 11) {
            setPosicaoEsquerda(11);
            setPosicaoCentro(0);
            setPosicaoDireita(1);
        } else if (posicaoDireita === 11) {
            setPosicaoEsquerda(10);
            setPosicaoCentro(11);
            setPosicaoDireita(0);
        } else {
            setPosicaoEsquerda(posicaoEsquerda + 1);
            setPosicaoCentro(posicaoCentro + 1);
            setPosicaoDireita(posicaoDireita + 1);
        }
    }
  }

  function selecionaItem() {
    console.log('Selecionado');
    setSelecionado(true);
  }

  function confirmaItem() {
    if (selecionado === false) {
        alert('Selecione um item antes de continuar, click nele para isso.');
        return;
    }
    axios.post('https://www.gmerola.com.br/feedit/api/img_recog/forceInput', {
        id_crianca: props.id_crianca,
        grupo: entradas[posicaoCentro].grupo,
    })
    .then((response: { data: any; }) => {
        // Manipule a resposta aqui
        alert('Seu pet foi alimentado com sucesso! Ele ganhou: Alimentação: ' + response.data.alimentacaoSaudavel + ' Força: ' + response.data.forca + ' Energia: ' + response.data.energia + ' Felicidade: ' + response.data.felicidade);
        console.log('Resposta do servidor:', response.data);
    })
    .catch((error: any) => {
        // Manipule o erro aqui
        console.error('Erro ao fazer requisição:', error);
    });
  }

  return (
    <>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => mudaItem('esquerda')}><Icon name="arrow-left" size={20} color={theme.COLORS.BLACK} /></TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => mudaItem('esquerda')}>
                <img src={entradas[posicaoEsquerda].img} style={styles.img} alt={entradas[0].title} />
                <Text style={styles.texto}>{entradas[posicaoEsquerda].title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selecionaItem()} style={[styles.item, selecionado && styles.itemSelecionado]}>
                <img src={entradas[posicaoCentro].img} style={styles.imgDestaque} alt={entradas[1].title} />
                <Text style={styles.textoDestaque}>{entradas[posicaoCentro].title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => mudaItem('direita')}>
                <img src={entradas[posicaoDireita].img} style={styles.img} alt={entradas[2].title} />
                <Text style={styles.texto}>{entradas[posicaoDireita].title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => mudaItem('direita')}><Icon name="arrow-right" size={20} color={theme.COLORS.BLACK} /></TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => confirmaItem()} style={styles.botao}>
            <Text style={styles.textoBotao}>Continuar</Text>
        </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  img: {
    width: 60,
    height: 60,
  },
  imgDestaque: {
    width: 80,
    height: 80,
  },
  texto: {
    color: theme.COLORS.WHITE,
    fontSize: 12,
    textAlign: 'center',
  },
  textoDestaque: {
    color: theme.COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: 16,
  },
  itemSelecionado: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: 16,
    borderWidth: 2,
    borderColor: theme.COLORS.GREEN_100,
    borderRadius: 8,
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

export default Carrossel;
