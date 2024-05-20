import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { useState } from "react";
import { Container, Tela, SubTitulo, PopUpArea, NomeR, Texto, Botao, SanfonaHeader, SanfonaBody } from "./style";
import { FontAwesome5 } from "@expo/vector-icons";
// imagens---------------------------------------------
const Background = require('../../../assets/nuvens.png');


export default function ResponsavelMain() {
    const [sanfonaVisible, setSanfonaVisible] = useState(false);

    const toggleSanfona = () => {
        setSanfonaVisible(!sanfonaVisible);
    };
    return (
        <Container>
            <Tela source={Background}/>
            <NomeR>Responsável</NomeR>
            <SubTitulo>Suas Crianças</SubTitulo>
            <PopUpArea>
                <Texto></Texto>
                <TouchableOpacity onPress={toggleSanfona}>
                    <Botao>
                        <FontAwesome5 name="arrow-down" size={20} color="white" />
                    </Botao>
                </TouchableOpacity>
                {sanfonaVisible && (
                    <>
                        <SanfonaHeader/>
                        <SanfonaBody/>
                    </>
                )}
            </PopUpArea>
        </Container>
    );
}