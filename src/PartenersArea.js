import React from 'react';
import logoNatie from './media/logo_natie.png';

class PartenersArea extends React.Component {
    render() {
        return (
            <div id="parteners-section" className="parteners-area">
                <div className="display-1">Parteners</div>
                <div className="parteners-container">
                    <a href="https://natieprineducatie.ro/"><img src={logoNatie}></img></a>
                </div>
            </div>
        );
    }
}

export default PartenersArea;