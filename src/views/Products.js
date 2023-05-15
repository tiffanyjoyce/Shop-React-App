import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Product.css'

const Products = () => {
  // const local_url = 'http://127.0.0.1:5000/products';

  // const getProducts = async ()=>{
  //   let response = await axios.get(local_url)
  //   return response.status=== 200? response.data:null
  // }

  // const loadProducts = async ()=>{
  //   let data = await getProducts();
  //   console.log(data.data)
  //   setProducts(data.data)
  // }
  
  const [products, setProducts] = useState([])
  async function allproducts(){
    fetch('http://127.0.0.1:5000/products',{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then(res=>{
      return res.json()
    }).then(data => {console.log(data)
    const allprods = data.data
    setProducts(allprods)
    })
    .catch(error=> console.log("ERROR"))
  }

  useEffect(()=>{
    allproducts()
  }, [])

  useEffect(()=>{console.log(products)},[products])
  return (
    <div className='container'>
      <p className='prod-title'>Products</p>
      <div className='product-info'>
        {products && products.map((product)=>{
          return(
            <div key = {product.id}className="prod-cards card w-96 bg-base-100 shadow-xl">
  <figure><img src={product.image}alt="No image available" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product.title}</h2>
    <p className='text-xl'>${product.price}</p>
    <p>{product.description}</p>
    <p>{product.rating} <i class="fa-sharp fa-solid fa-star"></i> ({product.rating_count})</p>
    <div className="card-actions justify-end">
      <button className='btn btn-primary'>View</button>
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
          )
        })}
      </div>
    </div>
  );
}
export default Products
