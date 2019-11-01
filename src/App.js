import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import './scss/home.scss';
import LandingArea from './LandingArea';
import TeamArea from './TeamArea';
import EventsArea from './EventsArea';
import SponsorsArea from './SponsorsArea';
import { Waypoint } from 'react-waypoint';
import { animateScroll as scroll } from "react-scroll";
import Footer from './Footer';

class App extends React.Component {

  state = {
    showUpBtn: false,
  }
  onTeamAreaEntered = () => {
    console.log("show");
    this.setState({showUpBtn: true});
  }

  onLandingAreaEntered = () => {

    console.log("not show");
    this.setState({ showUpBtn: false });
  }

  onUpBtnClicked = () => {
    scroll.scrollToTop();

  }
  render() {
    return (
      <div>
        <Waypoint onEnter={this.onLandingAreaEntered}></Waypoint>
        <Navbar></Navbar>
        <LandingArea></LandingArea>
        <TeamArea onEnter={this.onTeamAreaEntered}></TeamArea>
        <SponsorsArea></SponsorsArea>
        <Footer></Footer>

        {(this.state.showUpBtn ? <input type="image" className="upbtn" onClick={this.onUpBtnClicked} src={process.env.PUBLIC_URL + "upbtn.svg"}></input> : null )}
      </div>
    );
  }
}

export default App;
