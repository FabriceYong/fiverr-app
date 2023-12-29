import React from 'react'
import './guideCard.scss'
import { Link } from 'react-router-dom'

const GuideCard = ({ item }) => {
  return (
    <Link to={'/'} className='link'>
     <div className='guideCard'>
      <img src={item.img} alt="Guide image" />
      <h2>{item.desc}</h2>
    </div>
    </Link>
  )
}

export default GuideCard