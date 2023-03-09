import '../index.css'

import { Link } from "react-router-dom";
import { useContext } from "react";           
import { SessionContext } from "../contexts/SessionContext";
import ButtonLogout from "./ButtonLogout";

function Navbar() {
    const { isAuthenticated, username } = useContext(SessionContext);

    return (
      <div >
        <nav >
          <Link to="/">
            <button style={{color: "#1EDFFD"}}>Home</button>
          </Link>

          {isAuthenticated && (
            <>
              <Link to="/projects">
                <button style={{color: "#1EDFFD"}}>Projects</button>
              </Link>     
              <ButtonLogout/>   
              {/* <button onClick={ButtonLogout}>Logout</button> */}
            </>
          )}
     
          {!isAuthenticated && (
            <>
              <Link to="/signup"> <button style={{color: "#1EDFFD"}}>Sign Up</button> </Link>
              <Link to="/login"> <button style={{color: "#1EDFFD"}}>Login</button> </Link>
            </>
          )}
        </nav>
      </div>
    );
  }
     
export default Navbar;