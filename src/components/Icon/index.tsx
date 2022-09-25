import React from 'react';
import * as S from './style';

interface Props {
    isSelected?: boolean
    children: React.ReactNode
}

const Icon: React.FC<Props> = ({ isSelected, children }) => {

    return (
        <S.Container isSelected={isSelected || false}>
            { children }
        </S.Container>
    )
}

export default Icon;