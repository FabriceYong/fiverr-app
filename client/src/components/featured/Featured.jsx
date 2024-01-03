import React from 'react'
import './featured.scss'
import { CiSearch } from 'react-icons/ci'

const Featured = () => {

    const currentUser = {
      id: 1,
      username: 'James bond',
      isSeller: true,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEQ8A5yC7RR3LH2Ah9K-YZ7Yn9HshI92XvQ&usqp=CAU',
      jobTitle: 'Commander (Royal Naval Reserve)'
    }
    
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1 className="title">Find the perfect <i>freelance</i> services for your business</h1>
          <div className="search">
            <div className="searchInput">
              <CiSearch />
              <input type="text" placeholder='Try "building a mobile app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img
            src="./img/james-bond2.png"
            alt="img"
          />
          <div className="user-info-overlay">
            <div className='left'>
              <img src={currentUser?.img} alt="profile picture" />
            </div>
            <div className="job-title">
              <p>@{currentUser?.username}</p>
              <span>{currentUser?.jobTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured