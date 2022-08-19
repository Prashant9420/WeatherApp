import React from 'react'
import style from "./Header.module.css";
const Header = () => {
  return (
    <nav>
        <div className={style.contain}>
        <h1>Create New Account</h1>
        <h2>Conatct us</h2>
        </div>
    </nav>
  )
}

export default Header