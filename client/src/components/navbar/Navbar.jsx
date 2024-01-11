import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { Link, useLocation } from 'react-router-dom'
import { IoMdMenu } from 'react-icons/io'
import newRequest from '../../utils/newRequest'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', isActive)

    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, [])

  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  const handleLogout = async () => {
    try {
     await newRequest.post('/auth/logout')
      localStorage.setItem('currentUser', null)
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          <div className="hamburger-menu">
            <IoMdMenu />
          </div>
          <Link to={'/'}>
            <span className="text">fiverr</span>
            <span className="dot">.</span>
          </Link>
        </div>

        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser ? (
            <Link to={'/login'}>
              <span>Sign in</span>
            </Link>
          ) : (
            <Link onClick={handleLogout}>
              <span>Log out</span>
            </Link>
          )}
          {!currentUser && <span>Become a Seller</span>}
          {!currentUser && (
            <Link to={'/register'}>
              <button>Join</button>
            </Link>
          )}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src={currentUser?.img || '/img/user-avatar.jpg'}
                alt="profile photo"
              />
              <span>{currentUser.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to={'/my-gigs'}>
                        Gigs
                      </Link>
                      <Link className="link" to={'/add'}>
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to={'/orders'}>
                    Orders
                  </Link>
                  <Link className="link" to={'/messages'}>
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== '/') && (
        <>
          <hr />
          <div className="menu">
            <Link to={'/'} className="link menuLink">
              Graphics & Design
            </Link>
            <Link to={'/'} className="link">
              Video & Animation
            </Link>
            <Link to={'/'} className="link">
              Writing & Translation
            </Link>
            <Link to={'/'} className="link">
              AI Services
            </Link>
            <Link to={'/'} className="link">
              Digital Marketing
            </Link>
            <Link to={'/'} className="link">
              Music & Audio
            </Link>
            <Link to={'/'} className="link">
              Programming & Tech
            </Link>
            <Link to={'/'} className="link">
              Business
            </Link>
            <Link to={'/'} className="link">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  )
}

export default Navbar
