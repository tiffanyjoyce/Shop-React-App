import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Products.css'
import { DataContext } from '../context/DataProvider';

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
  const {cart, setCart} = useContext(DataContext)

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
      <Link to={`/products/${product.id}`}><button className='btn btn-primary'>View</button></Link>
      <button className="btn btn-primary" onClick={()=>addProduct(product)}>Add to cart</button>
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
