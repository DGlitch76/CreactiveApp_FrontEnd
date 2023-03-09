import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';


function UpdatedProjectPage() {


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState('');

  const [formUpdate, setFormUpdate] = useState();
  const { projectId } = useParams();


  useEffect(() => {
    const projectData = async () => {
    const response = await axios.get(`http://localhost:5005/projects/updated/${projectId}`)
    console.log(response.data)
    setName(response.data.project.name)
    setDescription(response.data.project.description)
    setImages(response.data.project.images)
    }
    projectData()
  }, [])
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // onImages(e, project._id)
    let images = event.target.images.files[0];
    let formData = new FormData();
    formData.append("imageUrl", images);
    formData.append("name", name);
    formData.append("description", description);
    console.log(formData, name, description)
    try {
      const response = await axios.put(`http://localhost:5005/projects/${projectId}/update`, {name,description});
      //setImages(response.data)
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
          Update Project
        </button>
      </form>
    </div>
  );
}
export default UpdatedProjectPage;