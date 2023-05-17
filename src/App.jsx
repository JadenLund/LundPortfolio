import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects"
import './App.css'
import NavBar from './components/NavBar'
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./components/Example";


function App() {
  return (
    <>
    <NavBar />
     <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects/>} />
            </Routes>
    </BrowserRouter>
</>
  )
}

export default App
