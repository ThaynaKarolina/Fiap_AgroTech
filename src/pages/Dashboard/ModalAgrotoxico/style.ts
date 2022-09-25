import styled from "styled-components";
import colors from '../../../components/Colors';

export const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 165vh;
    top: 0;
    background-color: RGB( 0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Modal = styled.div`
    width: 500px;
    height: 250px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    overflow: hidden;
`;

export const Header = styled.div`
    background-color: ${colors.primary};
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: white;
        font-weight: lighter;
    }
`;

export const Body = styled.div`
    padding: 15px 0;
    display: flex;
    gap: 15px;
    justify-content: center;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: end;
    padding: 0 20px;
`;