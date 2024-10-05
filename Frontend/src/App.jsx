import { useState } from 'react'
import Home from '../src/Component/Home/Home'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>
    <ToastContainer />
    <Home />
    </>
  )
}

export default App
