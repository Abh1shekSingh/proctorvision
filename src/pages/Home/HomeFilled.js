import React from 'react'
import user from "../../assets/user.png"
import {IoIosArrowForward} from "react-icons/io"
import {FiBellOff} from "react-icons/fi"
import {BsBell} from "react-icons/bs"
import { Link } from 'react-router-dom'
import "./Home.css"
const Home = () => {
  return (
    <div className='Home'>
        <h1>My Classes</h1>
        
        <div className='upper'>
            <div className='upper__text'>
                <h3>Neutral Network and fuzzy controls</h3>
                <p>CSE3013</p>
            </div>
            <i>{<IoIosArrowForward />}</i>
        </div>
<br></br>
        <div className='lower'>
            
            <div className='lower__title'>
                <div className='lower__text'>
                    <h3>IOT System Architecture</h3>
                    <p>ECE1029</p>
                </div>
                <div>
                    <i>{<IoIosArrowForward />}</i>
                </div>
            </div>
            
            <div className='lower__sections'>
                    <div className='classes__exams'>
                        <h3>CAT 1</h3>
                        <div className='timings'>
                            <p>22nd December 2020</p>
                            <p>9am - 12pm</p>
                            <FiBellOff className='bellIcons' />
                        </div>
                        <button style={{opacity:"50%"}}>Completed</button>
                    </div>

                    <div className='classes__exams'>
                        <h3>CAT 1</h3>
                        <div className='timings'>
                            <p>12th Jan 2021</p>
                            <p>9am - 12pm</p>
                            <BsBell className='bellIcons' />
                        </div>
                        <Link to="/check"><button>Join Exam</button></Link>
                    </div>

                    <div className='classes__exams'>
                        <h3>CAT 1</h3>
                        <div className='timings'>
                            <p>22nd March 2021</p>
                            <p>9am - 12pm</p>
                            <BsBell className='bellIcons' />
                        </div>
                        <button style={{opacity:"50%"}}>Yet to Start</button>
                    </div>
            </div>

            
        </div>

        <div className='lowerHeader'>
            <p>Take a demo class</p>
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

export default Home