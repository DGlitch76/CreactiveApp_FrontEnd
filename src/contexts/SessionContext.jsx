import { createContext, useEffect, useState } from "react"
//using context to store the token and make available during the app
export const SessionContext = createContext()



const SessionContextProvider = ({children}) => {
    const [isLoading,setIsLoading ] = useState(true)
    const [token, setToken] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

//Verifying the local token
    const verifyToken = async(jwt) => {
        if (jwt){
        try{
            await fetch(`${import.meta.env.VITE_HOST}/auth/verify`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${jwt}`
              },
            })
            setToken(jwt)
            //to set when we got back a token from the local storage
            setIsAuthenticated(true) 
            setIsLoading(false)
        } catch (error){
            console.log(error)
            window.localStorage.removeItem('authToken')
        }
     }}


    useEffect(()=>{
      const localToken = window.localStorage.getItem('authToken')   
      verifyToken(localToken)
    },[])
    
    useEffect(()=>{
        console.log(token)
        //store the token key in localStorage
        if(token){
         window.localStorage.setItem('authToken', token) 
         //for the first login when we dont have any token in the computer
         if(!isAuthenticated){
            setIsAuthenticated(true) 
         }
        }
        verifyToken(token)
    }, [token])

    return (
        <SessionContext.Provider value={{ setToken, isAuthenticated, isLoading, setIsAuthenticated}}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionContextProvider