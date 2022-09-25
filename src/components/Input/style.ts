import styled from "styled-components";
import colors from '../../components/Colors';

export const StyledInput = styled.input<{ width: string }>`
    padding: 5px;
    height: 40px;  
    border: 1px solid ${colors.text};
    border-radius: 4px;
    font-weight: lighter;
    width: ${({width}) => width}px;

    &:focus {
        outline: none;
        border: 1px solid ${colors.primary};
    }
`;

export const Label = styled.p`
    color: ${colors.text};
    font-size: 18px;
    margin-block: 10px;
`;