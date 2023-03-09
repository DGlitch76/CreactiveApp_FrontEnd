import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { Center } from '@mantine/core';



function LandingPage({ allProjects, setProjects }) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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

  <div>
  <Carousel 
  activeIndex={index} onSelect={handleSelect}
  fade style={{marginTop:0,
  padding:0,
  position:'relative',
  left:0, top:-100,
  minHeight:'100vh'}}>

  <Carousel.Item>
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
  <h1>THIS IS SLIDE TWO</h1>
  <p>Controllers Working</p>
  </div>
    <video
      className="d-block vw-100 vh-100"
      autoPlay="true"
      loop="true"
      src="https://static.vecteezy.com/system/resources/previews/004/827/128/mp4/abstract-motion-digital-background-digital-data-tunnel-made-of-digital-nodes-futuristic-technology-abstract-background-with-lines-for-network-big-data-server-internet-speed-seamless-loop-free-video.mp4"
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

<div className="App container"
style={{
  display: 'flex',
  flexWrap: 'wrap',
  gap:20,
  justifyContent:'center',
  }}>
     

     {allProjects && allProjects.map((project) => (
       <div key={project._id}> 
       <ProjectCard project={project} images={allProjects}/>
     </div>
         ))}
     </div>

    </>);
}

export default LandingPage;
{/* <img  src="https://media.istockphoto.com/id/915318946/pt/vetorial/empty-dark-blue-background-with-rays-of-light-sparkles-shining-night-star-sky.jpg?s=612x612&w=0&k=20&c=3tO7WF9cet9kUBOnTwTmbXzuA_KQ7f16Az087kaAHoo=" alt="Header" style={{ width: '100%', height: '100%', marginTop: '-48px' }} /> */}