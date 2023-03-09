import '../index.css'

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { Center } from '@mantine/core';



function LandingPage({ allProjects, setProjects }) {

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

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
        // activeIndex={index} onSelect={handleSelect}
        fade style={{
          marginTop: 0,
          padding: 0,
          position: 'relative',
          left: 0, top: -100,
          minHeight: '100vh'
        }}>

        <Carousel.Item>
          <div style={{
            position: 'absolute',
            left: 0, top: 0,
            width: '100vw',
            height: '100vh',
            margin: 'auto',
            padding:30,
            zIndex: 10,
            display: 'flex',
            columnWidth: '100vw',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
          }}>
            <h1 style={{fontSize:50, textAlign:'center'}}>MULTI PLATFORM PORTFOLIO</h1>
            <h4 style={{textAlign:'center'}}>
              Share all your projects throughout the network when posting them with just one click
              </h4>
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
            position: 'absolute',
            left: 0, top: 0,
            width: '100vw',
            height: '100vh',
            margin: 'auto',
            padding:30,
            zIndex: 10,
            display: 'flex',
            columnWidth: '100vw',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
          }}>
            <h1 style={{fontSize:50, textAlign:'center'}}>CONNECT EVERYTHING</h1>
            <h4>Share on Instagram, Twitter, LinkedIn and more with One Click.</h4>
          </div>
          <video
            className="d-block vw-100 vh-100"
            autoPlay="true"
            loop="true"
            src="https://static.videezy.com/system/resources/previews/000/052/821/original/security-lock-social-media-icon-digital-paticle-motion.mp4"
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
            position: 'absolute',
            left: 0, top: 0,
            width: '100vw',
            height: '100vh',
            margin: 'auto',
            padding:30,
            zIndex: 10,
            display: 'flex',
            columnWidth: '100vw',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
          }}>
            <h1 style={{fontSize:50, textAlign:'center'}}>CREATIVE WORKFLOW</h1>
            <h4>Manage Projects, Clients and Teams with Asana, Ziflow & Slack API's</h4>
          </div>
          <video
            className="d-block vw-100 vh-100"
            autoPlay="true"
            loop="true"
            src="https://static.videezy.com/system/resources/previews/000/054/379/original/Network_Connection_Background.mp4"
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

    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,
        justifyContent: 'center',
        marginBottom: 100
      }}>


      {allProjects && allProjects.map((project) => (
        <>
          <ProjectCard project={project} images={allProjects} />
        </>
      ))}
    </div>

  </>);
}

export default LandingPage;
{/* <img  src="https://media.istockphoto.com/id/915318946/pt/vetorial/empty-dark-blue-background-with-rays-of-light-sparkles-shining-night-star-sky.jpg?s=612x612&w=0&k=20&c=3tO7WF9cet9kUBOnTwTmbXzuA_KQ7f16Az087kaAHoo=" alt="Header" style={{ width: '100%', height: '100%', marginTop: '-48px' }} /> */ }