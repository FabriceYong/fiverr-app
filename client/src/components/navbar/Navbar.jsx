import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

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
    img: "./img/james-bond.jpg"
  }

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          <Link to={'/'}>
          <span className="text">fiverr</span>
          </Link>

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
                src={currentUser?.img}
                alt="profile photo"
              />
              <span>{currentUser.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className='link' to={'/gigs'}>Gigs</Link>
                      <Link className='link' to={'/add'}>Add New Gig</Link>
                    </>
                  )}
                  <Link className='link' to={'/orders'}>Orders</Link>
                  <Link className='link' to={'/messages'}>Messages</Link>
                  <Link className='link' to={'/logout'}>Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active || pathname !== '/' && (
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
