import React, { HTMLAttributes } from 'react';
import * as S from './style';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    text: string,
    fill: string
}

const Button: React.FC<Props> = ({ text, fill, ...props }) => {

    return (
        <S.Container 
            fill={fill.toString()}
            {...props}
        > 
            {text} 
        </S.Container>
    );
}

export default Button;