import { React, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
function NewProjectPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newProject = { name, description, image };
      const response = await axios.post(`http://localhost:5005/projects/new`, newProject);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create New Project
        </button>
      </form>
    </div>
  );
}
export default NewProjectPage;