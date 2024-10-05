import React, { useState ,useEffect } from "react";
import { assets } from "../../assets/assets";
import "./SignUp.css";
import axios from 'axios'
import { toast } from "react-toastify";

const SignUp = (props) => {

  const url = 'http://localhost:3000'

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData(data => ({...data, [name]:value}));
  }

  const onSignUp = async (event) => {
    event.preventDefault();
    let newUrl = `${url}/api/user/register`;

    try {
      const response = await axios.post(newUrl, data)
      if (response.data.success) {
        toast.success('User Register Successfully')
      }
      else{
        toast.error(response.data.message)
      }
    }
    catch (error) {
      toast.error("Something went worng. Please try again!")  
    }
  }

  // useEffect(() => {
  //   console.log(data);
  // }, [data])

  return props.trigger ? (
    <div className="Signup">
      <form onSubmit={onSignUp} className="Signup-container">
        <div className="Signup-title">
          <h2>Sign Up</h2>
          <img
            onClick={() => props.setTrigger(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="Signup-inputs">
          <input type="text" name="name" placeholder="Full Name" value={data.name} onChange={onchangeHandler} required />
          <input type="email" name="email" placeholder="Email" value={data.email} onChange={onchangeHandler} required />
          <input type="password" name="password" placeholder="Password" value={data.password} onChange={onchangeHandler} required />
        </div>
        <button type="Submit">Create Account</button>
        <div className="Signup-conditon">
          <input type="checkbox" required />
          <p>By Continuing, I Agree to the terms of use & privacy policy.</p>
        </div>
        <p>
          Already have an account? <span onClick={() => props.openSignIn()}>Login here</span>
        </p>
      </form>
      {props.children}
    </div>
  ) : (
    ""
  );
};

export default SignUp;