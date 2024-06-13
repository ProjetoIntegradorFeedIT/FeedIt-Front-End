import { Keyboard, TouchableWithoutFeedback, ScrollView, Text, Alert, View} from 'react-native';
import { AreaTela, ContainerInput, Title, TelaFundo, InputID, TelaPacientes, BotaoAdicionar, BotaoContainer, TitleMenor, Texto, TextoTabela, TextoTabelaTitulo} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { text } from '@fortawesome/fontawesome-svg-core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import theme from '../../themes/theme';

const Menu = require('../../../assets/menu.png');

export default function TelaProfissional({navigation}: any) {
    const [precionado, setPrecionado] = useState(false);
    const [justify, setJustify] = useState('center');
    const [padding, setPadding] = useState(0);
    const [pacienteID, setPacienteID] = useState('');
    const [nomeDoProfissional, setNomeDoProfissional] = useState('Teste');
    const [pacientes, setPacientes] = useState<any[] | null>(null);
    const [idProfissional, setIdProfissional] = useState('');

    // const functions ----------------------------------------
    const getObject = async (key: string) => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        console.error(e);
      }
    };
    const storeObject = async (key: string, value: any) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
          console.error(e);
        }
      };
    // -------------------------------------------------------

    function modificaTela(){
        setJustify('flex-start')
        setPrecionado(true)
        setPadding(80)
    }

    function validate(){
      getObject('usuario').then((value) => {
        if(value === null){
          navigation.navigate('Login');
        }
        else{
          setIdProfissional(value.id_usuario);
          getInfos(value.id_usuario);
        }
      });
    };

    async function getInfos(id: any){
        axios.get('https://www.gmerola.com.br/feedit/api/profissional/' + id + '/pacientes')
        .then(response => {
            console.log(response.data);
            setNomeDoProfissional(response.data.medico);
            setPacientes(response.data.pacientes);
        });
    }

    function adicionarPaciente(){
        if (pacienteID === '') {
            Alert.alert('Erro', 'ID do paciente inválido');
            return;
        }
        axios.post('https://www.gmerola.com.br/feedit/api/profissional/vincula', {
            id_profissional: idProfissional,
            id_paciente: pacienteID
        }).then(response => {
            console.log(response.data);
            if(response.data === 'Paciente vinculado com sucesso'){
                Alert.alert('Sucesso', 'Paciente vinculado com sucesso');
            }
            else{
                Alert.alert('Erro', 'ID do paciente inválido');
            }
        })
    };

    function irTelaPaciente(id_paciente: any, nome_paciente: any){
        getObject('usuario').then((value) => {
            let all = {...value, id_paciente: id_paciente, nome_paciente: nome_paciente};
            storeObject('usuario', all);
            navigation.navigate('TelaProfissional2');
        });
    };

    useEffect(() => {
        validate();
    }, []);

    return (
        <TouchableWithoutFeedback onPress={() => { 
            Keyboard.dismiss(); 
            setPrecionado(false);
            setJustify('center');
            setPadding(0);
        }}>
            <AreaTela style={{justifyContent: justify, paddingTop: padding}}>
                <TelaFundo/>
                <Title>Olá, {nomeDoProfissional}</Title>
                <TitleMenor>Seus pacientes:</TitleMenor>
                {!precionado ? 
                <TelaPacientes>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 'auto', backgroundColor: theme.COLORS.BLUE_200}}>
                        <View style={{width: '50%', alignContent: 'center'}}>
                            <TextoTabelaTitulo>Nome do Paciente</TextoTabelaTitulo>
                        </View>
                        <View style={{width: '50%'}}>
                            <TextoTabelaTitulo>Nome do Responsável</TextoTabelaTitulo>
                        </View>
                    </View>
                    <ScrollView>
                    {pacientes ?
                    Object.entries(pacientes).map(([key, value]) => (
                        <TouchableOpacity onPress={() => irTelaPaciente(value.id_crianca, value.nome_crianca)} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 'auto', padding: 6, borderTopWidth: 2, borderBottomWidth: 2, borderColor: theme.COLORS.BLACK}}>
                            <View style={{width: '50%', alignContent: 'center'}}>
                                <TextoTabela key={key}>{value.nome_crianca}</TextoTabela>
                            </View>
                            <View style={{width: '50%'}}>
                                <TextoTabela key={key}>{value.nome_responsavel}</TextoTabela>
                            </View>
                        </TouchableOpacity>
                    ))
                    :
                    <View style={{flexDirection: 'row', width: 'auto', justifyContent: 'center', alignContent: 'center', height: 'auto'}}>
                        <Text style={{fontSize: 20, marginTop: 40}}>Sem Pacientes Registrados</Text>
                    </View>
                    }
                    </ScrollView>
                </TelaPacientes>
                : <></>
                }
                <ContainerInput>
                    <InputID 
                        value={pacienteID}
                        placeholder='ID do paciente' 
                        onFocus={() => modificaTela()}
                        keyboardType='numeric'
                        onChangeText={(text) => setPacienteID(text)}
                    />
                    <BotaoContainer>
                        <BotaoAdicionar onPress={() => adicionarPaciente()}>
                            <TouchableOpacity><Texto>Adicionar</Texto></TouchableOpacity>
                        </BotaoAdicionar>
                    </BotaoContainer>
                </ContainerInput>
            </AreaTela>
        </TouchableWithoutFeedback>
    );
}
