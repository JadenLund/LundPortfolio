import { useState } from 'react'
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects"
import './App.css'
import NavBar from './components/NavBar'
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Nav } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
     <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects/>} />
            </Routes>
    </BrowserRouter>
</>
  )
}

export default App
