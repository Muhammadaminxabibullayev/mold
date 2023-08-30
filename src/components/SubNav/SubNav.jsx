import React from 'react'
import UzbFlag from "../../assets/uzbek.svg"
import RusFlag from "../../assets/russian.png"
import "./SubNav.scss"
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
const SubNav = () => {
  return (
    <div>
        <div className="sub-nav">
            <div className="languages">
                <div className='flag'>
                    <img src={UzbFlag} alt="uzb" />
                </div>
                <div className='flag'>
                    <img src={RusFlag} alt="uzb" />
                </div>
            </div>
            <div className="tel-mail">
                <div className="tel">
                    <a href="tel:+998911860085">
                        <BsTelephone/>
                        <p>+998 91 186 00 85</p>
                    </a> 
                </div>
                <div className="mail">
                    <a href="mailto:erkin.hodjaev@gmail.com">
                        <TfiEmail/>
                        <p>erkin.hodjaev@gmail.com</p>
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubNav