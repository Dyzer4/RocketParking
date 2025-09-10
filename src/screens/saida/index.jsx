import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';
import { ScreenWrapper } from '../../components/Background';
import SwitchButtons  from '../../components/SwitchButtons';
import { BtnReturn } from '../../components/BtnReturn';

const Head = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const Logo = styled.Image`
    width: 40px;
    height: 40px;
`

const Title = styled.Text`
  font-size: 24px;
  text-transform: uppercase;
  font-family: ${(props) => props.font};
`

const Content = styled(BlurView).attrs({
    intensity: 100,
    tint: 'light'
})`
  display:flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 32px 10px;
  border-radius: 20px;
  margin: 50px 40px;
  overflow: hidden;
  elevation: 5;
`;

const BtnUser = styled.Pressable`
    background-color: #7594AD;
    padding: 10px;
    border-radius: 10px;
`

const UserIcon = styled.Image`
    width: 15px;
    height: 15px;
`

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

export default function Entrada({font, navigation}) {
    return (
        <ScreenWrapper>
            <Content>
                <Head>
                    <Logo source={require("../../assets/images/Logo.png")}></Logo>
                    <Title font={font}>Saída</Title>
                    <BtnReturn/>
                </Head>
                <LabelContent>
                    <Label font={font}>
                        Placa:
                    </Label>
                    <Input font={font}></Input>
                </LabelContent>
            </Content>
            <SwitchButtons font={font} navigation={navigation}/>
        </ScreenWrapper>
    )
}