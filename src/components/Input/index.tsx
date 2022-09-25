import React, { HTMLAttributes } from "react";
import * as S from './style';

interface Props extends HTMLAttributes<HTMLInputElement> {
    width?: string
    label?: string
    type: string
    value?: string
}

const Input: React.FC<Props> = ({ label, width, type, value, ...props }) => {

    return (
        <div>
            {label && <S.Label> {label} </S.Label>}
            <S.StyledInput type={type} width={width || '500'} value={value && value} {...props} />
        </div>
    )
}

export default Input