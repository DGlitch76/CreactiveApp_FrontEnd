import '../index.css'

import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';

import default_project_image from '../assets/default_project_image.jpeg';
import { maxWidth } from '@mui/system';



function ProjectPage({ projects, setProjects }) {
  const { projectId } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // FETCH DATA FROM API
  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOST}/projects`)
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
    fetch(`${import.meta.env.VITE_HOST}/projects/${currentProjectId}`, {method: 'DELETE'})
    navigate('/projects');
  };


  return (
    <> <div style={{ 
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      maxWidth:'60%',
      margin:'50px auto 150px auto'}}>

   
        {projects && projects.filter((project) => project._id === projectId).map((project) => (
          <div key={project._id}>
            <div style={{ margin: 'auto' }}>
              <img src={project.images[0] ? project.images[0] : default_project_image}
                alt={project.name}
                style={{
                  height: '70vh',
                }} />
            </div>
           
            <div>
              <h1>{project.name}</h1>
              <p style={{fontWeight:300}}>{project.description}</p>
              <h4>{project.client}</h4>
              <p>{project.owner}</p>
              <h6>{project.comments}</h6>
            </div>
           
            <Link to={`/project/${project._id}`}><button type='button' >Update Button</button></Link>
              <button type='button' onClick={() => {handleDelete(project._id)}}>Delete Button</button>
          </div>
        ))}
     
   </div> </>
  );
}

export default ProjectPage;