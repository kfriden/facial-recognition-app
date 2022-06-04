import React, { Component } from 'react';
import Background from './components/Animations/ParticleBackground';
import Navigation from './components/Navigation/navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imagelinkform';
import Rank from './components/Rank/rank';
// import Clarifai from 'clarifai';
import './App.css';

// const app = new Clarifai.App({
//   apiKey: '2faf493c9735436d97d85ceb9b26f88d'
// });


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  // onButtonSubmit = () => {
  //   this.setState({imageUrl: this.state.input})
  //   app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
  //     function(response) {
  //       // console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
  //     },
  //     function(err) {

  //     }
  //   );
  // }
  render() {
    return(
      <div className="App">
        <Background />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        
         
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
