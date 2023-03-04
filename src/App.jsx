import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import LandingPage from './pages/LandingPage'
import ProfilePage from './pages/ProfilePage'
import NewPhotoshootPage from './pages/NewPhotoshoot'
import PhotoshootPage from './pages/PhotoshootPage'
import PhotoshootApprovalPage from './pages/PhotoshootApproval'


function App() {

  const [allProjects, setProjects] = useState();


  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path="/profile" element={<privateRoute><ProfilePage /></privateRoute>} />

        <Route path="/api/projects" element={<AllProjectsPage allProjects={allProjects} setProjects={setProjects}/>} />

        <Route path="/:photographerId/photoshoot" element={<PhotoshootPage />} />
        <Route path="/:clientId/approval" element={<PhotoshootApprovalPage />} />
        <Route path="/newps" element={<NewPhotoshootPage />} />

        <Route path='*' element={<h1>404 Not Found</h1>} />

      </Routes>

    </div>
  )
}

export default App

