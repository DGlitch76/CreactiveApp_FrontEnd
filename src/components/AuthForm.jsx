const AuthForm = ({username, password, setUsername, setPassword, handleSubmit, isLogin = false}) => {
    const submitCallback = event => {
     event.preventDefault()
     handleSubmit()
    } 
     
     return(
         <form onSubmit={submitCallback}>
             <label>
             Username
             <input type='text' 
             value={username} 
             onChange={event => setUsername(event.target.value)} 
             />
             </label>
             <label>
             Password
             <input 
             type='password' 
             value={password} 
             onChange={event => setPassword(event.target.value)} 
             />
             </label>
             <button type='submit'>{isLogin ? 'Login' : 'SignUp'}</button>
         </form>
     )
 }
 
 export default AuthForm;