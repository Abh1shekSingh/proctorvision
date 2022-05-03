import React from 'react'
import "./Check.css"
import {FaAngleLeft} from "react-icons/fa"
import userBig from "../../assets/userBigImage.png"
import check from "../../assets/check.png"
import checking from "../../assets/checking.png"
import fail from "../../assets/fail.png"
import user from "../../assets/user.png"
import { Link } from 'react-router-dom'
const Check = () => {
  return (
    <div className='Check'>
        <div className='upper__header'>
            <div className='check__type'>
                <FaAngleLeft className='icon' />
                <h2>Graduate Record Examination</h2>
            </div>
            <div className='exam__timing'>
                <h2>17th Dec 2020</h2>
                <p>9:00am - 12:00pm</p>
            </div>
            
        </div>
        <div className='userChecking '>
            
            <img src={userBig} alt="" />

            <div className='check__pass_fail'>
                <div className='list_of_checking_items'>
                    <img src={check} alt="" />
                    <li><p>Webcam Check</p></li>
                </div>
                <div className='list_of_checking_items'>
                    <img src={check} alt="" />
                    <li><p>Mic Check</p></li>
                </div>
                <div className='list_of_checking_items'>
                    <img src={fail} alt="" />
                    <li><p>Iris Sync</p></li>
                </div>
                <div className='list_of_checking_items'>
                    <img src={fail} alt="" />
                    <li><p>BT / Alien hardware detection</p></li>
                </div>
                <div className='list_of_checking_items'>
                    <img src={check} alt="" />
                    <li><p>QR / Virtual machine detection</p></li>
                </div>
                <div className='list_of_checking_items'>
                    <img src={checking} alt="" />
                    <li><p>Browser lock</p></li>
                </div>
                <div className='list_of_checking_items'>
                    <img src={checking} alt="" />
                    <li><p>Screen capture</p></li>
                </div>
                <div className='list_of_checking_items'>
                    <img src={checking} alt="" />
                    <li><p>Identity authentication</p></li>
                </div>
                <div className='start__button'>
                    <Link to="/exam"><button>Start Exam</button></Link>
                </div>

            </div>

        </div>
        <div className='lowerHeader'>
            <Link to="/setting"><div className='user'>
                <div className='userName'>
                    <p>Samuel Doe</p>
                    <p>18BIS1241</p>
                </div>
                <div className='userImage'>
                    <img src={user} alt="" />
                </div>
            </div></Link>
        </div>
    </div>
  )
}

export default Check