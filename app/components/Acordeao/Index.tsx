import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import theme from '../../themes/theme';
import Icon from '@expo/vector-icons/FontAwesome5';
import axios from 'axios';
import CrincaMain from '../../pages/CriancaMain/Index';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AcordeaoProps {
    criancaNome: string;
    missoes: any;
    id: number;
    func: any;
}

export default function Acordeao(props: AcordeaoProps) {
    const [expanded, setExpanded] = useState(false);
    const [menosEnabled, setMenosEnabled] = useState(false);
    const [maisEnabled, setMaisEnabled] = useState(false);

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    const aumentarMissao = (id_c : any, id_m : any) => {
        setMaisEnabled(true);
        axios.post('https://www.gmerola.com.br/feedit/api/responsavel/aumentar_missao', {
            'id_crianca': id_c,
            'id_missao': id_m,
        }).then(response => {
            console.log(response.data);
            setMaisEnabled(false);
        })
    };

    const diminuirMissao = (id_c : any, id_m : any) => {
        setMenosEnabled(true);
        axios.post('https://www.gmerola.com.br/feedit/api/responsavel/diminuir_missao', {
            'id_crianca': id_c,
            'id_missao': id_m,
        }).then(response => {
            console.log(response.data);
            setMenosEnabled(false);
        })
    };

    return (
        <View style={{marginVertical: 4}}>
            {expanded ? 
            <TouchableOpacity key={props.criancaNome + 'header'} style={styles.SanfonaHeaderAberto} onPress={toggleExpand}>
                <Text style={styles.TituloSanfona}>{props.criancaNome}</Text>
                <Icon name={expanded ? "chevron-up" : "chevron-down"} size={24} color={theme.COLORS.WHITE} />
            </TouchableOpacity>
            : 
            <TouchableOpacity key={props.criancaNome + 'header'} style={styles.SanfonaHeaderFechado} onPress={toggleExpand}>
                <Text style={styles.TituloSanfona}>{props.criancaNome}</Text>
                <Icon name={expanded ? "chevron-up" : "chevron-down"} size={24} color={theme.COLORS.WHITE} />
            </TouchableOpacity>
            }
            {expanded && (
                <View style={styles.SanfonaBody}>
                    <Text key={props.criancaNome + "id"} style={{fontSize: 20, color: theme.COLORS.WHITE, width: '100%', textAlign: 'center'}}>Id: {props.id}</Text>
                    {props.missoes && typeof props.missoes === 'object' && Object.entries(props.missoes).map(([key, value]) => (
                      <>
                        <View key={key} style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginBottom: 12}}>
                          <TouchableOpacity disabled={menosEnabled} style={styles.Menos} onPress={() => diminuirMissao(props.id, value.id_missao)}>
                            <Icon name="minus" size={20} color={theme.COLORS.WHITE}/>
                          </TouchableOpacity>
                          <View style={{flexDirection: 'column', width: '60%'}}>
                            <Text style={styles.NomeMissao}>{value.nome_missao}</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                              <View style={styles.barraNula}>
                                <View style={{width: value.progresso_tarefa/value.tamanho*180, height: 12, backgroundColor: "green", borderRadius: 90}}></View>
                              </View>
                              <Text style={styles.Porcentagem}>{value.progresso_tarefa}/{value.tamanho}</Text>
                            </View>
                          </View>
                          <TouchableOpacity disabled={maisEnabled} style={styles.Mais} onPress={() => aumentarMissao(props.id, value.id_missao)}>
                            <Icon name="plus" size={20} color={theme.COLORS.WHITE}/>
                          </TouchableOpacity>
                        </View>
                      </>
                    ))}
                    <TouchableOpacity onPress={props.func} style={{backgroundColor: theme.COLORS.GREEN_100, padding: 8, borderRadius: 12, marginTop: 12}}>
                        <Text style={{color: theme.COLORS.WHITE, fontSize: 16, textAlign: 'center'}}>Ir para o pet da crianca</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

export const styles = StyleSheet.create({
    Sanfona: {
        flexDirection: 'column',
        gap: 0,
        margin: 4,
    },
    SanfonaHeaderFechado: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.COLORS.BLUE_300,
        borderRadius: 12,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 8,
    },
    SanfonaHeaderAberto: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.COLORS.BLUE_300,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 8,
    },
    SanfonaBody: {
        padding: 12,
        backgroundColor: theme.COLORS.BLUE_200,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    TituloSanfona: {
        color: theme.COLORS.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
    },
    Menos: {
        width: 40,
        height: 40,
        textAlign: 'center',
        borderRadius: 90,
        color: theme.COLORS.WHITE,
        backgroundColor: theme.COLORS.RED_100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Mais: {
        width: 40,
        height: 40,
        textAlign: 'center',
        borderRadius: 90,
        color: theme.COLORS.WHITE,
        backgroundColor: theme.COLORS.GREEN_100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    NomeMissao: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.COLORS.WHITE,
    },
    Barra: {
        backgroundColor: theme.COLORS.BLUE_100,
        height: 20,
        width: 200,
    },
    Porcentagem: {
        fontSize: 16,
        color: theme.COLORS.WHITE,
    },
    barraNula: {
        width: 180,
        height: 16,
        backgroundColor: theme.COLORS.BLUE_400,
        paddingVertical: 5,
        paddingHorizontal: 1,
        borderRadius: 90,
        justifyContent: 'center',
        marginEnd: 2,
    },
});