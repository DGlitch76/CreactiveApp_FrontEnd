import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function ProjectPage({ projects, setProjects }) {
  const { projectId } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // FETCH DATA FROM API
  useEffect(() => {
    fetch(`http://localhost:5005/projects`)
      .then((response) => response.json())
      .then((projects) => setProjects(projects))
      .catch((err) => {
        setError(err.message);
        setProjects(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="App container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {projects && projects.filter((project) => project._id === projectId).map((project) => (
          <div>
            <img src={project.images[0]} alt={project.name} style={{ height: '25rem' }} />
            <h1>{project.name}</h1>
            <h2>{project.description}</h2>
            <h4>{project.client}</h4>
            <p>{project.owner}</p>
            <h6>{project.comments}</h6>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectPage;