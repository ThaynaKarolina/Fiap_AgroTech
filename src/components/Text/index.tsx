import React from "react";
import * as S from './style';

interface Props {
    text: string
}

const Text: React.FC<Props> = ({ text }) => {

    return (
        <S.Paragraph>
            { text }
        </S.Paragraph>
    )
}

export default Text;