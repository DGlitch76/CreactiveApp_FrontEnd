import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import LandingPage from './pages/LandingPage'

import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

import NewPhotoshootPage from './pages/NewPhotoshoot'
import NewIllustrationPage from './pages/NewIllustration'

import PhotoshootPage from './pages/PhotoshootPage'
import PhotoshootApprovalPage from './pages/PhotoshootApproval'
import AllProjectsPage from './pages/AllProjectsPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  const [allProjects, setProjects] = useState();


  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />

        <Route path="/api/projects" element={<AllProjectsPage allProjects={allProjects} setProjects={setProjects}/>} />

        <Route path="/api/project/:projectId" element={<PhotoshootPage />} />
        <Route path="/api/approval/:projectId" element={<PhotoshootApprovalPage />} />
        <Route path="/newps" element={<NewPhotoshootPage />} />

        <Route path='*' element={<h1>404 Not Found</h1>} />

      </Routes>
    <Footer/>
    </div>
  )
}

export default App

