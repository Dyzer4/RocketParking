import React, { useState } from 'react';
import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';
import { Cadastro } from '../../components/Cadastro';
import { ScreenWrapper } from '../../components/Background';

const Content = styled(BlurView).attrs({
    intensity: 100,
    tint: 'light'
})`
  display:flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 32px 10px;
  border-radius: 20px;
  margin: -10% 40px 20px 40px;
  overflow: hidden;
  elevation: 5;
`;

const LogoCadastro = styled.Image`
    align-self: center;
    margin-top: 53px;
    width: 240px;
    height: 240px;
    margin-bottom: 2%;
`;

const SwitchBtn = styled.Pressable`
  background-color: ${(props) => (props.ativo ? '#7594AD' : '#BEC9D3')};
  border-radius: ${(props) => (props.left ? '20px 0 0 20px' : '0 20px 20px 0')};
  border-left-width: ${(props) => (props.left ? 0 : 1)}px;
  border-right-width: ${(props) => (props.left ? 1 : 0)}px;
  border-color: #000;
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnText = styled.Text`
    font-family: ${(props) => props.font};
    text-transform: uppercase;
`;

const SwitchBtns = styled.View`
    flex-direction: row;
    align-self: center;
    position: relative;
    margin: 0 40px;
`;

export default function CadastroContent({ font, navigation }) {
    const [ativo, setAtivo] = useState('Cadastro');

    const handleSwitch = (tela) => {
        setAtivo(tela);
        navigation.replace(tela);
    };

    return (
        <ScreenWrapper>
            <LogoCadastro source={require("../../assets/images/Logo.png")} />
            <Content>
                <Cadastro font={font} />
            </Content>

            <SwitchBtns>
                <SwitchBtn
                    left
                    ativo={ativo === 'Login'}
                    onPress={() => handleSwitch('Login')}
                >
                    <BtnText font={font}>Login</BtnText>
                </SwitchBtn>

                <SwitchBtn
                    ativo={ativo === 'Cadastro'}
                    onPress={() => handleSwitch('Cadastro')}
                >
                    <BtnText font={font}>Cadastro</BtnText>
                </SwitchBtn>
            </SwitchBtns>
        </ScreenWrapper>
    );
}
