import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute'
import './App.css'

function App() {

  return (
    <div className="App">
   <Routes>
    <Route path='/signup' element={<SignupPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/profile' element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
    <Route path='*' element={<h1>404 Not Found</h1>} />
   </Routes>
    </div>
  )
}

export default App

