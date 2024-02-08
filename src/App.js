import React from 'react';
import './App.css';
import Navigation from './Navigators/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Features from './Pages/Features'
import Products from './Pages/Prodects'
import Accessories from './Pages/Accessories'
import Service from './Pages/Service'
import Aboutus from './Pages/Aboutus'
import Login from './Pages/Login'
import Signup from './Components/Signup';


function App() {
  return (
    <div>
      <BrowserRouter >
      <Navigation />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/products" element={<Products />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/service" element={<Service />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />}/>
      </Routes>
      </BrowserRouter>
        
        

    </div>
  );
}

export default App;
