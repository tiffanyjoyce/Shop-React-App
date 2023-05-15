import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  return (
    <div>
      <h1 className='welcome'>Welcome!</h1>
      <div className='buttons'>
      <Link to='/products' className='shop-now btn btn-secondary'><button>Shop Now</button></Link>
      </div>
    </div>
  )
}

export default Home
