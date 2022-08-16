import React from 'react'
import style from "./Header.module.css";
const Header = () => {
  return (
    <nav>
        <h1 className={style.temph1}></h1>
        <h1>Create New Account</h1>
        <h2>Conatct us</h2>
    </nav>
  )
}

export default Header