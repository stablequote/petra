import { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import Input from '../../components/Input/Input'
import PasswordInput from '../../components/PasswordInput/PasswordInput'
// import Button from '../../components/Button/Button'
// import './Login.css'

function Login() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/dashboard")
  }

  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="container">
     <h2>Petra International CO.</h2>
     <div className='logo'>
      <img src="" alt="company logo" />
     </div>
     <div className="form">
      <form method='POST'>
        <Input 
        type="email"
        placeholder="Enter E-mail address"
        value={input.email}
        onChange={handleChange}
        />
        <PasswordInput 
        value={input.password}
        onChange={handleChange}
        />
        <Button variant='contained' color="cyan" onClick={(e) => handleSubmit(e)}>Login</Button>
      </form>
     </div>
    </div>
  )
}

export default Login
