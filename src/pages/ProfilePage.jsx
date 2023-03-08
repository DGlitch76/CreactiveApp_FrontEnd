import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext';

function ProfilePage() {
  const { token } = useContext(SessionContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {token?.username}!</p>
      <button onClick={() => navigate('/projects')}>All Projects</button>
    </div>
  );
}

export default ProfilePage;