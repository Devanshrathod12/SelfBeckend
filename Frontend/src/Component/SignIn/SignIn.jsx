import React from 'react'
import './SignIn.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import SignUp from '../SignUp/SignUp.jsx'
import axios from "axios"
import { toast } from 'react-toastify'

const SignIn = (props) => {

    const url = "http://localhost:3000"
    
    const [data, setdata] = useState({
      email:"",
      password:""

    })

    const onChangeHendler = (event) =>  {
        const name = event.target.name;
        const value = event.target.value;

        setdata( data => ({...data ,[name]:value}))
    }

  const onSignIn = async(event) => {
     event.preventdefault();
     const newurl = `${url}/api/user/login`

     try {
       const responce = await axios.post(newurl, data)
       if (responce.data.success) {
          toast.success("login ho gya")
       } else {
         toast.error("glt hai yrr kuch")
       }
     } catch (error) {
        toast.error("glt h kuch")
     }
  }

  return (props.trigger) ? (
    <div className="login">
      <form onsubmit={onSignIn} className='login-container'>
        <div className="login-title">
          <h2>Login</h2>
          <img onClick={() => props.setTrigger(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-inputs">
          <input type="email" name="email" placeholder="Email" value={data.email} onChange={onChangeHendler} required />
          <input type="password" name="password" placeholder="Password" value={data.password} onChange={onChangeHendler} required />
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