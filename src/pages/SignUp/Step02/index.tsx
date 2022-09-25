import React from "react";
import * as S from './style';
import plantacao from '../../../assets/plantacao.jpg';
import dados from '../../../assets/dados.png';
import seguranca from '../../../assets/seguranca-selected.png';
import conta from '../../../assets/conta.png';
import confirmacao from '../../../assets/confirmacao.png';
import Logo from '../../../components/Logo';
import Icon from '../../../components/Icon';
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import PasswordSecurity from "../../../components/PasswordSecurity";
import { useNavigate } from "react-router";

const Step02 = () => {

    let navigate = useNavigate();

    return (
        <S.Container>
            <S.Left>
                <S.BackgroundImage src={plantacao} />

                <S.ContentLeft>
                    <S.ContentLogo>
                        <Logo />
                    </S.ContentLogo>
                    <S.Step>
                        <Icon>
                            <img src={dados} />
                        </Icon>
                        <p> Dados iniciais </p>
                    </S.Step>
                    <S.Step>
                        <Icon isSelected>
                            <img src={seguranca} />
                        </Icon>
                        <p> Segurança </p>
                    </S.Step>
                    <S.Step>
                        <Icon>
                            <img src={conta} />
                        </Icon>
                        <p> Dados cadastrais </p>
                    </S.Step>
                    <S.Step>
                        <Icon>
                            <img src={confirmacao} />
                        </Icon>
                        <p> Confirmação </p>
                    </S.Step>
                </S.ContentLeft>
            </S.Left>
            <S.Right>
                <S.Step>
                    <Icon isSelected>
                            <img src={seguranca} />
                        </Icon>
                    <Title text="Segurança" />
                </S.Step>
                    <Text text='Crie a sua senha para acesso.' />
                <S.Row>
                    <div>
                        <Input label='Senha:' type="password" /> 
                        <PasswordSecurity />
                    </div>
                    <div>
                        <b> <Text text='Como criar uma senha segura:' /> </b>
                        <Text text='Use caracteres especiais e letras maiúsculas.' />
                        <Text text='Evite sequências numéricas e a sua data de nascimento.' />
                        <Text text='Use números.' />
                    </div>
                </S.Row>
                <S.Row>
                    <S.ButtonNext>
                        <Button text='Anterior' fill={'false'} onClick={() => navigate(-1)} />
                        <Button text="Próximo" fill={'true'}  onClick={() => navigate('/Step03')} />
                    </S.ButtonNext>
                </S.Row>
            </S.Right>
        </S.Container>
    )
}

export default Step02;