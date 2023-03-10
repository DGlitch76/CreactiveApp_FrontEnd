import { React, useState } from 'react';
import Navbar from '../components/Navbar';

import {useNavigate } from 'react-router-dom';

import axios from 'axios';


function NewProjectPage() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // onImages(e, project._id)
    let images = event.target.images.files[0];
    let formData = new FormData();
    formData.append("imageUrl", images);
    formData.append("name", name);
    formData.append("description", description);
    try {
      const newProject = { name, description, images };
      const response = await axios.post(`${import.meta.env.VITE_HOST}/projects/new`, formData);
      setImages(response.data)
      navigate('/projects/' + response.data.project._id);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data" >
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
            Images
          </label>
          <input
            type="file"
            className="form-control"
            id="exampleInputEmail1"
            accept="image/png, image/jpg, image/jpeg"
            name="images"
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