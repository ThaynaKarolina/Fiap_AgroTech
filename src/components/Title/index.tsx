import React from 'react';
import * as S from './style';

interface Props {
    text: string
}

const Title: React.FC<Props> = ({ text }) => {

    return (
        <S.Heading>
            {text}
        </S.Heading>
    )
}

export default Title;