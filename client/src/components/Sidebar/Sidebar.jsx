import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mantine/core';
import ToggleButton from '../ToggleButton/ToggleButton'
import './Sidebar.css'

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
                    <li><Button component={Link} to="/dashboard/monitor" variant='light' fullWidth size='md'>Monitor</Button></li>
                    <li><Button component={Link} to="/dashboard/tasks" variant='light' fullWidth size='md'>Tasks</Button></li>
                    <li><Button component={Link} to="/dashboard/statistics" variant='light' fullWidth size='md'>Statistics</Button></li>
                    <li><Button component={Link} to="/dashboard/manage" variant='light' fullWidth size='md'>Manage</Button></li>
                </ul>
            </div>
            <Button variant='outline' color="yellow" className="btn-logout">Logout</Button>
        </div>
    </div>
    </>
  )
}

export default Sidebar