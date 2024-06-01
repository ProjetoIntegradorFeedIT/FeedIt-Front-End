import React, { useEffect, useRef } from "react";
import { Title, Texto, Input, Button, Container, Tela, ContainerInput, SubTitle } from "./style";
import { useState } from "react";
import axios from "axios";

// imagens---------------------------------------------
const Background = require('../../../assets/nuvens.png');

export default function CadastroValidacao({route} : any, navigation: any) {
  const [caracter1, setCaracter1] = useState('');
  const [caracter2, setCaracter2] = useState('');
  const [caracter3, setCaracter3] = useState('');
  const [caracter4, setCaracter4] = useState('');
  const [caracter5, setCaracter5] = useState('');

  const { Nome, Email, Senha, Cpf } = route.params;

  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const handleChange = (index, value) => {
    switch (index) {
      case 0:
        setCaracter1(value);
        if (value.length === 1) inputRefs[1].current.focus();
        break;
      case 1:
        setCaracter2(value);
        if (value.length === 1) inputRefs[2].current.focus();
        break;
      case 2:
        setCaracter3(value);
        if (value.length === 1) inputRefs[3].current.focus();
        break;
      case 3:
        setCaracter4(value);
        if (value.length === 1) inputRefs[4].current.focus();
        break;
      case 4:
        setCaracter5(value);
        break;
      default:
        break;
    }
  };

  function cadastrar() {
    if (caracter1 === '' || caracter2 === '' || caracter3 === '' || caracter4 === '' || caracter5 === '') {
      alert('Preencha todos os campos');
      return;
    }
    axios.post('https://www.gmerola.com.br/feedit/api/cadastro/responsavel_codigo', {
          nome: Nome,
          email: Email,
          senha: Senha,
          cpf: Cpf,
          codigo: `${caracter1}${caracter2}${caracter3}${caracter4}${caracter5}`,
          // cpf: Cpf.replace(/\D/g, ''), // Remove todos os caracteres não numéricos do CPF
      }).then(response => {
          alert('Cadastro realizado com sucesso');
          navigation.navigate('Login');
      }).catch(error => {
          alert('Erro ao cadastrar');
          console.error('Erro ao fazer a requisição: ', error);
      });
  }

  useEffect(() => {
    console.log(Nome, Email, Senha, Cpf);
  }, []);

  return (
    <Container>
      <Tela source={Background}/>
      <Title>Cadastro</Title>
      <SubTitle>Insira o código de validação</SubTitle>
      <ContainerInput>
        <Input 
          ref={inputRefs[0]}
          maxLength={1} 
          value={caracter1} 
          onChangeText={(value) => handleChange(0, value)}
        />
        <Input 
          ref={inputRefs[1]}
          maxLength={1} 
          value={caracter2} 
          onChangeText={(value) => handleChange(1, value)}
        />
        <Input 
          ref={inputRefs[2]}
          maxLength={1} 
          value={caracter3} 
          onChangeText={(value) => handleChange(2, value)}
        />
        <Input 
          ref={inputRefs[3]}
          maxLength={1} 
          value={caracter4} 
          onChangeText={(value) => handleChange(3, value)}
        />
        <Input 
          ref={inputRefs[4]}
          maxLength={1} 
          value={caracter5} 
          onChangeText={(value) => handleChange(4, value)}
        />
      </ContainerInput>
      <Button onPress={() => cadastrar()}>
        <Texto>Validar</Texto>
      </Button>
    </Container>
  );
}
