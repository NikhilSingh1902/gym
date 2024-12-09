import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkOut from "./components/WorkOut";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
// import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <Hero/>
      <WorkOut/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      {/* <BMICalculator/> */}
      <Footer/>
      <ToastContainer theme='dark' position='top-center'/>
    </Router>
  )
}

export default App
