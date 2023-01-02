function PasswordInput({...Children}) {
  return (
    <div className="input password-input">
        <label htmlFor="password">
        <input 
        type="password" 
        name='password' 
        placeholder='Enter password' 
        />
        </label>
    </div>
  )
}

export default PasswordInput