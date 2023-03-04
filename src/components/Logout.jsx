import { useEffect, useContext } from "react";
import { SessionContext } from "../contexts/SessionContext"


const ButtonLogout = () => {
    
    const {setToken} = useContext(SessionContext)
    const logout = ()=>{
        setToken('')
        window.localStorage.removeItem('authToken');
    }
        
    useEffect(() => {
        window.location = "/login";
    }, []);
    return (
    <>
    <form>
        <button onClick={logout}>Logout</button>
    </form>


    </>
    )
};

export default ButtonLogout;
    
    

