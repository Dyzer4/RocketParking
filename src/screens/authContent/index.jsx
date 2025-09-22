import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';
import { Login } from '../../components/Login';
import { Cadastro } from '../../components/Cadastro';
import { MotiView, AnimatePresence } from 'moti';
import { useState } from 'react';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 85%;
  position: relative;
`;

const ContentWrapper = styled(BlurView).attrs({
  intensity: 100,
  tint: 'light',
})`
  width: 100%;
  border-radius: 20px;
  padding: 32px 20px;
  overflow: hidden;
  elevation: 5;
  position:absolute;
  top: 30%;
`;

const Logo = styled.Image`
  align-self: center;
  width: 240px;
  height: 240px;
  margin-bottom: 5%;
  position: absolute;
  top: 5%;
`;

const SwitchButtons = styled.View`
  flex-direction: row;
  align-self: center;
  position: absolute;
  bottom: 6%;
  margin: 0 40px;
`;

const SwitchBtn = styled.Pressable`
  background-color: ${(props) => (props.ativo ? '#7594AD' : '#BEC9D3')};
  border-radius: ${(props) => (props.left ? '20px 0 0 20px' : '0 20px 20px 0')};
  border-left-width: ${(props) => (props.left ? 0 : 1)}px;
  border-right-width: ${(props) => (props.left ? 1 : 0)}px;
  border-color: #000;
  width: 50%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const BtnText = styled.Text`
  font-family: ${(props) => props.font};
  text-transform: uppercase;
`;

export default function AuthContent({ font, navigation }) {
  const [ativo, setAtivo] = useState('Login');

  return (
    <Container>
      <Logo source={require('../../assets/images/Logo.png')} />

      <ContentWrapper>
        <AnimatePresence exitBeforeEnter>
          {ativo === 'Login' ? (
            <MotiView
              key="login"
              from={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 10 }}
              transition={{ type: 'timing', duration: 400 }}
            >
              <Login font={font} navigation={navigation}/>
            </MotiView>
          ) : (
            <MotiView
              key="cadastro"
              from={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 10 }}
              transition={{ type: 'timing', duration: 400 }}
            >
              <Cadastro font={font} navigation={navigation}/>
            </MotiView>
          )}
        </AnimatePresence>
      </ContentWrapper>

      <SwitchButtons>
        <SwitchBtn left ativo={ativo === 'Login'} onPress={() => setAtivo('Login')}>
          <BtnText font={font}>Login</BtnText>
        </SwitchBtn>

        <SwitchBtn ativo={ativo === 'Cadastro'} onPress={() => setAtivo('Cadastro')}>
          <BtnText font={font}>Cadastro</BtnText>
        </SwitchBtn>
      </SwitchButtons>
    </Container>
  );
}
