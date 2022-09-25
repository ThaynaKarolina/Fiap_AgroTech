import styled from 'styled-components';

export const Small = styled.img `
    height: 100px;
    width: 100px;
`;

export const Medium = styled.img`
    height: 230px;
    width: 230px;
`;

export const Large = styled.img`
    height: 350px;
    width: 350px;
`;

export const Title = styled.p<{ size: 'small' | 'medium' | 'large'}>`
    font-size: ${({ size }) => size === 'small' ? '30px' : size === 'medium' ? '40px' : '45px'};
    color: white;
    margin-block: 0;
    text-align: center;
    font-weight: lighter;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;