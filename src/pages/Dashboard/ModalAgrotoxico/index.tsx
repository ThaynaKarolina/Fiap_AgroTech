import React from 'react';
import * as S from './style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

interface Props {
    isOpen: any
}

const ModalAgrotoxico: React.FC<Props> = ({ isOpen }) => {

    return (
        <S.Container>
            <S.Modal>
                <S.Header>
                    <p> Agrotóxicos </p>
                </S.Header>
                <S.Body>
                    <Input label='Nível:' type='text' value='Normal' width='200'/>
                    <Input label='Aplicação programada:' type='text' value='35/120 Dias' width='200' />
                </S.Body>
                <S.Footer>
                    <Button fill={'true'} text='Salvar' onClick={() => isOpen(false)}/>
                </S.Footer>
            </S.Modal>
        </S.Container>
    )

}

export default ModalAgrotoxico;