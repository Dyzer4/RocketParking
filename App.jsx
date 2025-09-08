// import { StatusBar } from 'expo-status-bar';
// import styled from 'styled-components/native';
// import CadastroContent from './src/screens/cadastro-login';
// import { useFonts } from "expo-font";


// export default function App() {
//   const [fontsLoaded] = useFonts({
//     Coda: require("./src/assets/fonts/Coda-Regular.ttf"),
//   });
//   return (
//     <Background source={require("./src/assets/images/background.png")}>
//       <StatusBar hidden />
//       <ContainerApp>
//         <CadastroContent/>
//       </ContainerApp>
//     </Background>
//   );
// }

// const ContainerApp = styled.SafeAreaView`
//   flex :1
// `
// const Background = styled.ImageBackground`
//   flex : 1;
// `

// export let font = "Coda"
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import CadastroContent from './src/screens/cadastro-login';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import { Dashboard } from './src/screens/dashboard';

export default function App() {
  const [fontsLoaded] = useFonts({
    Coda: require('./src/assets/fonts/Coda-Regular.ttf'),
  });

  if (!fontsLoaded) {
    // Mostra um loading enquanto a fonte carrega
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#7594AD" />
      </LoadingContainer>
    );
  }

  return (
    <Background source={require('./src/assets/images/background.png')}>
      <StatusBar hidden />
      <ContainerApp>
        {/* <CadastroContent font="Coda" /> */}
        <Dashboard font="Coda"/>
      </ContainerApp>
    </Background>
  );
}

const ContainerApp = styled.SafeAreaView`
  flex: 1;
`;

const Background = styled.ImageBackground`
  flex: 1;
`;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
