import React from 'react';
import logoNatie from './media/logo_natie.png';
class SponsorsArea extends React.Component {
    render() {
        return (
            <div className="sponsors-area">
                <div className="display-1">Sponsors</div>
                <div className="sponsors-container">
                    <img src={logoNatie}></img>
                </div>
            </div>
        );
    }
}

export default SponsorsArea;