import React, { useState } from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api';

const Title = styled.Text`
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
  font-family: ${(props) => props.font};
`;

const Form = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LabelContent = styled.View`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.Text`
  font-size: 20px;
  font-family: ${(props) => props.font};
`;

const Input = styled.TextInput`
  padding: 13px 15px;
  background-color: #BEC9D3;
  border-radius: 20px;
  font-family: ${(props) => props.font};
`;

const ButtonForm = styled.Pressable`
  border-radius: 20px;
  display: flex;
  padding: 8px 51px;
  align-self: center;
  background-color: #7594AD;
`;

const ButtonFormText = styled.Text`
  font-size: 20px;
  font-family: ${(props) => props.font};
`;

export function Login({ font, navigation, onLoginSuccess }) {
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
      console.log('Token salvo:', token);
      
      // Navegar para dashboard
      navigation.replace('Dashboard'); // substitui a tela de login
      
      if (onLoginSuccess) onLoginSuccess(token);
    } else if (response.status === 403) {
      alert('Acesso proibido: verifique suas credenciais.');
    } else {
      alert('Erro no login: ' + (response.data?.message || 'Tente novamente.'));
    }
  } catch (error) {
    console.log('Erro no login:', error.response?.data || error.message);
    alert('Falha na conexão com a API.');
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      <Title font={font}>Login</Title>
      <Form>
        <LabelContent>
          <Label font={font}>Email:</Label>
          <Input
            font={font}
            placeholder="Digite seu email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </LabelContent>

        <LabelContent>
          <Label font={font}>Senha:</Label>
          <Input
            font={font}
            placeholder="Digite sua senha"
            secureTextEntry
            autoCapitalize="none"
            value={senha}
            onChangeText={setSenha}
          />
        </LabelContent>

        <ButtonForm onPress={handleLogin} disabled={loading}>
          <ButtonFormText font={font}>
            {loading ? 'Carregando...' : 'Entrar'}
          </ButtonFormText>
        </ButtonForm>
      </Form>
    </>
  );
}
