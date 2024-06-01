import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa das pages/telas -------------------------------------
import Home from './app/pages/Home/Index';
import Login from './app/pages/Login/Index';
import CrincaMain from './app/pages/CriancaMain/Index';
import GuardaRoupa from './app/pages/GuardaRoupa/Index';
import CadastroBi from './app/pages/CadastroBi/Index';
import CadastroResponsavel from './app/pages/CadastroResponsavel/Index';
import CadastroProfissional from './app/pages/CadastroProfissional/Index';
import NavegacaoTestes from './app/pages/NavegacaoTestes/Index';
import Camera from './app/pages/Camera/Index';
import CadastroValidacao from './app/pages/CadastroValidacao/Index';
import ResponsavelMain from './app/pages/ResponsavelMain';
import TelaProfissional from './app/pages/TelaProfissional/Index';
import TelaProfissional2 from './app/pages/TelaProfissional2/Index';
import CadastroCrianca from './app/pages/CadastroCrianca';
// -------------------------------------------------------------


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="NavegacaoTestes" component={NavegacaoTestes} options={{headerShown: false}}/>
        <Stack.Screen name="CriancaMain" component={CrincaMain} options={{headerShown: false}}/>
        <Stack.Screen name="GuardaRoupa" component={GuardaRoupa} options={{headerShown: false}}/>
        <Stack.Screen name="CadastroBi" component={CadastroBi} options={{headerShown: false}}/>
        <Stack.Screen name="CadastroResponsavel" component={CadastroResponsavel} options={{headerShown: false}}/>
        <Stack.Screen name="CadastroProfissional" component={CadastroProfissional} options={{headerShown: false}}/>
        <Stack.Screen name="Camera" component={Camera} options={{headerShown: false}}/>
        <Stack.Screen name="CadastroValidacao" component={CadastroValidacao} options={{headerShown: false}}/>
        <Stack.Screen name="ResponsavelMain" component={ResponsavelMain} options={{headerShown: false}}/>
        <Stack.Screen name="TelaProfissional" component={TelaProfissional} options={{headerShown: false}}/>
        <Stack.Screen name="TelaProfissional2" component={TelaProfissional2} options={{headerShown: false}}/>
        <Stack.Screen name="CadastroCrianca" component={CadastroCrianca} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}