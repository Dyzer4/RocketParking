import styled from "styled-components/native";

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

const ButtonForm = styled.TouchableOpacity`
  border-radius: 20px;
  display: flex;
  padding: 8px 51px;
  align-self: center;
  background-color: #7594AD;
    margin-top: 20px;
`;

const ButtonFormText = styled.Text`
  font-size: 20px;
  font-family: ${(props) => props.font};
  color: #fff;
`;

const ResponseEntrada = styled.View`
    
`

const DataHoraEntrada = styled.View`

`

export function EntradaForm({ font }) {
  const [nome, setPlaca] = useState('');

  const handleCadastro = async () => {
    if (!senha) {
      alert('Preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/api/veiculos/entrada', {
        placa
      });

      if (response.status === 201 || response.status === 200) {
        alert('Cadastro realizado com sucesso!');
        if (onCadastroSuccess) onCadastroSuccess(); // callback para navegar ou limpar formulário
      } else {
        alert('Erro ao cadastrar: ' + (response.data?.message || 'Tente novamente.'));
      }
    } catch (error) {
      console.log('Erro no cadastro:', error.response?.data || error.message);
      alert('Falha na conexão com a API.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <LabelContent>
        <Label font={font}>
          Placa:
        </Label>
        <Input
          font={font}
          placeholder="Digite a placa"
          autoCapitalize="characters"
          pattern="{4}[0-9]-{4}[]"
          value={email}
          onChangeText={setEmail}></Input>
      </LabelContent>
      <ButtonForm>
        <ButtonFormText font={font}>Liberar entrada</ButtonFormText>
      </ButtonForm>
      <ResponseEntrada>
        <Label font={font}>Placa:</Label>
        <DataHoraEntrada>
          <Label font={font}>Data de entrada: 2025-09-11</Label>
          <Label font={font}>Hora de entrada: 15:30:20</Label>
        </DataHoraEntrada>
      </ResponseEntrada>
    </>

  )
} 