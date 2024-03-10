import React from 'react'
const Card = ({item}) => {
    const{id,title,author,price,img}=item;
  return (

    <div className="cards">
        <div className="image_box">
            <img src={img} alt="" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>{price}</p>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card