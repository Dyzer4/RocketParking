import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';
import { Cars } from '../../components/Cars';

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
  margin: 0 40px;
  overflow: hidden;
  elevation: 5;
`;

const SwitchButtons = styled.View`
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-top: 5%;
    position: absolute;
    bottom: 6%;
`;

const SwitchBtnLogin = styled.Pressable`
  background-color: ${(props) => (props.ativo ? '#7594AD' : '#BEC9D3')};
  border-radius: 20px 0 0 20px;
  border-right: 1px solid;
  padding: 17px 64px;
`;

const SwitchBtnCadastro = styled.Pressable`
  background-color: ${(props) => (props.ativo ? '#7594AD' : '#BEC9D3')};
  border-radius: 0 20px 20px 0;
  border-left: 1px solid;
  padding: 17px 64px;
`;


const BtnText = styled.Text`
    font-family: ${(props) => props.font};
    text-transform: uppercase;
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

const ListCars = styled.View`
    
`

export function Dashboard({font}) {
    return (
        <>
            <Content>
                <Head>
                    <Logo source={require("../../assets/images/Logo.png")}></Logo>
                    <Title font={font}>Veículos ativos</Title>
                    <BtnUser>
                        <UserIcon source={require("../../assets/images/user-icon.png")}/>
                    </BtnUser>
                </Head>
                <ListCars>
                    <Cars font={font}/>
                </ListCars>
            </Content>
            {/* <SwitchButtons>
                <SwitchBtnLogin>
                    <BtnText font={font}>Login</BtnText>
                </SwitchBtnLogin>

                <SwitchBtnCadastro>
                    <BtnText font={font}>Cadastro</BtnText>
                </SwitchBtnCadastro>
            </SwitchButtons> */}
        </>
    )
}