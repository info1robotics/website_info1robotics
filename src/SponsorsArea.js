import React from 'react';
import logoNatie from './media/logo_natie.png';
import logoCrisco from './media/crisco_logo.jpeg';

class SponsorsArea extends React.Component {
    render() {
        return (
            <div id="sponsors-section" className="sponsors-area">
                <div className="display-1">Sponsors</div>
                <div className="sponsors-container">
                    <a href="http://crisco.ro/"><img src={logoCrisco}></img></a>
                </div>
            </div>
        );
    }
}

export default SponsorsArea;