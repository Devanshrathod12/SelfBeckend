import React from 'react'
import './SignIn.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import SignUp from '../SignUp/SignUp.jsx'

const SignIn = (props) => {

  
    
  return (props.trigger) ? (
    <div className="login">
      <form className='login-container'>
        <div className="login-title">
          <h2>Login</h2>
          <img onClick={() => props.setTrigger(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-inputs">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button type="Submit">Login</button>
        <div className="login-conditon">
            <input type="checkbox" required/>
            <p>By Continuing, I Agree to the terms of use & privacy policy.</p>
        </div>
        <p>Create a new account? <span onClick={() => props.openSignUp()}>Click here</span></p>
      </form>
      {props.children}
    </div>
  ) : "";
}

export default SignIn