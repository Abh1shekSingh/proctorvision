import React from 'react'
import "./Header.css"
import {FaRegWindowMinimize} from "react-icons/fa"
import {BsWindow} from "react-icons/bs"
import {ImCross} from "react-icons/im"
const Header = () => {
  return (
    <div className='Header'>
        <div className='Header__Logo'>
            <h1>Proctor Vision</h1>
        </div>
        <div className='Header__search'>
            <input placeholder='Search'></input>
        </div>
        <div className='Header__icons'>
            <FaRegWindowMinimize />
            <BsWindow />
            <ImCross />
        </div>
    </div>
  )
}

export default Header