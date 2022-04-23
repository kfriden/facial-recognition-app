import React, { Component } from 'react';
import Background from './components/Animations/ParticleBackground';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imagelinkform';
import Rank from './components/Rank/rank';
import './App.css';


class App extends Component {
  render() {
    return(
      <div className="App">
        <Background />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        
        {/* 
        <FaceRecognition />  */}
      </div>
    );
  }
}

export default App;
