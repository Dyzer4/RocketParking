import React, { useState } from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api';

const Title = styled.Text`font-size: 24px; text-align: center; margin-bottom: 40px;`;
const Form = styled.View`gap: 20px;`;
const Label = styled.Text`font-size: 20px;`;
const Input = styled.TextInput`padding: 13px 15px; background-color: #BEC9D3; border-radius: 20px;`;
const ButtonForm = styled.Pressable`padding: 10px 40px; background-color: #7594AD; border-radius: 20px; align-self: center;`;
const ButtonFormText = styled.Text`font-size: 20px; color: white;`;

export function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      alert('Preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/auth/login', { email, senha });

      if (response.status === 200) {
        const { token } = response.data;
        await AsyncStorage.setItem('@token', token); 
        navigation.replace('MainTabs'); 
      } else {
        alert('Erro: ' + (response.data?.message || 'Tente novamente.'));
      }
    } catch (error) {
      console.log('Erro no login:', error.response?.data || error.message);
      alert('Falha na conexão ou credenciais inválidas.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Title>Login</Title>
      <Form>
        <Label>Email:</Label>
        <Input placeholder="Digite seu email" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
        <Label>Senha:</Label>
        <Input placeholder="Digite sua senha" secureTextEntry autoCapitalize="none" value={senha} onChangeText={setSenha} />
        <ButtonForm onPress={handleLogin} disabled={loading}>
          <ButtonFormText>{loading ? 'Carregando...' : 'Entrar'}</ButtonFormText>
        </ButtonForm>
      </Form>
    </>
  );
}
