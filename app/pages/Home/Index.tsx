import { Container, Tela} from './style';

// imagens---------------------------------------------
// import homeBackground from '../../../assets/homeImage.png';
const homeBackground = require('../../../assets/homeImage.png');
// -----------------------------------------------------

export default function Home({navigation}: any) {
    const handlePress = () => {
        // Navega para a tela Login
        navigation.navigate('NavegacaoTestes');
    };

    return (
        // Usa TouchableOpacity para detectar toques na tela
        <Container onPress={()=>handlePress()}>
            <Tela source={homeBackground}/>
        </Container>
    );
}

