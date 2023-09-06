import React from 'react'
import "./Footer.scss"
import logo from '../../img/logo-blue.svg'
import { Container } from '../../utils/Utils'
const Footer = () => {
    
    return (
        <div className='footer-wrapper'>
            <Container>
                <div className="footer-contact">
                    <div className="location contact">
                        <div className="icon">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12 17 1-2V9.858c1.721-.447 3-2 3-3.858 0-2.206-1.794-4-4-4S8 3.794 8 6c0 1.858 1.279 3.411 3 3.858V15l1 2zM10 6c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2z"></path><path d="m16.267 10.563-.533 1.928C18.325 13.207 20 14.584 20 16c0 1.892-3.285 4-8 4s-8-2.108-8-4c0-1.416 1.675-2.793 4.267-3.51l-.533-1.928C4.197 11.54 2 13.623 2 16c0 3.364 4.393 6 10 6s10-2.636 10-6c0-2.377-2.197-4.46-5.733-5.437z"></path>
                            </svg>
                        </div>
                        <div className="text">
                            <strong>Бизнинг манзил</strong>
                            <p>Наманган вилояти , Давлатобод тумани , Дустлик Шох кучаси 109-уй</p>
                        </div>
                    </div>
                    <div className="phone contact">
                        <div className="icon">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path><path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path></svg>
                        </div>
                        <div className="text">
                            <strong>Биз билан боғланинг</strong>
                            <p>+998 91 186 00 85</p>
                        </div>
                    </div>
                    <div className="email contact">
                        <div className="icon">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path><path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path></svg>
                        </div>
                        <div className="text">
                            <strong>Электрон манзил</strong>
                            <p>erkinjon.hodjaev@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer-info">
                    <div className='first'>
                        <img src={logo} alt="" />
                        <p>Қолип тайёрлаш учун барча асбоблар, қолип бутловчи қисмлари ва аксессуарлари, қолип учун киёвий моддалар, силлиқлаш ва сайқаллаш асбоблари, абразив тошлар, CNC дастгохлари, Термопластавтоматлар ва хоказолар.</p>
                        <div className="social">
                            <b>Бизни кузатиб боринг</b>
                            <div className="socila-media_icons">
                                <div className="icon">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
                                </div>
                                <div className="icon">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                                </div>
                                <div className="icon">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='second'>
                        <b>Фойдали ҳаволалар</b>
                        <div className="grid">
                            <p>Бош сахифа</p>
                            <p>Ҳамкорлар</p>
                            <p>Биз ҳақимизда</p>
                            <p>Алоқа</p>
                        </div>
                    </div>
                    <div className='third'>
                        <b>Таклифлар учун</b>
                        <p>
                            Доимий мижозларга қулайлик яратиш ва янги мижозларни жалб қилиш учун ушбу сайт яратилган бўлиб, унда сиз керакли қисмлар, бутловчи қисмлар, асбоблар, каталоглар ва махсулот маълумотларини топишингиз мумкин. Агар бирор нарсани топа олмасангиз - биз билан телефон ёки почта орқали боғланинг, биз сизга дархол ёрдам берамиз.
                        </p>
                    </div>
                </div>
                <div className="footer-contact"></div>
            </Container>
        </div>
    )
}

export default Footer;
