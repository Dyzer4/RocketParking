import styled from "styled-components/native"
import React, { useState } from 'react';

const BtnEntrada = styled.Pressable`
    background-color: ${(props) => (props.ativo ? '#7594AD' : '#BEC9D3')};
    border-radius: 20px 0 0 20px;
    border-right: 1px solid;
    padding: 17px 64px;
`

const BtnSaida = styled.Pressable`
    background-color: ${(props) => (props.ativo ? '#7594AD' : '#BEC9D3')};
    border-radius: 0 20px 20px 0;
    border-left: 1px solid;
    padding: 17px 64px;
`
const BtnText = styled.Text`
    font-family: ${(props) => props.font};
    text-transform: uppercase;
`;

const Switch = styled.View`
    flex-direction: row;
    align-self: center;
    position: absolute;
    bottom: 6%;
`



export default function SwitchButtons({font, navigation}) {
    const [ativo, setAtivoBtn] = useState('');

    const handleSwitch = (tela) => {
        setAtivoBtn(tela);
        navigation.navigate(tela);
    };

    return (
        <>
            <Switch>
                <BtnEntrada
                    left
                    ativo={ativo === 'entrada'}
                    onPress={() => handleSwitch('Entrada')}
                >
                    <BtnText font={font}>Entrada</BtnText>
                </BtnEntrada>

                <BtnSaida
                    ativo={ativo === 'saida'}
                    onPress={() => handleSwitch('Saida')}
                >
                    <BtnText font={font}>Saída</BtnText>
                </BtnSaida>
            </Switch>
        </>
    )
}