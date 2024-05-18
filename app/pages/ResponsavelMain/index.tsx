import React from "react";
import { View } from "react-native";
import { useState } from "react";
import { Container, Tela, SubTitulo, PopUpArea, NomeR, Texto, Botao } from "./style";
import { FontAwesome5 } from "@expo/vector-icons";
// imagens---------------------------------------------
const Background = require('../../../assets/nuvens.png');


export default function ResponsavelMain() {
    return (
        <Container>
            <Tela source={Background}/>
            <NomeR>Responsável</NomeR>
            <SubTitulo>Suas Crianças</SubTitulo>
            <PopUpArea>
                    <Texto>Criança 1</Texto>
                    <Botao><FontAwesome5 name="arrow-down" size={20} color="white" /></Botao>
            </PopUpArea>
        </Container>
    );
}