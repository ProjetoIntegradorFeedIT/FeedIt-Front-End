import { StyleSheet, Text, View, Button} from 'react-native';
import theme from '../../themes/theme';

export default function NavegacaoTestes({navigation}: any) {
    return (
        <View style={styles.container}>
            <Text>Va para tela que você precisa programar</Text>
            <Button title="Home" onPress={() => navigation.navigate('Home')}/>
            <Button title="Login" onPress={() => navigation.navigate('Login')}/>
            <Button title="CriancaMain" onPress={() => navigation.navigate('CriancaMain')}/>
        </View>
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