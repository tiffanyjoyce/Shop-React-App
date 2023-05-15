import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, setCart} = useContext(DataContext)

    const clearCart = () =>{
        setCart({size:0, total:0, products:{}})
    }
    const increaseQuantity = id => {
        let copyCart = {...cart};
        copyCart.size++
        copyCart.total += copyCart.products[id].data.price;
        copyCart.products[id].quantity++

        setCart(copyCart);
    }

    const decreaseQuantity = id => {
        let copyCart = {...cart};
        copyCart.size--;
        copyCart.total -= copyCart.products[id].data.price;
        copyCart.products[id].quantity >1 ?
        copyCart.products[id].quantity --:
        delete copyCart.products[id]

        setCart(copyCart)
    }

    const removeItem = id => {
        let copyCart = {...cart};
        copyCart.size -= copyCart.products[id].quantity;
        copyCart.total -= copyCart.products[id].quantity*copyCart.products[id].data.price
        delete copyCart.products[id];

        setCart(copyCart)
    }

  return (
    <div>
      <h1>Your cart:</h1>
      {Object.values(cart.products).map((product,index)=>{
        return <div key = {index} className="card w-96 bg-base-100 shadow-xl">
             <figure><img src={product.data.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product.data.title}</h2>
    <p>${product.data.price}</p>
    <p>{product.data.description}</p>
    <p>Quantity: {product.quantity}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={() => {increaseQuantity(product.data.id)}}>+</button>
      <button className="btn btn-primary" onClick={() => {decreaseQuantity(product.data.id)}}>-</button>
      <button className="btn btn-primary" onClick={() => {removeItem(product.data.id)}}>Remove</button>
    </div>
  </div>
        </div>
      })}
      <p className='mt-4'>Subtotal: ${cart.total}</p>
        <Link  to="/" className="btn btn-primary mt-4 mr-3 mb-4">Checkout</Link>
        <button className="btn btn-primary"onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart
