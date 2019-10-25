import React from 'react';

class SponsorsArea extends React.Component {
    render() {
        return (
            <div className="sponsors-area">
                <div className="display-1">Sponsors</div>
                <div className="sponsors-container">
                    <img src={process.env.PUBLIC_URL + "logo_natie.png"}></img>
                </div>
            </div>
        );
    }
}

export default SponsorsArea;