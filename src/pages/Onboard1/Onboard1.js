import React from 'react'
import onboard from "../../assets/onboard1.png"
import "./Onboard1.css"
import {Link} from "react-router-dom" 
import {IoIosArrowForward} from "react-icons/io"
const Onboard1 = () => {
  return (
    <div className='Onboard'>
        <div className='Onboard__container'>
            <div className='onboard1__image'>
                <img src={onboard} alt="" />
            </div>
            <div className='onboard__text'>
              <p>We ensure that honesty pays</p>
            </div>
            <div className='onboard__action'>
              <Link to={"/onboard2"}><p>Continue <i><IoIosArrowForward /></i></p></Link>
            </div>
            <div className='Dots'>

            </div>
        </div>
    </div>
  )
}

export default Onboard1