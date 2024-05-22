import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
const Card = ({item}) => {


  return (
    <div className="mycard">
        <img width={"300px"} src={item.image} alt="" />
        <h3>{item.title}</h3>
        <span>{item.price}</span>
        <p>{item.description}</p>
        <Link to={`/detail/${item._id}`}>Go to Detail</Link>
    </div>
  )
}

export default Card