import { StyleSheet, Text, View, Button} from 'react-native';
import theme from '../../themes/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NavegacaoTestes({navigation}: any) {

    const getObject = async (key: string) => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        console.error(e);
      }
    };
      
    const clearStorage = async () => {
      try {
        await AsyncStorage.clear();
        console.log('Storage successfully cleared!');
      } catch (e) {
        console.error('Failed to clear the async storage.', e);
      }
    };

    function limparCache() {
        getObject('usuario').then((value) => {
            console.log("Antes: " + value);
        });
        clearStorage();
        getObject('usuario').then((value) => {
            console.log("Depois: " + value);
        });
    }

    return (
        <>
            <View style={styles.container}>
                <Text>Va para tela que você precisa programar</Text>
                <Button title="Home" onPress={() => navigation.navigate('Home')}/>
                <Button title="Login" onPress={() => navigation.navigate('Login')}/>
                <Button title="CriancaMain" onPress={() => navigation.navigate('CriancaMain')}/>
                <Button title="CadastroBi" onPress={() => navigation.navigate('CadastroBi')}/>
                <Button title="CadastroValidacao" onPress={() => navigation.navigate('CadastroValidacao')}/>
                <Button title="ResponsavelMain" onPress={() => navigation.navigate('ResponsavelMain')}/>
                <Button title="TelaProfissional" onPress={() => navigation.navigate('TelaProfissional')}/>
                <Button title="TelaProfissional2" onPress={() => navigation.navigate('TelaProfissional2')}/>
                <Button title="CadastroCrianca" onPress={() => navigation.navigate('CadastroCrianca')}/>
            </View>
            <View style={styles.padding}>
                <Button title="Limpar Cache" onPress={() => limparCache()}/>
            </View>
        </>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.BLUE_100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    padding: {
        padding: 10,
    },
});