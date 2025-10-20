import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';
import { Cars } from '../../components/Cars';

const Head = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
    justify-content: center;
`

const Logo = styled.Image`
    width: 100px;
    height: 100px;
    position: absolute;
    left: -15px;
    top: -30px;
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
  padding: 20px 10px;
  border-radius: 20px;
  margin: 50px 30px;
  overflow: hidden;
  elevation: 5;
  width: 85%;
`;

const ListCars = styled.View`
    max-height: 85%;
`

export default function Dashboard({font, navigation}) {
    return (
            <Content>
                <Head>
                    <Logo source={require("../../assets/images/Logo.png")}></Logo>
                    <Title font={font}>Veículos ativos</Title>
                </Head>
                <ListCars>
                    <Cars font={font}/>
                </ListCars>
            </Content>
    )
}