import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Botao, Texto, Container, Tela, Title, ContainerInput } from './style';
import Icon from '@expo/vector-icons/FontAwesome5';
import { FontAwesome5 } from '@expo/vector-icons';




// imagens---------------------------------------------
const Background = require('../../../assets/nuvens.png');
// -----------------------------------------------------
export default function CadastroBi({navigation}: any) {
    // Funções -------
    function goToCadastro(Rota: string){
        navigation.navigate(Rota);
    }
//-------------------------------------------------
    return (
        // Conteúdo da tela
        <Container>
            <Tela source={Background}/>
            <View>
                <Title>Cadastro</Title>
                <ContainerInput>
                    <TouchableOpacity onPress={() => goToCadastro('CadastroResponsavel')} style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Botao>
                            <Texto>Responsável</Texto>
                            <FontAwesome5 name="user-friends" size={28} color="#FFFFFF" />
                        </Botao>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => goToCadastro('CadastroProfissional')} style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Botao>
                            <Texto>Profissional de Saúde</Texto>
                            <FontAwesome5 name="hospital-user" size={28} color="#FFFFFF"/>
                        </Botao>
                    </TouchableOpacity>
                </ContainerInput>
            </View>
        </Container>
    );
}
// ----------------------------------------------------------------------------------------------------------------------------------------------
