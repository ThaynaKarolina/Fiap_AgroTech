import React from "react";
import * as S from './style';
import plantacao from '../../../assets/plantacao.jpg';
import dados from '../../../assets/dados.png';
import seguranca from '../../../assets/seguranca.png';
import conta from '../../../assets/conta.png';
import confirmacao from '../../../assets/confirmacao-selected.png';
import Logo from '../../../components/Logo';
import Icon from '../../../components/Icon';
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import PasswordSecurity from "../../../components/PasswordSecurity";
import { useNavigate } from "react-router";

const Step04 = () => {

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
                        <Icon>
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
                        <Icon isSelected>
                            <img src={confirmacao} />
                        </Icon>
                        <p> Confirmação </p>
                    </S.Step>
                </S.ContentLeft>
            </S.Left>
            <S.Right>
                <S.Step>
                    <Icon isSelected>
                            <img src={confirmacao} />
                        </Icon>
                    <Title text="Confirmação" />
                </S.Step>
                    <Text text='Seu cadastro foi realizado! Confirme a sua conta através do link enivado para o seu e-mail.' />
                    <Button text='Realizar Login' fill={'true'} onClick={() => navigate('/Login')}/>
            </S.Right>
        </S.Container>
    )
}

export default Step04;