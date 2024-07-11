import React from 'react';
import './Home.css';
import profileImage from '../../assets/profile.jpg'; 

const Home = () => {
  return (
    <div className="home-container" id="home">
        <div className='div-image'>
          <img src={profileImage} alt="Profile" className='image'/>
        </div>
        <div className='div-text'>
          <h2>Hello!, my name is</h2>
          <h1> <span className="highlight">Kirthick</span></h1>
          <p>I'm a Web Developer.</p>
        </div>
    </div>
  );
};

export default Home;
