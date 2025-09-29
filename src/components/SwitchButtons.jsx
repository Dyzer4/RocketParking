import styled from "styled-components/native";
import { useRoute, useNavigation } from "@react-navigation/native";

const BtnEntrada = styled.Pressable`
  background-color: ${(props) => (props.ativoBtn ? "#7594AD" : "#BEC9D3")};
  border-radius: 20px 0 0 20px;
  border-right-width: 1px;
  border-right-color: #000;
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BtnSaida = styled.Pressable`
  background-color: ${(props) => (props.ativoBtn ? "#7594AD" : "#BEC9D3")};
  border-radius: 0 20px 20px 0;
  border-left-width: 1px;
  border-left-color: #000;
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnText = styled.Text`
  font-family: ${(props) => props.font};
  text-transform: uppercase;
  font-size: 20px;
`;

const Switch = styled.View`
  flex-direction: row;
  align-self: center;
  position: absolute;
  bottom: 6%;
  margin: 0 10%;
`;

export default function SwitchButtons({ font }) {
  const route = useRoute();     
  const navigation = useNavigation(); 

  return (
    <Switch>
      <BtnEntrada
        ativoBtn={route.name === "Entrada"}
        onPress={() => navigation.navigate("Entrada")}
      >
        <BtnText font={font}>Entrada</BtnText>
      </BtnEntrada>
      <BtnSaida
        ativoBtn={route.name === "Saida"}
        onPress={() => navigation.navigate("Saida")}
      >
        <BtnText font={font}>Saída</BtnText>
      </BtnSaida>
    </Switch>
  );
}
