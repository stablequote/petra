// importing react router dom
import { Home, Login, Dashboard, Tasks, Monitor, Statistics, Register, ForgotPassword, Projects, Manage } from './pages'
import './App.css'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <div className="App">
    {/* Defining routes */}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="login" element={<Login />} />
      <Route exact path="register" element={<Register />} />
      <Route exact path="forgot-password" element={<ForgotPassword />} />
      <Route exact path="projects" element={<Projects />} />
      <Route exact path="dashboard" element={<Dashboard/>} />
      <Layout>
        <Switch>
          <Route exact path="dashboard/monitor" element={<Monitor/>} />
          <Route exact path="dashboard/tasks" element={<Tasks/>} />
          <Route exact path="dashboard/statistics" element={<Statistics/>} />
          <Route exact path="dashboard/manage" element={<Manage/>} />
        </Switch>
      </Layout>
    </Routes>
    </div>
  )
}

export default App
