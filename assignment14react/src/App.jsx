import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ResponsiveAppBar2 from './Components/Navbar/Navbar2';
import Product from './Screens/Product/Product';
import Home from './Screens/Home/Home';
import AllProduct from './Screens/AllProduct/AllProduct';
import About from './Screens/About/about';
import "./App.css"

function App() {
  return (
    <>
      <ResponsiveAppBar2/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all-products" element={<AllProduct />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
