import React, { useRef } from "react";
import { Title, Texto, Input, Button, Container, Tela, ContainerInput, SubTitle } from "./style";
import { useState } from "react";

// imagens---------------------------------------------
const Background = require('../../../assets/nuvens.png');

export default function CadastroValidacao() {
  const [caracter1, setCaracter1] = useState('');
  const [caracter2, setCaracter2] = useState('');
  const [caracter3, setCaracter3] = useState('');
  const [caracter4, setCaracter4] = useState('');
  const [caracter5, setCaracter5] = useState('');

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
      <Button>
        <Texto>Validar</Texto>
      </Button>
    </Container>
  );
}
