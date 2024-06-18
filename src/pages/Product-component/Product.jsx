import { useEffect, useState } from 'react'
import Button from "../../components/Button-component/Button"
import { createClient } from 'pexels';
import useImage from '../../hooks/useImage';
// import useImage from "../../hooks/useImage.js"



const Product = ({product}) => {

  const {foto} = useImage(product.image)
  console.log(foto)
  
//   const[foto,setFoto] = useState('')
//   useEffect(() =>{
// const client = createClient('7x8umGIM0Oay5TAl7HrgEr25C7bwbTc8RthufGYFeh3dmNR3t2HON4s6');


// client.photos.show({ id: product.image}).then(photo => {
// setFoto(() => photo.src.original)
// });
// },[])
    
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