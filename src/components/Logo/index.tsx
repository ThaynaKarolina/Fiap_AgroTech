import React from 'react';
import * as S from './style';
import logotipo from '../../assets/logotipo.png'

interface Props {
    size?: 'small' | 'medium' | 'large'
}

const Logo: React.FC<Props> = ({ size }) => {

    if (size === 'medium') return (
        <S.Container>
            <S.Medium src={logotipo} />
            <S.Title size='medium'> AgroTech </S.Title>
        </S.Container>
    )

    if (size === 'large') return (
        <S.Container>
            <S.Large src={logotipo} />
              <S.Title size='large'> AgroTech </S.Title>
        </S.Container>
    )

    return (
        <S.Container>
            <S.Small src={logotipo} />
            <S.Title size='small'> AgroTech </S.Title>
        </S.Container>
    )
}

export default Logo;