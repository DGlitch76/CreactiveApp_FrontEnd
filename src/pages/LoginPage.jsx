import { useNavigate } from "react-router-dom"
import { useContext,useState } from "react"
import AuthForm from "../components/AuthForm"
import { SessionContext } from "../contexts/SessionContext"


const LoginPage = () => {
    const navigate = useNavigate()
    
    const {setToken} = useContext(SessionContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //send info to backend (need to add the TRY/CATCH)
    const handleSubmit = async() => {
        try{
            console.log({username, password})
        const response = await fetch('http://localhost:5005/auth/login',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({username, password})
        })
        const parsed = await response.json()
        console.log(parsed)
        setToken(parsed.token)
        setTimeout(() => {
        navigate('/profile')
        }, 250)

        }catch(error){
        console.log.apply(error)
        }
    }

    return (
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <img
              src="https://img.freepik.com/fotos-premium/fondo-acuarela-azul-pastel_199112-157.jpg"
              alt="Imagem lateral"
              style={{ position: 'fixed', top: 0, bottom: 0, left: 0, width: '40%' }}
            />
          </div>
          <div style={{ flex: 1.5 }}>
            
            <AuthForm
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
              isLogin
            />
          </div>
        </div>
      );
    };

export default LoginPage