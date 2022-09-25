import React from "react";
import * as S from './style';
import plantacao from '../../../assets/plantacao.jpg';
import dados from '../../../assets/dados.png';
import seguranca from '../../../assets/seguranca.png';
import conta from '../../../assets/conta-selected.png';
import confirmacao from '../../../assets/confirmacao.png';
import Logo from '../../../components/Logo';
import Icon from '../../../components/Icon';
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import PasswordSecurity from "../../../components/PasswordSecurity";
import { useNavigate } from "react-router";

const Step03 = () => {

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
                        <Icon isSelected>
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
                            <img src={conta} />
                        </Icon>
                    <Title text="Dados cadastrais" />
                </S.Step>
                    <Text text='Preencha os campos a seguir com seus dados.' />
                <S.Row>
                   <div>
                        <Input type='text' label='Nome' placeholder="Ana" width="250"/>
                   </div>
                   <div>
                    <Input type='text' label='CPF' placeholder="123.456.789-10" width="250" />
                   </div>
                </S.Row>
                <S.Row>
                   <div>
                        <Input type='date' label='Data de Nascimento' width="250"/>
                   </div>
                   <div>
                        <Input type='text' label='Genêro' placeholder="Feminino" width="250" />
                   </div>
                </S.Row>
                <S.Row>
                    <div>
                        <Input type='text' label='CEP' width="150"/>
                   </div>
                   <div>
                        <Input type='text' label='Cidade' width="230" />
                   </div>
                   <div>
                        <Input type='text' label='Estado' width="100" />
                   </div>
                </S.Row>
                <S.Row>
                    <S.ButtonNext>
                        <Button text='Anterior' fill={'false'} onClick={() => navigate(-1)}/>
                        <Button text="Próximo" fill={'true'} onClick={() => navigate('/Step04')}/>
                    </S.ButtonNext>
                </S.Row>
            </S.Right>
        </S.Container>
    )
}

export default Step03;