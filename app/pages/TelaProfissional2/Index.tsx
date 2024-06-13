import { Keyboard, Text, View} from 'react-native';
import { AreaTela, Title, TitleMenor, TelaFundo, StatsAlimentos, Texto} from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PieChart from 'react-native-pie-chart'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaProfissional2({navigation}: any) {
    const [alimentos, setAlimentos] = useState<{ [s: string]: any; } | null>(null);
    const [pacienteNome, setPacienteNome] = useState('Paciente');
    const [totalAlimentos, setTotalAlimentos] = useState(0);
    const [dados, setDados] = useState<any[]>([]);
    const [coresAtivas, setCoresAtivas] = useState<string[]>([]);
    const [cores, setCores] = useState<string[]>(['#0300fb', '#0320fb', '#0340fb', '#0360fb', '#0380fb', '#03a0fb', '#03c0fb', '#03e0fb']);

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

    function validate(){
        getObject('usuario').then((value) => {
          if(value === null){
            navigation.navigate('Login');
          }
          else{
            console.log(value);
            setPacienteNome(value.nome_paciente);
            getInfos(value.id_paciente);
          }
        });
    };

    function getInfos(id: any){
        console.log(id);
        axios.get('https://www.gmerola.com.br/feedit/api/profissional/paciente/'+ id).then(response => {
            console.log(response.data);
            setAlimentos(response.data.alimentos);
            setTotalAlimentos(response.data.total);
            grafico(response.data.alimentos);
        });
    };

    function grafico(infos: any){
        if (infos) {
            Object.entries(infos).map(([key, value]) => (
                dados.push(value),
                coresAtivas.push(cores[dados.length - 1])
            ));
        }
    };

    useEffect(() => {
        validate();
    }, []);

    return (
        <AreaTela>
            <Title>{pacienteNome}</Title>
            {dados.length > 0
                ?
                <PieChart
                    widthAndHeight={160}
                    series={dados}
                    sliceColor={coresAtivas}
                />
                : <></>}
            <TitleMenor>Alimentos ingeridos: {totalAlimentos}</TitleMenor>
            <StatsAlimentos>
                {alimentos ?
                    Object.entries(alimentos).map(([key, value], index) => (
                        <View key={key} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 }}>
                            <Texto>{key}: {value}</Texto>
                            <View style={{ width: 20, height: 20, backgroundColor: coresAtivas[index], marginLeft: 10, marginRight: 12}} />
                        </View>
                    ))
                    :
                    <View style={{ flexDirection: 'row', width: 'auto', justifyContent: 'center', alignContent: 'center', height: 'auto' }}>
                        <Text style={{ fontSize: 20, marginTop: 40 }}>Nenhum alimento registrado</Text>
                    </View>
                }
            </StatsAlimentos>
        </AreaTela>
    );
}