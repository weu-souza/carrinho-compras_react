import {useState,useEffect} from 'react'
import productsData from "../../data/products_mock.json"
import Product from '../Product-component/Product'
const Catalog = ({onAddToCart}) => {
  const [products,setProducts] =useState([])
useEffect(() =>{

  setProducts(productsData)
},[])


  return (
    <div>
        <h1 style={{paddingBottom:"20px"}}>Catalogo de Produtos</h1>
        <div className='products-container'>
            {products.map((product)=> (
                <Product key={product.id} product={product} onAddToCart={onAddToCart}/>
            ))}
        </div>
    </div>
  )
}

export default Catalog