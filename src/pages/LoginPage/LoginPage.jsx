import React from 'react'
import { useState } from 'react'
import './LoginPage.css'

export default function LoginPage(props) {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.setUser(inputValue)
    }

  return (
    
    <div className="login-container">
      <h3 className="login-title">Please enter your username</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="label">Username:</label>
          <input type="text" onChange={handleChange} placeholder='Enter a username'/>
        </div>
        <button type="submit" className="login-button">LogIn</button>
      </form>
  </div>
  )
}
