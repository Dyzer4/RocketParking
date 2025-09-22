import styled from "styled-components/native";
import { useState, useEffect } from "react";
import api from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

// ==================== Styled Components ====================

const Label = styled.Text`
  font-size: 20px;
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

// ==================== Componente ====================
export function UserContent({ font, onCadastroSuccess }) {
  const [loading, setLoading] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const navigation = useNavigation(); // ✅ agora navigation vem daqui

  // Buscar dados do usuário ao montar o componente
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("token");
        const response = await api.get("/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200 || response.status === 201) {
          setUsuario(response.data || null);
          if (onCadastroSuccess) onCadastroSuccess();
        } else {
          alert(
            "Erro ao buscar usuário: " +
              (response.data?.message || "Tente novamente.")
          );
        }
      } catch (error) {
        alert("Falha na conexão com a API.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Função de logoff
  const handleLogoff = async () => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem("token");
      setUsuario(null);
      navigation.navigate("Auth"); // ✅ usa navigation direto
    } catch (error) {
      alert("Erro ao deslogar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {usuario && (
        <ResponseEntrada>
          <Label font={font}>Nome: {usuario.nome}</Label>
          <Label font={font}>Email: {usuario.email}</Label>
        </ResponseEntrada>
      )}

      <ButtonForm onPress={handleLogoff} disabled={loading}>
        <ButtonFormText font={font}>
          {loading ? "Deslogando..." : "Logoff"}
        </ButtonFormText>
      </ButtonForm>
    </>
  );
}
