import React from "react";
import * as S from './style';
import plantacao from '../../assets/plantacao.jpg';
import Logo from '../../components/Logo';
import Title from "../../components/Title";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate } from "react-router";

const Login = () => {

    let navigate = useNavigate();

    return (
        <S.Container>
            <S.Left>
                <S.BackgroundImage src={plantacao} />
                <S.ContentLeft>
                    <Logo size='medium' />
                </S.ContentLeft>
            </S.Left>
            <S.Right>
                    <Title text="Seja bem-vindo(a)!" />
                    <Text text='Preencha os dados a seguir para iniciar a sessão da sua conta.' />
                <S.Row>
                    <Input label='E-mail:' placeholder="Ana@gmail.com" type="e-mail" /> 
                </S.Row>
                <S.Row>
                    <Input label='Senha:' type="password" /> 
                </S.Row>
                <S.Row>
                    <S.ButtonNext>
                        <Button text="Entrar" fill={'true'} onClick={() => navigate('/Dashboard')}/>
                    </S.ButtonNext>
                </S.Row>
            </S.Right>
        </S.Container>
    )
}

export default Login;