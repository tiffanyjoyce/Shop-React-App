import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './views/Products';
import Home from './views/Home'
import Navbar from './components/Navbar'
import './styles/globals.css'
import Product from "./views/Product"
import Cart from './views/Cart';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/products' exact element={<Products/>}/>
          <Route path='/products/:ProductId' exact element={<Product/>}/>
          <Route path="/cart" exact element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
