import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle'
import Layout from '../../components/Layout/Layout'
import Sidebar from '../../components/Sidebar/Sidebar'
import Welcome from '../../components/Welcome/Welcome'

function Dashboard() {
  return (
    <div>
        {/* Sidebar */}
        <Sidebar />
        {/* Welcome */}
        <Welcome />
        {/* Dark mode switch */}
        <DarkModeToggle />
        {/* Main container (layout) */}
        <Layout />
    </div>
  )
}

export default Dashboard