import React from 'react'
import { Container } from '../../utils/Utils'
import './Offer.scss'

const Offer = () => {
    return (
        <div className='offer-sectiong_wrapper'>
            <Container>
                <h4 className='offer-title'>Биз мижозларга қуйидагиларни таклиф қиламиз</h4>
                <div className="offer-sectiong_flex">
                    <div className="item">
                        <b>Бўлиб-бўлиб сотиб олиш</b>
                        <p>MOLD-COMPONENTS да ишлаб чиқариш учун қулай онлайн буюртмалар режаси</p>
                    </div>
                    <div className="item">
                        <b>Йетказиб бериш бепул</b>
                        <p>Сифатли маҳсулотлар ва хизматлар</p>
                    </div>
                    <div className="item">
                        <b>Бонус тизими</b>
                        <p>Бонус тизими</p>
                    </div>
                    <div className="item">
                        <b>Ёрдам!</b>
                        <p>TSS</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Offer
