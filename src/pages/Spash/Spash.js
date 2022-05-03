import React from 'react'
import "./Spash.css"
import logo from "../../assets/Vector.png"
import {IoIosArrowForward} from "react-icons/io"
import { Link } from 'react-router-dom';
const Spash = () => {
  return (
    <div className='Spash'>
        <div className='Spash__main'>
            <div className='Spash__logo'>
                <img src={logo} alt=""/>
                <h1>Proctor<br></br> Vison</h1>
            </div>
            <div className='Spash__text'>
                <h1>Welcome aboard<br></br>
                    to the future in the making<br></br>
                    you’ve just become a part of it
                </h1>
            </div>
            <div className='Spash__button'>
                <Link to="/login" >
                    <button>Continue <i className='icon'><IoIosArrowForward /></i></button>
                </Link>
            </div>
           
        </div>
    </div>
  )
}

export default Spash