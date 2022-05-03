import React from 'react'
import "./Setting.css"
import user from "../../assets/user.png"
import {FaAngleLeft ,FaAngleDown} from "react-icons/fa"
import {AiOutlineEdit} from "react-icons/ai"
import {BsToggleOff,BsToggleOn} from "react-icons/bs"
const Setting = () => {
  return (
    <div className='Settings'>
        <div className='upper__header'>
            <div className='user'>
                <FaAngleLeft className='icons' />
                <img src={user} alt="" />
                <h1>Samuel Joe</h1>
                <p>18BIS1241</p>
            </div>
            <div className='edit__pic'>
                <AiOutlineEdit  />
                <p>Edit Profile Picture</p>
            </div>
        </div>

        <div className='genral__settings'>
            <h1>General Settings</h1>
            <div className='Setting__container'>
                <div className='setting'>
                    <h2>Setting 1</h2>
                    <FaAngleDown className='icons' />
                </div>
                <hr></hr>
                <div className='setting'>
                    <h2>Setting 2</h2>
                    <BsToggleOff className='icons' />
                </div>
                <hr></hr>
                <div className='setting'>
                    <h2>Setting 3</h2>
                    <BsToggleOn className='icons' />
                </div>
            </div>

        </div>

        <div className='last genral__settings'>
            <h1>General Settings</h1>
            <div className='Setting__container'>
                <div className='setting'>
                    <h2>Setting 1</h2>
                    <p>View More</p>
                </div>
                <hr></hr>
                <div className='setting'>
                    <h2>Setting 2</h2>
                    <BsToggleOn className='icons' />
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Setting