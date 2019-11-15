import React from 'react';
import logoNatie from './media/logo_natie.png';
import logoCrisco from './media/crisco_logo.jpeg';

class SponsorsArea extends React.Component {
    render() {
        return (
            <div id="sponsors-section" className="sponsors-area">
                <div className="display-1">Sponsors</div>
                <div className="sponsors-container-kilo">
                    <div className="sponsors-class">
                        Kilo
                    </div>
                    <div className="sponsors-separator"></div>
                    <div className="sponsors-logos">
                        <a href="http://crisco.ro/"><img src={logoCrisco}></img></a>
                    </div>
                </div>
                <a href="mailto:info1robotics@gmail.com" className="become-sponsor">Want to become a sponsor? Contact us!</a>
            </div>
        );
    }
}

export default SponsorsArea;