import React, { useState } from "react";
import * as S from './style';
import logotipo from '../../assets/logotipo.png';
import graphic from '../../assets/graphic.png';
import colheita from '../../assets/colheita.png';
import clima from '../../assets/clima.png';
import solo from '../../assets/solo.png';
import irrigacao from '../../assets/irrigacao.png';
import umidade from '../../assets/umidade.png';
import plantacao from '../../assets/tipoplantacao.png';
import agrotoxico from '../../assets/agrotoxico.png';
import fertilizantes from '../../assets/fertilizantes.png';
import add from '../../assets/add.png';

import Text from '../../components/Text';
import ModalAgrotoxico from "./ModalAgrotoxico";

const Dashboard = () => {

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    return (
        <S.Container>
            { modalIsOpen && <ModalAgrotoxico isOpen={setModalIsOpen} />}
            <S.Header>
                <img src={logotipo} />
                <p> AgroTech </p>
            </S.Header>
            <S.Graphics>
                <img src={graphic} />
            </S.Graphics>
            <S.Cards>
                <S.Card> 
                    <S.Icon src={colheita} />
                    <div>
                        <b> <Text text='Colheita' /> </b> 
                        <Text text='Colheita automatizada: 35/120 dias'/>
                    </div>
                </S.Card>
                <S.Card> 
                    <S.Icon src={clima} />
                    <div>
                        <b> <Text text='Clima' /> </b> 
                        <Text text='Tempeatura: 29ºC - 22ºC'/>
                        <Text text='Umidade: 60%'/>
                        <Text text='Índice UV: Baixo'/>
                        <Text text='Ar: 68% '/>
                    </div>
                </S.Card>
                <S.Card> 
                    <S.Icon src={solo} />
                    <div>
                        <b> <Text text='Qualidade do solo' /> </b> 
                        <Text text='Status do solo: Normal'/>
                    </div>
                </S.Card>
                <S.Card> 
                    <S.Icon src={irrigacao} />
                    <div>
                        <b> <Text text='Irrigação' /> </b> 
                        <Text text='Irrigação automática: 6mm/dia'/>
                    </div>
                </S.Card>
                <S.Card> 
                    <S.Icon src={umidade} />
                    <div>
                        <b> <Text text='Umidade do solo' /> </b> 
                        <Text text='Umidade do solo: 89%'/>
                    </div>
                </S.Card>
                <S.Card> 
                    <S.Icon src={plantacao} />
                    <div>
                        <b> <Text text='Tipo da Plantação' /> </b> 
                        <Text text='Tipo: Soja'/>
                    </div>
                </S.Card>
                <S.Card onClick={() => setModalIsOpen(true)}> 
                    <S.Icon src={agrotoxico} />
                    <div>
                        <b> <Text text='Agrotóxicos' /> </b> 
                        <Text text='Nível: Normal'/>
                        <Text text='Aplicação programada: 35/120 dias'/>
                    </div>
                </S.Card>
                <S.Card> 
                    <S.Icon src={fertilizantes} />
                    <div>
                        <b> <Text text='Fertilizantes' /> </b> 
                        <Text text='Fertilização automática: 35/60 dias'/>
                    </div>
                </S.Card>
                <S.Add> 
                    <S.Icon src={add} />
                </S.Add>
            </S.Cards>
        </S.Container>
    )
}

export default Dashboard;