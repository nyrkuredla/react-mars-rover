import React from 'react';
import Jumbotron from '../components/Jumbotron';
import PhotoInfo from './PhotoInfo'


const Home = (props) => {
  return (
    <div className="container">
      <Jumbotron />
      <PhotoInfo />
    </div>
  )
}

export default Home;
