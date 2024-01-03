import React, { useState } from 'react'
import './register.scss'
import { RxSwitch } from 'react-icons/rx'
import newRequest from '../../utils/newRequest'


const Register = () => {
    const [formData, setFormData] = useState({ username: '', password: '', email: '', img: '', country: '', phone: '', desc: '', isSeller: false })
    const { username, email, password, img, country, phone, desc, isSeller } = formData

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await newRequest.post('/auth/register', {password, email, username, img, country, phone, desc})
        const user = res.data
        console.log(user)
    }

    const handleChange = (e) => {
        if(e.target.type === 'file') {
            setFormData({
                ...formData,
                [e.target.file]: e.target.value
            })
        }
        setFormData({ ...formData, [e.target.id]: e.target.value})
    }
  return (
    <div className="register">
      <div className="container">
        <div className="left">
          <h1>Create a new account</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                placeholder="John Doe"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="johndoe@example.com"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="********"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="img">Profile Picture</label>
              <input type="file" id="img" />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input
                type="country"
                id="country"
                name="country"
                value={country}
                placeholder="USA"
                onChange={handleChange}
              />
            </div>
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <form>
            <div className="toggle">
              <label htmlFor="switch">Activate the seller account</label>
              <label className="switch">
                <input type="checkbox" />
                {isSeller ? (
                  <span onClick={() => setFormData({ ...formData, isSeller: !isSeller})} className="true">
                    <RxSwitch />
                  </span>
                ) : (
                  <span onClick={() => setFormData({ ...formData, isSeller: !isSeller})} className="false">
                    <RxSwitch />
                  </span>
                )}
              </label>
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                min={1}
                id="phone"
                name="phone"
                value={phone}
                placeholder="+1 234 567 89"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="desc">Description</label>
              <textarea
                name="desc"
                id="desc"
                cols="30"
                rows="10"
                value={desc}
                placeholder="Add a short description of yourself"
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
