import React from 'react'
import "./Footer.scss"
import { FiPhoneCall } from "react-icons/fi"
import { BiMapPin } from "react-icons/bi"
import { TfiEmail } from "react-icons/tfi";
import { BiLogoTelegram } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import FLogo from "../../assets/footer_logo.svg" 

const Footer = () => {
  return (
    <footer>
        <div className="footer_our">
            <div className="our">
                <BiMapPin className='footer_icon'/>
                <div>
                    <b>Бизнинг манзил</b>
                    <p>Наманган вилояти , Давлатобод тумани , Дустлик Шох кучаси 109-уй</p>
                </div>
            </div>
            <div className="our">
                <FiPhoneCall className='footer_icon'/>
                <div>
                    <b>Биз билан боғланинг</b>
                    <p>+998 91 186 00 85</p>
                </div>
            </div>
            <div className="our">
                <TfiEmail className='footer_icon'/>
                <div>
                    <b>Электрон манзил</b>
                    <p>erkinjon.hodjaev@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="footer_main">
            <div className="footer_logos">
                <div className='footer_img'>
                    <img src={FLogo} alt="" />
                </div>
                <p className='footer_p'>
                    Қолип тайёрлаш учун барча асбоблар, қолип бутловчи қисмлари ва аксессуарлари, қолип учун киёвий моддалар, силлиқлаш ва сайқаллаш асбоблари, абразив тошлар, CNC дастгохлари, Термопластавтоматлар ва хоказолар.
                </p>
                <b>
                    Бизни кузатиб боринг
                </b>
                <div className="socials">
                    <BiLogoTelegram className='social'/>
                    <BsFacebook className='social'/>
                    <BsYoutube className='social'/>
                </div>
            </div>
            <div className="footer_profit">
                <b>
                    Фойдали ҳаволалар
                </b>
                <div className='urls'>
                    <p>Бош сахифа</p>
                    <p>Ҳамкорлар</p>
                </div>
                <div className='urls'>
                    <p>Биз ҳақимизда</p>
                    <p>Алоқа</p>
                </div>
            </div>
            <div className="footer_offer">
                <b>
                    Таклифлар учун
                </b>
                <p>Доимий мижозларга қулайлик яратиш ва янги мижозларни жалб қилиш учун ушбу сайт яратилган бўлиб, унда сиз керакли қисмлар, бутловчи қисмлар, асбоблар, каталоглар ва махсулот маълумотларини топишингиз мумкин. Агар бирор нарсани топа олмасангиз - биз билан телефон ёки почта орқали боғланинг, биз сизга дархол ёрдам берамиз.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer