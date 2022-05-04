import React from 'react'
import onboard from "../../assets/onboard4.png"
import "./Onboard1.css"
import { Link } from 'react-router-dom'
import {IoIosArrowForward} from "react-icons/io"
const Onboard3 = () => {
  return (
    <div className='Onboard'>
        <div className='Onboard__container'>
            <div className='onboard1__image'>
                <img src={onboard} alt="" />
            </div>
            <div className='onboard__text'>
              <p>Protecting rights, respecting privacy</p>
            </div>
            <div className='onboard__action'>
              <Link to="/home"><p>Continue <i><IoIosArrowForward /></i></p></Link>
            </div>
            <div className='Dots'>
              
            </div>
        </div>
    </div>
  )
}

export default Onboard3