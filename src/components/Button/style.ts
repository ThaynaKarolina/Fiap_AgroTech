import styled from 'styled-components';
import colors from '../Colors'

export const Container = styled.button<{ fill: string }>`
    border: none;
    background-color: ${({ fill }) => fill === 'true' ? colors.primary : 'transparent'};
    border: ${({ fill }) => fill === 'true' ? 'none' : `1px solid ${colors.primary}`};
    color: ${({ fill }) => fill === 'true' ? 'white' : colors.primary};
    font-size: 14px;
    padding: 10px 15px;
    border-radius: 50px;
    min-width: 120px;
    cursor: pointer;
`;