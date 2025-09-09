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
  margin: 0 40px;
  overflow: hidden;
  elevation: 5;
`;

const LogoCadastro = styled.Image`
    align-self: center;
    margin-top: 53px;
    width: 240px;
    height: 240px;
    margin-bottom: 5%;
`;

const SwitchButtons = styled.View`
    flex-direction: row;
    align-self: center;
    position: absolute;
    bottom: 6%;
`;

const SwitchBtn = styled.Pressable`
  background-color: ${(props) => (props.ativo ? '#7594AD' : '#BEC9D3')};
  padding: 17px 64px;
  border-radius: ${(props) => (props.left ? '20px 0 0 20px' : '0 20px 20px 0')};
  border-left-width: ${(props) => (props.left ? 0 : 1)}px;
  border-right-width: ${(props) => (props.left ? 1 : 0)}px;
  border-color: #fff;
`;

const BtnText = styled.Text`
    font-family: ${(props) => props.font};
    text-transform: uppercase;
`;

export default function CadastroContent({ font, navigation }) {
    const [ativo, setAtivo] = useState('Cadastro');

    const handleSwitch = (tela) => {
        setAtivo(tela);
        navigation.navigate(tela);
    };

    return (
        <ScreenWrapper>
            <LogoCadastro source={require("../../assets/images/Logo.png")} />
            <Content>
                <Cadastro font={font} />
            </Content>

            <SwitchButtons>
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
            </SwitchButtons>
        </ScreenWrapper>
    );
}
