import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Tela} from './style';
import { Button, View } from 'react-native';

// imagens---------------------------------------------
// import homeBackground from '../../../assets/homeImage.png';
const homeBackground = require('../../../assets/homeImage.png');
// -----------------------------------------------------

export default function Home({navigation}: any) {
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

    const handlePress = () => {
        // Navega para a tela Login
        navigation.navigate('Login');
    };

    return (
        // Usa TouchableOpacity para detectar toques na tela
        <Container onPress={()=>handlePress()}>
            <Tela source={homeBackground}/>
            <View style={{position: 'absolute', bottom: 0, right: 0}}>
                <Button title="Limpar Cache" onPress={() => limparCache()}/>
            </View>
        </Container>
    );
}

