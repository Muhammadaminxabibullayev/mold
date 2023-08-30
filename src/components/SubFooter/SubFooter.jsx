import React from 'react'
import "./SubFooter.scss"

const SubFooter = () => {
  return (
    <div className='SubFooter'>
        <h2 className='offer_title'>Биз мижозларга қуйидагиларни таклиф қиламиз</h2>
        <ul className="offer">
            <li>
                <h4>Бўлиб-бўлиб сотиб олиш</h4>
                <span>MOLD-COMPONENTS да ишлаб чиқариш учун қулай онлайн буюртмалар режаси</span>
            </li>
            <li>
                <h4>Йетказиб бериш бепул</h4>
                <span>Сифатли маҳсулотлар ва хизматлар</span>
            </li>
            <li>
                <h4>Бонус тизими</h4>
                <span>Бонус тизими</span>
            </li>
            <li>
                <h4>Ёрдам!</h4>
                <span>TSS</span>
            </li>
        </ul>
    </div>
  )
}

export default SubFooter