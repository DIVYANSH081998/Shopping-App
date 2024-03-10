import React from 'react'
import list from './Data'
import Card from './Card'
import "../styles/Product.css"
import { useState } from 'react'
const Product = () => {
    const[cart,setCart]=useState([]);
    const handleClick=(item)=>{
        setCart([...cart,item]);

    }
  return (
    <section>
        {
            list.map((item)=><Card key={item.id} item={item} handleClick={handleClick}/>)
        }
    </section>
  )
}

export default Product