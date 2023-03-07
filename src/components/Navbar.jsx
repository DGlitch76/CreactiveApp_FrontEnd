import { Link } from "react-router-dom";
import { useContext } from "react";           
import { SessionContext } from "../contexts/SessionContext";
import ButtonLogout from "./ButtonLogout";


function Navbar() {
    const { isAuthenticated, username } = useContext(SessionContext);

    return (
        <nav>
          <Link to="/">
            <button>Home</button>
          </Link>
     
          {isAuthenticated && (
            <>
              <Link to="/api/projects">
                <button>Projects</button>
              </Link>     
              <ButtonLogout/>   
              {/* <button onClick={ButtonLogout}>Logout</button> */}
            </>
          )}
     
          {!isAuthenticated && (
            <>
              <Link to="/signup"> <button>Sign Up</button> </Link>
              <Link to="/login"> <button>Login</button> </Link>
            </>
          )}
        </nav>
      );
    }
     
    export default Navbar;