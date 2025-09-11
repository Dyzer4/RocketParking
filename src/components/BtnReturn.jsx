import styled from 'styled-components/native';

const ReturnBtn = styled.Pressable`
    background-color: #7594AD;
    padding: 10px;
    border-radius: 10px;
`

const ReturnIcon = styled.Image`
    width: 15px;
    height: 15px;
`

export function BtnReturn({navigation}) {

    return (
        <ReturnBtn onPress={() => navigation.navigate("Dashboard")}>
            <ReturnIcon source={require("../assets/images/return-icon.png")} />
        </ReturnBtn>
    )
}