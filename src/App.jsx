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

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/newps" element={<NewPhotoshootPage />} />
        <Route path="/:photographerId/photoshoot" element={<PhotoshootPage />} />
        <Route path="/:clientId/approval" element={<PhotoshootApprovalPage />} />

      </Routes>

    </div>
  )
}

export default App