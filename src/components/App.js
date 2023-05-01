import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.jpeg';
import Title from './Title';
import Weather from './Weather';

class App extends Component {
  state = {
    displayBio: false,
  };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <Weather />
        <img src={profile} alt='profile' className='profile' />
        <h1>Hello!</h1>
        <p>My name is Andras.</p>
        <Title /> 
        <p>I am working on learning React JS.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>
                I live in Carrickfergus, and however my favourite programming
                language is C# I started to learn React to extend my knowledge
                to UI and maybe move my carrier to the direction of Full Stack developer.
              </p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    )
  }
}

export default App;