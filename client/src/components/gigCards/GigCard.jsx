import React from 'react'
import './gigCard.scss'
import { Link } from 'react-router-dom'
import { FaStar, FaHeart } from 'react-icons/fa'

const GigCard = ({ item }) => {
  return (
    <Link to={'/gig/123'} className='link'>
      <div className="gigCard">
        <img src={item.img} alt="gig item" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="profile picture" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <FaStar />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <FaHeart />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default GigCard
