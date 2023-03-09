import '../index.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { useNavigate } from 'react-router-dom';

// Ref doc https://blog.logrocket.com/modern-api-data-fetching-methods-react/

function Projects({ allProjects, setProjects }) {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //FETCH DATA FROM API
  useEffect(() => {
    fetch(`http://localhost:5005/projects`)
      .then((response) => response.json())
      .then((allProjects) => setProjects(allProjects))
      .catch((err) => {
        setError(err.message);
        setProjects(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);



  return (<>
    <div className="App container"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 40,
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 50,
        marginBottom: 100
      }}>


      {allProjects && allProjects.map((project) => (
        <div key={project._id}>
          <ProjectCard project={project} images={allProjects} />
        </div>
      ))}
    </div>
  </>
  )
}

export default Projects
