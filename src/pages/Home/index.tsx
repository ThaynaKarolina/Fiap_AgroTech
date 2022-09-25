import React from "react";
import * as S from './style';
import agricultura from '../../assets/agricultura.jpg';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import { useNavigate } from "react-router-dom";

const Home = () => {

    let navigate = useNavigate();

    return (
        <S.Container>

            <S.BackgroundImage
                src={agricultura} 
            />

            <S.Menu>
                <p> Home </p>
                <p> | </p>
                <p> Sobre </p>
                <p> | </p>
                <p> Contato </p>
            </S.Menu>

            <S.Content>
                <Logo 
                    size="large"
                />
                <S.Actions>
                    <Button 
                        text='Cadastrar'
                        onClick={() => navigate('/Step01')}
                        fill={'false'}
                    />
                    <Button 
                        text='Login' 
                        fill={'true'}
                        onClick={() => navigate('/Login')}
                    />
                </S.Actions>
            </S.Content>
           
        </S.Container>
    )
}

export default Home;