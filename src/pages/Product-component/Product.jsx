import React, { useEffect, useState } from 'react'
import Button from "../../components/Button-component/Button"



product.image



const Product = ({product}) => {
 
  return (
    <div className='product'>

  <img src={foto} width={"200px"} alt={product.name} />
  <h3>{product.title}</h3>
  <p>{product.price}</p> 
  <div className='cart-buttons'>
    <select name="" id="">
      <option value="">1</option>
    </select>
    <Button text={"Adicionar ao carrinho"}/>
    </div>   
    </div>
  )
}

export default Product