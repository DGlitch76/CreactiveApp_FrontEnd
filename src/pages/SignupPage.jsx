import { useNavigate } from "react-router-dom"
import { useState } from "react"
import AuthForm from "../components/AuthForm"

const SignupPage = () => {
    
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    //send info to backend
    const handleSubmit = async() => {
        console.log({username, password})

        try{
 const response = await fetch('http://localhost:5005/auth/signup',{
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({username, password, email})
    })
    //if the status is = 201(user created) go to login page
    if (response.status == 201) {
        navigate('/login')
    }
        }catch(error){
   console.log(error)
    }}
    return (
        <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <img
            src="https://img.freepik.com/fotos-premium/fondo-acuarela-azul-pastel_199112-157.jpg"
            alt="Imagem lateral"
            style={{ position: 'fixed', top: 0, bottom: 0, left: 0, width: '40%' }}
          />
        </div>
        <div style={{ flex: 1.5}}>
    <AuthForm 
     username={username} 
     setUsername={setUsername} 
     password={password}
     email={email}
     setEmail={setEmail}
     setPassword={setPassword}
     handleSubmit={handleSubmit}
     />
          </div>
        </div>
      );
    };

export default SignupPage