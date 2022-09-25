import styled from 'styled-components';
import colors from '../../components/Colors';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${colors.darkPrimary};
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BackgroundImage = styled.img`
    opacity: 0.05;
    height: 100vh;
    width: 100vw;
    position: absolute;
`;

export const Content = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    z-index: 1;
    padding: 35px 0;
`;

export const Menu = styled.div`
    font-size: 20px;
    color: white;
    font-weight: lighter;
    display: flex;
    gap: 50px;
    justify-content: end;
    width: 100%;
    padding-right: 50px;
    z-index: 1;
`;
