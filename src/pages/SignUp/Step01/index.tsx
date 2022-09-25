import React from "react";
import * as S from './style';
import plantacao from '../../../assets/plantacao.jpg';
import dados from '../../../assets/dados-selected.png';
import seguranca from '../../../assets/seguranca.png';
import conta from '../../../assets/conta.png';
import confirmacao from '../../../assets/confirmacao.png';
import Logo from '../../../components/Logo';
import Icon from '../../../components/Icon';
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import { useNavigate } from "react-router";

const Step01 = () => {

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
                        <Icon isSelected>
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
                        <Icon>
                            <img src={confirmacao} />
                        </Icon>
                        <p> Confirmação </p>
                    </S.Step>
                </S.ContentLeft>
            </S.Left>
            <S.Right>
                    <Title text="Seja bem-vindo(a)!" />
                    <Text text='Preencha os dados a seguir para iniciar a criação da sua conta.' />
                <S.Row>
                    <Input label='Nome:' placeholder="Ana Rosa" type="text" /> 
                </S.Row>
                <S.Row>
                    <Input label='E-mail:' placeholder="Ana@gmail.com" type="e-mail" /> 
                </S.Row>
                <S.Row>
                    <S.ButtonNext>
                        <Button text="Próximo" fill='true' onClick={() => navigate('/Step02')}/>
                    </S.ButtonNext>
                </S.Row>
            </S.Right>
        </S.Container>
    )
}

export default Step01;