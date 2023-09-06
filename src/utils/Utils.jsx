import React from 'react';
import "./Utils.scss";
import { FiShoppingCart } from "react-icons/fi";

const DefaultButton = ({text}) => {
  return (
    <button className='default-btn'>
      <FiShoppingCart/>{text}
    </button>
  )
}

const Container = ({children}) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export { DefaultButton, Container }