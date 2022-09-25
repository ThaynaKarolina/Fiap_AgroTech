import styled from "styled-components";
import colors from '../../components/Colors';

export const Container = styled.div`
    display: flex;
    gap: 10px;
    padding: 15px 0;
`;


export const Item = styled.div`
    height: 5px;
    width: 70px;
`;

export const Weak = styled(Item)`
    border-radius: 40px 0 0 40px;
    background-color: ${colors.danger};
`;

export const Medium = styled(Item)`
    border-radius: 0;
    background-color: ${colors.alert};
`;

export const Strong = styled(Item)`
    border-radius: 0 40px 40px 0;
    background-color: ${colors.success};
`;