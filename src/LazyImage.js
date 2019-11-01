import React from 'react';
import defaultImg from './media/default.jpg';

class LazyImage extends React.Component {
    state = {
        showContent: false
    }

    enteredArea = () => {
        this.setState({showContent: true});
    }

    render() {
        return (
            <div>
                <Waypoint
                    onEnter={this.enteredArea}></Waypoint>
                    ((!showContent)? 
                    <LoadingImage></LoadingImage>: null);
            </div>
        );
    }
}

function LoadingImage() {
    return (
        <div className="placeholder">
            <img src={defaultImg} className="card-img-top" />
        </div>
    )
}

export default LoadingImage;