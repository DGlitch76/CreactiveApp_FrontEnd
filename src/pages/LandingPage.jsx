import React from 'react';
import { Center } from '@mantine/core';

function LandingPage() {
  return (
    <Center>
      <div style={{ position: 'relative', width: '100%' }}>
        <img src="https://media.istockphoto.com/id/915318946/pt/vetorial/empty-dark-blue-background-with-rays-of-light-sparkles-shining-night-star-sky.jpg?s=612x612&w=0&k=20&c=3tO7WF9cet9kUBOnTwTmbXzuA_KQ7f16Az087kaAHoo=" alt="HeaderImg" style={{ width: '100%', height: '400px',marginTop: '-48px' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '68px',fontWeight: 'bold' }}>Creative Collaboration</h1>
          <p style={{ color: 'white', fontSize: '24px', }}>The next-generation online gallery and proofing platform to boost creative workflows for freelancers and teams.</p>
        </div>
      </div>
    </Center>
  );
}

export default LandingPage;
{/* <img  src="https://media.istockphoto.com/id/915318946/pt/vetorial/empty-dark-blue-background-with-rays-of-light-sparkles-shining-night-star-sky.jpg?s=612x612&w=0&k=20&c=3tO7WF9cet9kUBOnTwTmbXzuA_KQ7f16Az087kaAHoo=" alt="Header" style={{ width: '100%', height: '100%', marginTop: '-48px' }} /> */}