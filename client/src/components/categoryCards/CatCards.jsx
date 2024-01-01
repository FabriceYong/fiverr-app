import React from 'react'
import './catCards.scss'
import { Link } from 'react-router-dom'

const CatCards = ({ item }) => {
  
  return (
    <Link to={'/gigs?cat=design'}>
     <div className='catCards'>
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className='title'>{item.title}</span>
    </div>
    </Link>
  )
}

export default CatCards