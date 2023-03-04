import { useNavigate } from "react-router-dom"
import { useState } from "react"
import AuthForm from "../components/AuthForm"

const SignupPage = () => {
    
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //send info to backend
    const handleSubmit = async() => {
        console.log({username, password})
    const response = await fetch('http://localhost:5005/auth/signup',{
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({username, password})
    })
    //if the status is = 201(user created) go to login page
    if (response.status == 201) {
        navigate('/login')
    }
    }
    return (
    <>
    
    <h1>Signup</h1>
    <AuthForm 
     username={username} 
     setUsername={setUsername} 
     password={password}
     setPassword={setPassword}
     handleSubmit={handleSubmit}/>
    </>
    )  
}

export default SignupPage