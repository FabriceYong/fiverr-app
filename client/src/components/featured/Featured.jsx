import React from 'react'
import './featured.scss'
import { CiSearch } from 'react-icons/ci'

const Featured = () => {
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
        </div>
      </div>
    </div>
  )
}

export default Featured