import { useState,useEffect } from "react";
import { createClient } from 'pexels';

const  useImage =  (imageID) =>{
    
  const[foto,setFoto] = useState('')
 try{
  useEffect(() =>{
    const client = createClient('7x8umGIM0Oay5TAl7HrgEr25C7bwbTc8RthufGYFeh3dmNR3t2HON4s6');
    
    
    client.photos.show({ id: imageID}).then(photo => {
    setFoto(() => photo.src.original)
    });
    },[imageID])
 }catch(e){
  console.log(e.message)
 }

 return foto
}
export default useImage;