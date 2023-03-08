import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function ProjectPage() {
  const [project, setProject] = useState({});
  const { projectId } = useParams();
  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await axios.get(`http://localhost:5005/projects/${projectId}`);
        setProject(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProject();
  }, [projectId]);
  return (
    <div>
      <img src={project.image_url} alt={project.name} style={{ height: '25rem' }} />
      <h1>{project.name}</h1>
      <h2>{project.description}</h2>
      <h4>{project.client}</h4>
      <p>{project.owner}</p>
      <h6>{project.comments}</h6>
    </div>
  );
}
export default ProjectPage