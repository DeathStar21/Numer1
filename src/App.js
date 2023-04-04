import React from 'react'
import Home from './Home'

import Graphical from './ROE/Graphical'
import Bisection from './ROE/Bisection'
import FalsePosition from './ROE/FalsePosition'
import OnePoint from './ROE/OnePoint'
import NewtonRape from './ROE/NewtonRaphon'
import Secant from './ROE/Secant'

import Cramer from './LA/Cramer'

import ComSim from './Integ/ComSim'
import ComTrap from './Integ/ComTrap'

import Navbar2 from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




export default function App() {
  return (
    <Router>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Graphical" element={<Graphical />}/>
        <Route path="/Bisection" element={<Bisection />}/>
        <Route path="/FalsePosition" element={<FalsePosition />}/>
        <Route path="/OnePoint" element={<OnePoint />}/>
        <Route path="/NewtonRape" element={<NewtonRape />}/>
        <Route path="/Secant" element={<Secant />}/>
        <Route path="/Cramer" element={<Cramer />}/>
        <Route path="/ComSim" element={<ComSim />}/>
        <Route path="/ComTrap" element={<ComTrap />}/>
      </Routes>
    </Router>

  )
}
