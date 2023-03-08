import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';



function LandingPage({ allProjects, setProjects }) {


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


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
  <div style={{
    position:'absolute',
    left:0,top:0,
    width:'100vw',
    height:'100vh',
    margin:'auto',
    zIndex:10,
    display:'flex',
    columnWidth:'100vw',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    color:'white'
    }}>
  <h1>TRYING CENTER TITLE TEXT</h1>
  <p>Working on video // LANDING PAGE // problems with responsive... Nearly there!!</p>
  </div>
  <div>
  <Carousel fade style={{marginTop:0, padding:0, position:'absolute', left:0, top:0, minHeight:'100vh'}}>
  <Carousel.Item>
    <video
      className="d-block vw-100 vh-100 center"
      autoPlay="true"
      loop="true"
      src="https://mdbootstrap.com/img/video/Lines.mp4"
      alt="First slide"
    style={{
      objectFit: 'cover',
    }}
    />
    {/* <Carousel.Caption style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    <h1>Secondary Header</h1>
    <p>Extra Info on a particular feature</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <video
      className="d-block vw-100 vh-100"
      autoPlay="true"
      loop="true"
      src="https://mdbootstrap.com/img/video/Lines.mp4"
      alt="First slide"
    style={{
      objectFit: 'cover',
    }}
    />
    {/* <Carousel.Caption style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    <h1>Secondary Header</h1>
    <p>Extra Info on a particular feature</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  
</Carousel>
</div>
// NOt working
<div className="App container" style={{ display: 'flex', flexWrap: 'wrap' }}>
     

     {allProjects && allProjects.map((project) => (
       <> 
       <ProjectCard project={project} images={allProjects}/>
     </>
         ))}
     </div>

    </>);
}

export default LandingPage;
{/* <img  src="https://media.istockphoto.com/id/915318946/pt/vetorial/empty-dark-blue-background-with-rays-of-light-sparkles-shining-night-star-sky.jpg?s=612x612&w=0&k=20&c=3tO7WF9cet9kUBOnTwTmbXzuA_KQ7f16Az087kaAHoo=" alt="Header" style={{ width: '100%', height: '100%', marginTop: '-48px' }} /> */}