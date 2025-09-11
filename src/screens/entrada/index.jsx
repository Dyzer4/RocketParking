import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';
import { ScreenWrapper } from '../../components/Background';
import SwitchButtons  from '../../components/SwitchButtons';
import { BtnReturn } from '../../components/BtnReturn';
import { EntradaForm } from '../../components/Entrada';

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



export default function Entrada({font, navigation}) {
    return (
        <ScreenWrapper>
            <Content>
                <Head>
                    <Logo source={require("../../assets/images/Logo.png")}></Logo>
                    <Title font={font}>Entrada</Title>
                    <BtnReturn navigation={navigation}/>
                </Head>
                <EntradaForm font={font}/>
            </Content>
            <SwitchButtons font={font} navigation={navigation}/>
        </ScreenWrapper>
    )
}