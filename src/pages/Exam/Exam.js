import React from 'react'
import {AiOutlineClockCircle} from "react-icons/ai"
import "./Exam.css"
import question from "../../assets/question__img.png"
import {GoPrimitiveDot} from "react-icons/go"
import {FaAngleLeft,FaAngleRight} from "react-icons/fa"
import cross from "../../assets/alertsCross.png"
import redWarn from "../../assets/waringsignred.png"
import yellowwarn from "../../assets/warningsign2.png"

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
const Exam = () => {
  return (
    <div className='Exam'>
        <div className='left__Container'>
            <div className='timer'>
                <AiOutlineClockCircle className='watchIcon' />
                <p>01:33:33</p>
            </div>
            <div className='Questions'>
                <div className='question__number'>
                    <h3>Question 1</h3>
                </div>
                <div className='question__statements'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit in id diam tortor. Volutpat ipsum accumsan ut euismod pulvinar ut placerat gravida. Dolor velit sed non in semper. Enim etiam sem nunc fermentum sollicitudin tellus. Sagittis cum nec justo leo semper ut sollicitudin. Gravida pellentesque dis.</p>
                    <img src={question} alt="" />
                </div>
                <div className='option__container'>
                    <div className='options'>
                        <GoPrimitiveDot className='doticon' />
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className='options'>
                        <GoPrimitiveDot className='doticon' />
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className='options'>
                        <GoPrimitiveDot className='doticon' />
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className='options'>
                        <GoPrimitiveDot className='doticon' />
                        <p>Lorem ipsum dolor</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='right__Container'>
            <div className='buttons'>
                <button>Exit</button>
                <button>Submit</button>
            </div>
            <div className='grid-container'>
                <div className='grid-item' style={{backgroundColor:"white", color:"black"}}>1</div>
                <div className='grid-item'>1</div>
                <div className='grid-item' style={{backgroundColor:"#A7F93F", color:"black"}}>1</div>
                <div className='grid-item' style={{backgroundColor:"#FF5555", color:"black"}}>1</div>
                <div className='grid-item' style={{backgroundColor:"#FF5555", color:"black"}}>1</div>
                <div className='grid-item'>1</div>
                <div className='grid-item'>1</div>
                <div className='grid-item'>1</div>
                <div className='grid-item'>1</div>
                <div className='grid-item'>1</div>
                <div className='grid-item'>1</div>
                <div className='grid-item'>1</div>
                <div className='grid-item'>1</div>
                <div className='grid-item'>1</div>
                <div className='grid-item'>1</div>
                <div className='grid-item'>1</div>
                <div className='grid-item'>1</div>
                <div className='grid-item'>1</div>
                <div className='grid-item'>1</div>
                <div className='grid-item'>1</div>
            </div>
            <div className='pagination'>
                <FaAngleLeft/>
                 <p>1</p>
                 <p>2</p>
                 <p>3</p>
                 <FaAngleRight/>
            </div>
            <div className='buttons'>
                <button><FaAngleLeft /> Previous</button>
                <button> Next <FaAngleRight /></button>
            </div>

        </div>

        <div className="Warnings" sx={{ width: '100%' }} spacing={2}>
            <div className="Alerts">
                <h4>Please Adjust Your Camera</h4>
            </div>
            <div className="Alerts" severity="warning">
            <div className='alert__text'>
            <img src={redWarn} alt="" />
                <div>
                <h4>Warning 1</h4>
                 Warning 1
                </div>
            </div>
               
                <img src={cross} alt="" />
            </div>
            <div className="Alerts" severity="warning">
            <div className='alert__text'>
            <img src={yellowwarn} alt="" />
                <div>
                <h4>Warning 2</h4>
                 Warning 2
                </div>
            </div>
                <img src={cross} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Exam