import { useState } from 'react';

function DarkModeToggle() {

    const [toggleDarkMode, setToggleDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setToggleDarkMode(!toggleDarkMode)
    }
  return (
    <>
    <button className='dark-mode-toggle' onClick={handleDarkModeToggle}>
        Toggle
    </button>
    </>
  )
}

export default DarkModeToggle