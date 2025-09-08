import styled from "styled-components/native";

// Styled Components
const ContentCars = styled.View`
    background-color: #7594AD;
    padding: 16px;
    border-radius: 10px;
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

// ✅ Properly destructure props here:
export function Cars({ font,  }) {
    return (
        <ContentCars>
            <Title font={font}>Placa:</Title>
            <Datas>
                <TitleDatas font={font}>Data de entrada:</TitleDatas>
                <TitleDatas font={font}>Horário de entrada:</TitleDatas>
            </Datas>
        </ContentCars>
    );
}

// npx expo start --tunnel