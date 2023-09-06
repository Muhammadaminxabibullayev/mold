import React from 'react'
import './Nav.scss'
import emailContact from '../../img/email.svg'
import phoneContact from '../../img/phone_contact.svg'
import ruLang from '../../img/ru.png'
import uzLang from '../../img/uzb.svg'
import { Container } from '../../utils/Utils'

const Nav = () => {
    return (
        <div>
            <nav>
                <Container>
                    <div className="flex">
                        <div className="lang">
                            <img src={uzLang} alt="" className='lang_uz_img' />
                            <img src={ruLang} alt="" className='lang_ru_img' />
                        </div>
                        <a href="tel: +998911860085" className="phone contact-method">
                            <img src={phoneContact} alt="" />+998 91 186 00 85</a>
                        <a href="mailto: erkinjon.hodjaev@gmail.com" className="email contact-method">
                            <img src={emailContact} alt="" /> erkinjon.hodjaev@gmail.com</a>
                    </div>
                </Container>
            </nav>
        </div>
    )
}

export default Nav
