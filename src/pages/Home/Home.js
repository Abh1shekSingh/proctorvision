import React from 'react'
import NoClasses from "../../assets/noClasses.png"
import user from "../../assets/user.png"
import { Link } from 'react-router-dom'
import "./Home.css"
const Home = () => {
  return (
    <div className='Home'>
        <h1>My Classes</h1>
        <img className='main_image' src={NoClasses} alt="" /> 
        <h2>You’re are yet to be added to a class,<br></br>
        till then you can relax</h2>
        <div className='lowerHeader'>
            <p>Take a demo class</p>
            <Link to ="/setting"><div className='user'>
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