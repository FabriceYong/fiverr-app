import React, { useState } from 'react'
import './Register.scss'
import newRequest from '../../utils/newRequest'
import { Link, useNavigate } from 'react-router-dom'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import upload from '../../utils/upload'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [file, setFile] = useState(null)
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    img: '',
    country: '',
    isSeller: false,
    phone: '',
    desc: '',
  })
  const { username, email, password, img, country, isSeller, desc, phone } = user

  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({
      ...user, 
      [e.target.id]: e.target.value
    })
  }

  const handleSeller = (e) => {
    setUser({
      ...user,
      isSeller: e.target.checked
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const url = await upload(file)
    try{
      await newRequest.post('/auth/register', {
        ...user, img: url
      })
      navigate('/login')
    } catch(err) {
      console.log(err)
    }

  }


  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            placeholder="e.g. John Doe"
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="e.g. johndoe@example.com"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          {showPassword ? (
            <div className="hide">
              <input
                name="password"
                id="password"
                value={password}
                type="text"
                placeholder="*********"
                onChange={handleChange}
              />
              <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
            </div>
          ) : (
            <div className="show">
              <input
                name="password"
                id="password"
                value={password}
                type="password"
                placeholder="*********"
                onChange={handleChange}
              />
              <FaEye onClick={() => setShowPassword(!showPassword)} />
            </div>
          )}
          <label htmlFor="">Profile Picture</label>
          <input
            type="file"
            multiple
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="country">Country</label>
          <input
            id="country"
            name="country"
            type="text"
            value={country}
            placeholder="USA"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} value={isSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label htmlFor="desc">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id="desc"
            cols="30"
            rows="7"
            value={desc}
            onChange={handleChange}
          ></textarea>

          <p>
            Already have an account? <Link to={'/login'}>Login here</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register
