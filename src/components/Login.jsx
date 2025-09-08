import styled from 'styled-components/native';

const Title = styled.Text`
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
  font-family: ${(props) => props.font};
`;

const Form = styled.View`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

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

const ButtonForm = styled.Pressable`
  border-radius: 20px;
  display: flex;
  padding: 8px 51px;
  align-self: center;
  background-color: #7594AD;
`;

const ButtonFormText = styled.Text`
  font-size: 20px;
  font-family: ${(props) => props.font};
`;

export function Login({ font }) {
    return (
        <>
            <Title font={font}>Login</Title>
            <Form>
                <LabelContent>
                    <Label font={font}>Email:</Label>
                    <Input font={font} placeholder="Digite seu email" />
                </LabelContent>

                <LabelContent>
                    <Label font={font}>Senha:</Label>
                    <Input font={font} placeholder="Digite sua senha" secureTextEntry />
                </LabelContent>

                <ButtonForm>
                    <ButtonFormText font={font}>Entrar</ButtonFormText>
                </ButtonForm>
            </Form>
        </>
    );
}
