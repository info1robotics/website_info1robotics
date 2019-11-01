import React from 'react';
import defaultImg from './media/default.jpg';
import spinnerImg from './media/spinner.gif';
import { Waypoint } from 'react-waypoint';

class LazyImage extends React.Component {

    state = {
        reachedArea: false,
        imageStyle: {height: "0", width: "0"},
        spinnerStyle: {marginBottom: "-600px"},
    }

    enteredArea = () => {
        this.setState({reachedArea: true});
    }

    imageLoaded = () => {
        this.setState({
            imageStyle: {},
            spinnerStyle: { height: "0", width: "0" }
        })
    }

    render() {
        return (
            <div>
                <Waypoint onEnter={this.enteredArea}></Waypoint>
                {this.state.reachedArea? <img src={this.props.src} onLoad={this.imageLoaded} className="card-img-top" style={this.state.imageStyle} /> : null}
                <LoadingSpinner style={this.state.spinnerStyle}></LoadingSpinner>
            </div>
        );
    }
}


function LoadingSpinner(props) {
    return (
        <img src={spinnerImg} style={props.style} className="card-img-top" />
    )}

export default LazyImage;