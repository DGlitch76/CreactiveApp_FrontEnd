import '../index.css'

import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";

import default_project_image from '../assets/default_project_image.jpeg';

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

  const handleDelete = (currentProjectId) => {
    fetch(`http://localhost:5005/projects/${currentProjectId}`, {method: 'DELETE'})
  }; 

  return (
    <>
      <div className="App container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginBottom: 100
        }}>
        {projects && projects.filter((project) => project._id === projectId).map((project) => (
          <div key={project._id} style={{ display: 'flex'}}>
            <div style={{ margin: 'auto' }}>
              <img src={project.images[0] ? project.images[0] : default_project_image}
                alt={project.name}
                style={{
                  height: '70vh',
                }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'self-start' }}>
              <h1>{project.name}</h1>
              <h2>{project.description}</h2>
              <h4>{project.client}</h4>
              <p>{project.owner}</p>
              <h6>{project.comments}</h6>
            </div>
            <Link to={`/project/${project._id}`}><button type='button' >Update Button</button></Link>
              <button type='button' onClick={() => {handleDelete(project._id)}}>Delete Button</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectPage;