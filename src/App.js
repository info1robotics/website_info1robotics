import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import './scss/home.scss';
import LandingArea from './LandingArea';
import TeamArea from './TeamArea';
import EventsArea from './EventsArea';
import SponsorsArea from './SponsorsArea';

class App extends React.Component {

  

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <LandingArea></LandingArea>
        <TeamArea></TeamArea>
        <SponsorsArea></SponsorsArea>
        
      </div>
    );
  }
}

export default App;
