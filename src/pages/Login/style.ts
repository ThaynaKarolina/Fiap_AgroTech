import styled from "styled-components";
import colors from '../../components/Colors';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    height: 100vh;
    overflow: hidden;
`;

export const Left = styled.div`
    background-color: ${colors.darkPrimary};
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const BackgroundImage = styled.img`
    opacity: 0.1;
    height: 100vh;
    position: absolute;
`;

export const ContentLeft = styled.div`
    z-index: 1;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 100%;
    padding: 50px;
`;

export const Row = styled.div`
    padding: 10px;
`;

export const ButtonNext = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;