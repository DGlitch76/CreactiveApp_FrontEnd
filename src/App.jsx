
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import LandingPage from './pages/LandingPage'

import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'


import AllProjectsPage from './pages/AllProjectsPage'
import ProjectPage from './pages/ProjectPage'
import NewProjectPage from './pages/NewProjectPage'

import TopNav from './components/TopNav'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import logo from "./assets/logo_primary.svg";



function App() {




  const [allProjects, setProjects] = useState();


  return (
    <div className="App" style={{marginTop:0, padding:0 }}>
    {/* MUI Drawer  */}

    <TopNav/>

{/* {!isAuthenticated ? (<TopNav/>): (<Navbar/>)} */}
 


      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path="/profile" element={<PrivateRoute><ProfilePage/></PrivateRoute>} />

        <Route path="/projects" element={<AllProjectsPage allProjects={allProjects} setProjects={setProjects}/>} />

        <Route path="/projects/:projectId" element={<ProjectPage projects={allProjects} setProjects={setProjects}/>} />

        <Route path="/projects/new" element={<NewProjectPage />} />

        <Route path='*' element={<h1>404 Not Found</h1>} />

</Routes>

      <Footer/>

    </div>
  )
}

export default App;

