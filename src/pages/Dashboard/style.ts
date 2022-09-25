import styled from "styled-components";
import colors from '../../components/Colors';

export const Container = styled.div`
    background-color: ${colors.lightPrimary};
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.div`
    background-color: ${colors.primary};
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100vw;

    img {
        height: 80px;
        width: 80px;
    }

    p {
        font-size: 18px;
        font-weight: lighter;
        color: white;
    }
`;

export const Graphics = styled.div`
    background-color: white;
    height: 280px;
    width: 80vw;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    margin: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 30px;

    img {
        height: 250px;
        width: 270px;
    }
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 26vw 26vw 26vw;
    column-gap: 20px;
    row-gap: 20px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
`;

export const Card = styled.div`
    height: 200px;
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    justify-content: start;
    align-items: center;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        b > p {
            margin-block: 0;
        }

        p {
            margin-block: 0;
        }
    }
`;

export const Icon = styled.img`
    height: 140px;
    width: 140px;
`;

export const Add = styled(Card)`
    background-color: ${colors.primary};
    justify-content: center;
`;

