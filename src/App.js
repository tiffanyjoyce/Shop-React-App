import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './views/Products';
import Home from './views/Home'
import Navbar from './components/Navbar'
import './styles/globals.css'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/products' exact element={<Products/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
