
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginContent from './src/screens/authContent';
import CadastroContent from './src/screens/cadastro';
import Dashboard from './src/screens/dashboard';
import Entrada from './src/screens/entrada';
import Saida from './src/screens/saida';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Wrapper para aplicar background e overlay em qualquer tela
function withScreenWrapper(Component, extraProps = {}) {
  return (props) => (
    <Background source={require('./src/assets/images/background.png')}>
      <Overlay>
        <Component {...props} {...extraProps} />
      </Overlay>
    </Background>
  );
}

// Tabs do app (ex.: Dashboard e outras futuras)
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Dashboard"
        component={withScreenWrapper(Dashboard, { font: 'Coda' })}
      />
      <Tab.Screen
        name="Entrada"
        component={withScreenWrapper(Entrada, { font: 'Coda' })}
      />
      <Tab.Screen
        name="Saida"
        component={withScreenWrapper(Saida, { font: 'Coda' })}
      />
      
    </Tab.Navigator>
  );
}

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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={withScreenWrapper(LoginContent, { font: 'Coda' })}
        />
        <Stack.Screen
          name="Cadastro"
          component={withScreenWrapper(CadastroContent, { font: 'Coda' })}
        />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ====== Styled Components ======
const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  width: 100%;
`;
