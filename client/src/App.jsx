import { Routes, Route } from 'react-router-dom';
import { Home, Login, Dashboard, Tasks, Monitor, Statistics, Register, ForgotPassword, Projects, Manage, SingleTask, SingleProject, SingleRequest } from './pages'
import Layout from './components/Layout/Layout'
import Chart from './components/Chart/Chart'
import './App.css'
import './styles/index.css'

function App() {

  return (
    <div className="App">
      <h1>Welcome</h1>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path="chart" element={<Chart />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="projects" element={<Projects />} />
        <Route path="dashboard" element={<Dashboard/>} />
        {/* Dashboard */}
        <Route exact path="dashboard/monitor" element={<Monitor/>} />
        <Route path="dashboard/tasks" element={<Tasks/>} />
        <Route path="dashboard/statistics" element={<Statistics/>} />
        <Route path="dashboard/manage" element={<Manage/>} />
        <Route path="dashboard/tasks/:id" element={<SingleTask/>} />
        <Route path="dashboard/projects/:id" element={<SingleProject/>} />
        <Route path="dashboard/manage/requests/:id" element={<SingleRequest/>} />
        <Route path="*" element={<h1>Not found.</h1>} />
      </Routes>
    {/* Defining routes */}
    {/* <Routes>
      <Route exact index path="/" element={<Home />} />
      <Route path="/chart" element={<Chart />} />
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
      <Route path="/dashboard">
        <Route exact path="dashboard/monitor" element={<Monitor/>} />
        <Route exact path="dashboard/tasks" element={<Tasks/>} />
        <Route exact path="dashboard/statistics" element={<Statistics/>} />
        <Route exact path="dashboard/manage" element={<Manage/>} />
      </Route>
    </Routes> */}
    </div>
  )
}

export default App
