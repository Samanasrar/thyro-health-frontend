import React from 'react'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    </Router>
  )
}

export default App
