import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'

import LandingPage from './pages/LandingPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import ProjectPage from './pages/ProjectPage'
import AllProjectsPage from './pages/AllProjectsPage'
import NewProjectPage from './pages/NewProjectPage'

function App() {

  const [allProjects, setProjects] = useState();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="/projects" element={<AllProjectsPage allProjects={allProjects} setProjects={setProjects}/>} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        <Route path="/projects/new" element={<NewProjectPage />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App