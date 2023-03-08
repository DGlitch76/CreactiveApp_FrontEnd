import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { SessionContext } from "../contexts/SessionContext"

const PrivateRoute= ({children}) => {
    const {isLoading, isAuthenticated} = useContext(SessionContext)
  // if not authenticated return to login
    if(!isLoading && !isAuthenticated) {
    return <Navigate to= '/login' />
    }

    return <>{children}</>
}
export default PrivateRoute