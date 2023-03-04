import { useEffect, useContext } from "react";
import { SessionContext } from "../contexts/SessionContext"


const ButtonLogout = () => {
    
    const removeToken = () => {
        localStorage.removeItem('authToken')
    }

    const logOutUser = () => {
        removeToken() 
        isAuthenticated()
        logOutUser()
    }
    
    // const {setToken} = useContext(SessionContext)
    // const logout = ()=>{
    //     setToken('')
    //     window.localStorage.removeItem('authToken');
    // }
        
    // useEffect(() => {
    //     window.localStorage.removeItem('Token')
    //     window.location.href = "/login";
    // }, []);

    return (
    <>
    <form>
        <button onClick={ButtonLogout}>Logout</button>
    </form>


    </>
    )
    };

export default ButtonLogout;
    
    

