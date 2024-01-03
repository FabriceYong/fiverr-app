import React, { useEffect, useState } from 'react'
import './login.scss'
import { FaEyeSlash } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import axios from 'axios'
import newRequest from '../../utils/newRequest'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { email, password } = formData
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)

      if(!email || !password) {
        setLoading(false)
        setError('All input fields are required')
        return
      }

      const res = await newRequest.post('/auth/login', { email, password })

      localStorage.setItem('currentUser', JSON.stringify(res.data))

      setError(null)
      setLoading(false)
      navigate('/')

    } catch (error) {
      setError(error.response.data)
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <div className="login">
      <h1>Sign In</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Email</label>
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            placeholder="johndoe@example.com"
            onChange={handleChange}
          />
        </div>

        {showPassword ? (
          <div className="show">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              value={password}
              name="password"
              id="password"
              placeholder="**********"
              onChange={handleChange}
            />
            <FaEye onClick={() => setShowPassword(!showPassword)} />
          </div>
        ) : (
          <div className="hide">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              name="password"
              id="password"
              placeholder="**********"
              onChange={handleChange}
            />
            <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
            {/* <span>show</span> */}
          </div>
        )}

        <button disabled={loading}>{loading ? 'Loading' : 'Submit'}</button>
      </form>
    </div>
  )
}

export default Login
