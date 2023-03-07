import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Projects({ allProjects, setProjects }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //FETCH DATA FROM API
  useEffect(() => {
    fetch(`http://localhost:5005/api/projects`)
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

  return (
    <div className="App container" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {allProjects &&
        allProjects.map((project) => (
          <div key={project._id}>
            <div className="container" style={{ display: 'inline-block' }}>
              <Link to={`/api/projects/${project._id}`}>
                <img src={project.image_url} alt={project.name} style={{ maxHeight: '150px' }} />
              </Link>
            </div>
            <div>
              <h4>{project.name}</h4>
              <p>{project.tagline}</p>
              <span>{project.owner}</span>
              <Link to={`/api/projects/${project._id}`}> DETAILS </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Projects;
