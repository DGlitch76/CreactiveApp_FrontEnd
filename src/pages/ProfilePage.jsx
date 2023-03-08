import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext';
// import { useState, useEffect } from 'react'



function ProfilePage() {
  const { token } = useContext(SessionContext);
  const navigate = useNavigate();

//   const [user, setUser] = useState('null');

    //FETCH USERS
    // useEffect(() => {
    //     fetch(`/users`)
    
    //       .then((response) => response.json())
    
    //       .then((user) => setUser(user))
    
    //       .catch((err) => {
    //         setError(err.message);
    //         setBeers(null);
    //       })
    
    //       .finally(() => {
    //         setLoading(false);
    //       });
    
    //   }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      {/* <p>Welcome, {user?(req.body.username):'Creative'}!</p> */}
      <p>Welcome, !</p>
      <button onClick={() => navigate('/projects')}>All Projects</button>
    </div>
  );
}

export default ProfilePage;