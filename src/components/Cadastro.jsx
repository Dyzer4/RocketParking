import React, { useState } from 'react';
import styled from 'styled-components/native';
import api from '../../api'; // nossa instância do Axios com JWT

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
  color: #000;
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

export function Cadastro({ font, onCadastroSuccess }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCadastro = async () => {
    if (!nome || !email || !senha) {
      alert('Preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/auth/register', {
        nome,
        email,
        senha,
      });

      if (response.status === 201 || response.status === 200) {
        alert('Cadastro realizado com sucesso!');
        if (onCadastroSuccess) onCadastroSuccess(); // callback para navegar ou limpar formulário
      } else {
        alert('Erro ao cadastrar: ' + (response.data?.message || 'Tente novamente.'));
      }
    } catch (error) {
      console.log('Erro no cadastro:', error.response?.data || error.message);
      alert(error.response?.data.message|| error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Title font={font}>Cadastro</Title>
      <Form>
        <LabelContent>
          <Label font={font}>Nome:</Label>
          <Input
            font={font}
            placeholder="Digite seu nome completo"
            value={nome}
            onChangeText={setNome}
            placeholderTextColor="#7594AD"
          />
        </LabelContent>

        <LabelContent>
          <Label font={font}>Email:</Label>
          <Input
            font={font}
            placeholder="Digite seu email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#7594AD"
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
            placeholderTextColor="#7594AD"
          />
        </LabelContent>

        <ButtonForm onPress={handleCadastro} disabled={loading}>
          <ButtonFormText font={font}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </ButtonFormText>
        </ButtonForm>
      </Form>
    </>
  );
}
