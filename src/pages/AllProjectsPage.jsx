import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';



// Ref doc https://blog.logrocket.com/modern-api-data-fetching-methods-react/

function Projects({ allProjects, setProjects }) {


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  //FETCH DATA FROM API
  useEffect(() => {
    fetch(`https://localhost:5172/api/projects`)

      .then((response) => response.json())

      .then((allProjects) => setProjects(allProjects))

      .catch((err) => {
        setError(err.message);
        setBeers(null);
      })

      .finally(() => {
        setLoading(false);
      });

  }, []);







  return (
    <div className="App container" style={{ display: 'flex', flexWrap: 'wrap' }}>

      {allProjectss && allProjectss.map((Project) => (
        <>
          <div className="container" style={{ display: 'inline-block' }}>
            <Link to={`/project-details/${project._id} `}> <img src={project.image_url} alt={project.name} style={{ maxHeight: '150px' }} /></Link>
          </div>
          <div>
            <h4>{project.name}</h4>
            <p>{project.tagline}</p>
            <span>{project.owner}</span>
            <Link to={`/project-details/${project._id} `}> DETAILS </Link>  // if client -- Approve // if photographer -- Edit/update
          </div>
        </>
      ))}





    </div>

  )
}

export default Projects
