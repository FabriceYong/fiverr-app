import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', isActive)

    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, [])

  const currentUser = {
    id: 1,
    username: 'John Doe',
    isSeller: true,
  }

  return (
    <div className={active ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          {/* <Link to={'/'}> */}
          <span className="text">fiverr</span>
          {/* </Link> */}

          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://d2w9m16hs9jc37.cloudfront.net/dimg/blog/2023/07/hockerty_daniel_craig_james_bond_navy_blue_suit_2ce53994_eb83_4299_841e_52582b71d43c.jpg"
                alt="profile photo"
              />
              <span>{currentUser.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add New Gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar
