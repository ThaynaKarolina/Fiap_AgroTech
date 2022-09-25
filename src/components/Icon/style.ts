import styled from "styled-components";
import colors from '../Colors';

export const Container = styled.div<{ isSelected: boolean }>`
    height: 50px;
    width: 50px;
    border-radius: 100px;
    background-color: ${({ isSelected }) => isSelected ? colors.primary : colors.background };
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 35px;
        width: 35px;
    }

`;