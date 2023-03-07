function LoginPage(){

    return(
    
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
    <>
    <h1>Login</h1>
    <AuthForm 
     username={username} 
     setUsername={setUsername} 
     password={password}
     setPassword={setPassword}
     handleSubmit={handleSubmit}
     isLogin />
    </>
    )  
}

export default LoginPage