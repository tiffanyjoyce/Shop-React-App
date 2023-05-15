import React, {useContext, useEffect, useState} from 'react'
import "./Product.css"
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/DataProvider';

const Product = () => {
    let {ProductId}= useParams();
    const [product, setProduct]= useState([])
    const {cart, setCart} = useContext(DataContext)

    async function productDetails(){
        fetch("http://127.0.0.1:5000/product",{
        method: "POST",
        headers:{
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": '*',
        },
        body:JSON.stringify({
            ProductId:ProductId
        })
        }).then(res=>{
            return res.json()
        }).then(data=>{console.log(data)
        setProduct(data)
        })
        .catch(error=> console.log("ERROR"))
    }
    useEffect(()=>{
        productDetails()
    }, [])

    const addProduct=(product)=>{
      let copyCart= {...cart}
  
      copyCart.size++;
      copyCart.total+=product.price;
  
      // if(copyCart.products[product.id]){
      //   copyCart.products[product.id].quantity++
      // }else{
      //   copyCart.products[product.id]={data:product, quantity:1}
      // }
      copyCart.products[product.id] ? copyCart.products[product.id].quantity++ :
      copyCart.products[product.id]={data:product, quantity:1}
  
      console.log(copyCart)
  
      setCart(copyCart)
    }

  return (
    <div>
      <div className="prod-card card w-96 bg-base-100 shadow-xl">
  <figure><img src={product.image} alt="no image available" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product.title}</h2>
    <p className='text-xl'>${product.price}</p>
    <p>{product.description}</p>
    <p>{product.rating} <i class="fa-sharp fa-solid fa-star"></i> ({product.rating_count})</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=> addProduct(product)}>Add to cart</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Product
