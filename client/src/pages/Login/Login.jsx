import { useState } from 'react'
import Input from '../../components/Input/Input'
import PasswordInput from '../../components/PasswordInput/PasswordInput'
import './Login.css'

function Login() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Logged in!!!")
  }

  const handleChange = (e) => {
    setInput(e.target.value)
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
        onChange={handleChange}
        />
        <PasswordInput 
        onChange={handleChange}
        />
        <button onClick={() => handleSubmit()}>Login</button>
      </form>
     </div>
    </div>
  )
}

export default Login
