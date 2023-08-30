import React from 'react'
import Logo from "../../assets/logo.svg"
import { AiOutlineSearch } from "react-icons/ai"
import "./Nav.scss"
const Nav = () => {
  return (
    <nav>
        <div className="nav_search">
          <div className="nav_logo">
            <img src={Logo} alt="logo" />
          </div>
          <form >
            <input type="search" placeholder='Qidirish...' />
            <AiOutlineSearch className='search_icon'/>
          </form>
        </div>
        <div className="pages">
          <button>Bosh Sahifa</button>
          <button>Hamkorlar</button>
          <button>Biz Haqimizda</button>
          <button>Aloqa</button>
        </div>
    </nav>
  )
}

export default Nav