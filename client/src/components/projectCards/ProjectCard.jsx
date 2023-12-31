import React from 'react'
import './projectCard.scss'
import { Link } from 'react-router-dom'

const ProjectCard = ({ item }) => {
  return (
    <Link to={'/'} className="link">
      <div className='project'>
        <div className="projectCards">
          <img src={item.img} alt="project image" />
          <div className="info">
            <img src={item.pp} alt="profile picture" />
            <div className="texts">
              <h2>{item.cat}</h2>
              <span>{item.username}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
