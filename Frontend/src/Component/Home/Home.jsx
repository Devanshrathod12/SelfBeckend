import "./Home.css";
import { assets } from "../../assets/assets";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import React,{useEffect,useState} from 'react'


const Home = () => {

  
  const [signUpPopup, setSignUpPopup] = useState(false);
  const [signInPopup, setSignInPopup] = useState(false);

  const openSignUp = () => {
    setSignUpPopup(true);
    setSignInPopup(false);
  };

  const openSignIn = () => {
    setSignInPopup(true);
    setSignUpPopup(false);
  };
  return (
    <>
    <div>
     <div className="Home">
      <img className="logo" src={assets.RentTenant_logo} alt="Rent Tenant Logo" />

       <div className="btn">
           <button onClick={openSignUp} className="SignUp">Sign Up</button>
           <button onClick={openSignIn} className="SignIn">Sign In</button>
          {signUpPopup && <SignUp trigger={signUpPopup} setTrigger={setSignUpPopup} openSignIn={openSignIn}/>}
           {signInPopup && <SignIn trigger={signInPopup} setTrigger={setSignInPopup} openSignUp={openSignUp} />}
         </div>
      </div>
    </div>
    </>
  )
}

export default Home
