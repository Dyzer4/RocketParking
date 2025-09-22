import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar'; 

import AuthContent from './src/screens/authContent';
import Dashboard from './src/screens/dashboard';
import Entrada from './src/screens/entrada';
import Saida from './src/screens/saida';
import Perfil from './src/screens/perfil'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function withScreenWrapper(Component, extraProps = {}) {
  return (props) => (
    <Background source={require('./src/assets/images/background.png')}>
      <Overlay>
        <Component {...props} {...extraProps} />
      </Overlay>
    </Background>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: '#ccc',
        tabBarLabelStyle: {
          fontFamily: 'Coda',
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 65,
          position: 'absolute',
          paddingBottom: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 5,
          elevation: 5,
        },
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = 'home';
          } else if (route.name === 'Entrada') {
            iconName = 'arrow-down';
          } else if (route.name === 'Saida') {
            iconName = 'arrow-up';
          } else if (route.name === 'Perfil'){
            iconName = 'user'
          }
          const { Feather } = require('@expo/vector-icons');
          return <Feather name={iconName} size={22} color={color} />;
        },
      })}
    >
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
      <Tab.Screen
        name="Perfil"
        component={withScreenWrapper(Perfil, { font: 'Coda' })}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('transparent');
    NavigationBar.setVisibilityAsync('hidden');
    NavigationBar.setBehaviorAsync('overlay-swipe');
  }, []);

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
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Auth"
          component={withScreenWrapper(AuthContent, { font: 'Coda' })}
        />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
