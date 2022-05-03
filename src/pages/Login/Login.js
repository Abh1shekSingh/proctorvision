import React from 'react'
import "./Login.css"
import logo from "../../assets/Vector.png"
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='Login'>
        <div className='Login__container'>
            <div className='Login__logo'>
                <img src={logo} alt=""/>
            </div>
            <div className='Login__inputFields'>
              <TextField 
                  InputLabelProps={{style: {color:"white",opacity:"50%",fontFamily:"Poppins",fontSize:"14px",fontWeight:"400"}}}
                  inputProps={{ style: { color: "white" } }}
                  sx={{ borderColor: 'white' }}
                  id="standard-basic"
                  label="Username"
              />
              <TextField 
                  InputLabelProps={{style: {color:"white",opacity:"50%", fontFamily:"Poppins",fontSize:"14px",fontWeight:"400"}}}
                  inputProps={{ style: { color: "white" } }} 
                  id="standard-basic" 
                  label="Password" 
              />
            </div>
            <div className='Login__forgot'>
              <p>Reset Password From Default/ <br></br>
                  Forgot Password</p>
            </div>
            <div className='Login__Button'>
                <Link to="/onboard1"><button>Log In</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Login