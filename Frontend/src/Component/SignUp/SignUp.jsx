import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./SignUp.css";

const SignUp = (props) => {
  return props.trigger ? (
    <div className="Signup">
      <form className="Signup-container">
        <div className="Signup-title">
          <h2>Sign Up</h2>
          <img
            onClick={() => props.setTrigger(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="Signup-inputs">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
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