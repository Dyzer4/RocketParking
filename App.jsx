// npx expo start --tunnel
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './src/screens/dashboard';
import LoginContent from './src/screens/login';
import CadastroContent from './src/screens/cadastro';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Coda: require('./src/assets/fonts/Coda-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#7594AD" />
      </LoadingContainer>
    );
  }

  return (
    <Background source={require('./src/assets/images/background.png')}>
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login">
            {props => <LoginContent {...props} font="Coda" />}
          </Stack.Screen>
          <Stack.Screen name="Cadastro">
            {props => <CadastroContent {...props} font="Coda" />}
          </Stack.Screen>
          <Stack.Screen name="Dashboard">
            {props => <Dashboard {...props} font="Coda" />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Background>

  );
}

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Background = styled.ImageBackground`
  flex: 1;
`;
