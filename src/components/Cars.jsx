import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { FlatList, ActivityIndicator } from "react-native";
import api from "../../api";

// Styled Components
const ContentCars = styled.View`
  background-color: #7594ad;
  padding: 16px;
  border-radius: 10px;
  margin: 10px 0;
`;

const Title = styled.Text`
  font-family: ${(props) => props.font};
  color: black;
  font-size: 20px;
  text-align: center;
`;

const TitleDatas = styled.Text`
  font-family: ${(props) => props.font};
  color: black;
  font-size: 16px;
`;

const Datas = styled.View`
  margin-top: 8px;
`;

export function Cars({ font }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    // Função para buscar os dados
    const fetchData = async () => {
        try {
            const response = await api.get("/api/veiculos");

            // Inverte a lista para exibir o mais recente primeiro
            const sortedData = [...response.data].reverse();
            setData(sortedData);
        } catch (error) {
            console.error("❌ Erro:", error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!data || data.length === 0) {
        return <Title font={font}>Nenhum veículo encontrado</Title>;
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()} // usa índice da array
            refreshing={refreshing}
            onRefresh={() => {
                setRefreshing(true);
                fetchData();
            }}
            renderItem={({ item }) => (
                <ContentCars>
                    <Title font={font}>Placa: {item.placa}</Title>
                    <Datas>
                        <TitleDatas font={font}>
                            Data de entrada: {item.dataEntrada}
                        </TitleDatas>
                        <TitleDatas font={font}>
                            Horário de entrada: {item.horarioEntrada}
                        </TitleDatas>
                    </Datas>
                </ContentCars>
            )}
        />
    );
}