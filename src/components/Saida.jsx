import styled from "styled-components/native";
import { useState } from "react";
import api from "../../api"; // ajuste o caminho do seu axios/api
import AsyncStorage from '@react-native-async-storage/async-storage';

// ==================== Styled Components ====================
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
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

const ButtonFormText = styled.Text`
  font-size: 20px;
  font-family: ${(props) => props.font};
  color: #fff;
`;

const ResponseEntrada = styled.View`
  margin-top: 20px;
`;

const DataHoraEntrada = styled.View``;

// ==================== Componente ====================
export function SaidaForm({ font, onCadastroSuccess }) {
  const [placa, setPlaca] = useState("");
  const [loading, setLoading] = useState(false);
  const [veiculo, setVeiculo] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const handleCadastro = async () => {
    if (!placa) {
      alert("Preencha a placa");
      return;
    }

    // Regex: aceita placa antiga e Mercosul
    const regexPlaca = /^[A-Z]{3}-?\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$/;
    if (!regexPlaca.test(placa)) {
      alert("Placa inválida. Formatos aceitos: ABC1234 ou ABC1D23");
      return;
    }

    setLoading(true);
    try {
      // Envia no formato correto
      const token = await AsyncStorage.getItem("token");
      const response = await api.put(
        "/api/veiculos/saida",
        { placa },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200 || response.status === 201) {
        const { mensagem, veiculo } = response.data;

        setMensagem(mensagem || "Saída liberada!");
        setVeiculo(veiculo || null);

        // limpa o input após sucesso
        setPlaca("");

        if (onCadastroSuccess) onCadastroSuccess();
      } else {
        alert(
          "Erro ao cadastrar: " +
          (response.data?.message || "Tente novamente.")
        );
      }
    } catch (error) {
      alert("Falha na conexão com a API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LabelContent>
        <Label font={font}>Placa:</Label>
        <Input
          font={font}
          placeholder="Digite a placa"
          autoCapitalize="characters"
          value={placa}
          onChangeText={(text) => {
            // Normaliza (remove caracteres inválidos e deixa maiúsculo)
            let cleaned = text.replace(/[^A-Z0-9]/gi, "");
            cleaned = cleaned.toUpperCase();
            setPlaca(cleaned);
          }}
        />
      </LabelContent>

      <ButtonForm onPress={handleCadastro} disabled={loading}>
        <ButtonFormText font={font}>
          {loading ? "Enviando..." : "Liberar saída"}
        </ButtonFormText>
      </ButtonForm>

      {veiculo && (
        <ResponseEntrada>
          {mensagem ? <Label font={font}>{mensagem}</Label> : null}
          <Label font={font}>Placa: {veiculo.placa}</Label>
          <DataHoraEntrada>
            <Label font={font}>Data de Entrada: {veiculo.dataEntrada}</Label>
            <Label font={font}>Hora de Entrada: {veiculo.horarioEntrada}</Label>
            <Label font={font}>Data de Saída: {veiculo.dataEntrada}</Label>
            <Label font={font}>Hora de Saída: {veiculo.horarioEntrada}</Label>
          </DataHoraEntrada>
          <Label font={font}>Valor Total: R${veiculo.valorPago},00</Label>
        </ResponseEntrada>
      )}
    </>
  );
}
