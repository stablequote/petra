import { useState } from 'react';

function ToggleButton() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }
  return (
    <div>
        <button onClick={handleToggle}>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
        </button>
    </div>
  )
}

export default ToggleButton