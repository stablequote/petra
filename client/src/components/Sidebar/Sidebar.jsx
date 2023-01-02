import React from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'

function Sidebar() {
  return (
    <>
    {/* toggle button */}
    <ToggleButton />
    {/* sidebar */}
    <div className="sidebar">
        <div className="sidebar-wrapper">
            <div className="control-buttons">
                <ul>
                    <li><button>Monitor</button></li>
                    <li><button>Tasks</button></li>
                    <li><button>Statistics</button></li>
                    <li><button>Manage</button></li>
                </ul>
            </div>
            <button className="btn logout">Logout</button>
        </div>
    </div>
    </>
  )
}

export default Sidebar