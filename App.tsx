import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa das pages/telas -------------------------------------
import Home from './app/pages/Home/Index';
import Login from './app/pages/Login/Index';
import CrincaMain from './app/pages/CriancaMain/Index';
import GuardaRoupa from './app/pages/GuardaRoupa/Index';

import NavegacaoTestes from './app/pages/NavegacaoTestes/Index';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}