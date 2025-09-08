import React, { useState } from 'react';
import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';
import { Cadastro } from '../../components/Cadastro';
import { Login } from '../../components/Login';

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

const LogoLogin = styled.Image`
    align-self: center;
    margin-top: 53px;
    width: 240px;
    height: 240px;
    margin-bottom: 77px;
`;

const LogoCadastro = styled.Image`
    align-self: center;
    margin-top: 53px;
`;

const SwitchButtons = styled.View`
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-top: 5%;
    position: absolute;
    bottom: 6%;
`;

const SwitchBtnLogin = styled.Pressable`
  background-color: ${(props) => (props.ativo ? '#7594AD' : '#BEC9D3')};
  border-radius: 20px 0 0 20px;
  border-right: 1px solid;
  padding: 17px 64px;
`;

const SwitchBtnCadastro = styled.Pressable`
  background-color: ${(props) => (props.ativo ? '#7594AD' : '#BEC9D3')};
  border-radius: 0 20px 20px 0;
  border-left: 1px solid;
  padding: 17px 64px;
`;


const BtnText = styled.Text`
    font-family: ${(props) => props.font};
    text-transform: uppercase;
`;

export default function CadastroContent({ font }) {
    const [tela, setTela] = useState('login'); // estado para alternar telas

    return (
        <>  
            {tela === 'login' && <LogoLogin source={require("../../assets/images/Logo.png")} />}
            {tela === 'cadastro' && <LogoCadastro source={require("../../assets/images/Logo.png")} />}
            <Content>
                {tela === 'login' && <Login font={font} />}
                {tela === 'cadastro' && <Cadastro font={font} />}
            </Content>
            <SwitchButtons>
                <SwitchBtnLogin onPress={() => setTela('login')} ativo={tela === 'login'} style = "BackgroundColor: #7594AD">
                    <BtnText font={font}>Login</BtnText>
                </SwitchBtnLogin>

                <SwitchBtnCadastro onPress={() => setTela('cadastro')} ativo={tela === 'cadastro'} style = "BackgroundColor: #7594AD">
                    <BtnText font={font}>Cadastro</BtnText>
                </SwitchBtnCadastro>
            </SwitchButtons>

        </>
    );
}
