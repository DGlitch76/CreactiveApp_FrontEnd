import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext"


const ButtonLogout = () => {
    const navigate=useNavigate()
    const {isAuthenticated}=useContext(SessionContext)
    const removeToken = () => {
        localStorage.removeItem('authToken')
    }

    const logOutUser = () => {
        navigateHome()
        removeToken() 
        isAuthenticated(false)
    }
    const navigateHome = () => {
        navigate('/')
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
        {/* <button onClick={logOutUser();navigateHome()}>Logout</button> */}
        <button onClick={logOutUser}>Logout</button>
    </form>


    </>
    )
    };

export default ButtonLogout;
    
    

