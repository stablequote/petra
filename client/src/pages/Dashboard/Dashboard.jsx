import { useState } from 'react';
import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle'
import { ThemeContext, themes } from '../../contexts/DarkModeContext';
import Layout from '../../components/Layout/Layout'
import Sidebar from '../../components/Sidebar/Sidebar'
import Welcome from '../../components/Welcome/Welcome'
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';

function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div>
        <Sidebar />
        <Welcome />
        {/* Dark mode switch */}
        <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <DarkModeToggle
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
        </ThemeContext.Consumer>
        {/* Main container (layout) */}
        <Layout />
        <FilterSidebar />
    </div>
  )
}

export default Dashboard