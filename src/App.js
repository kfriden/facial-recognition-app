import React, { Component } from 'react';
import Background from './components/Animations/ParticleBackground';
import Navigation from './components/Navigation/navigation';
import SignIn from './components/SignIn/signIn';
import Register from './components/Register/Register';
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
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }

  }

  displayFaceBox = (box) => {
    this.setState({
      box: box
    });
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  // onButtonSubmit = () => {
  //   this.setState({imageUrl: this.state.input})
  //   app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
  //   .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
  //   .catch(err => console.log(err));
  // }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return(
      <div className="App">
        <Background />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home' 
        ? <div> 
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition box={box} imageUrl={imageUrl}/>
            </div>
        : (
          route === 'signin' ? <SignIn onRouteChange={this.onRouteChange}/>
          : <Register onRouteChange={this.onRouteChange} />
        )

        
            }
      </div>
    );
  }
}

export default App;
