import React from 'react';
import logoNatie from './media/logo_natie.png';
import logoLiceu from './media/logo_liceu.png';

class PartenersArea extends React.Component {
    render() {
        return (
            <div id="parteners-section" className="parteners-area">
                <div className="display-1">Parteners</div>
                <div className="parteners-container">
                    <a id="logo-natie" href="https://natieprineducatie.ro/"><img src={logoNatie}></img></a>
                    <a id="logo-liceu" href="http://www.cn-caragiale.ro/"><img src={logoLiceu}></img></a>
                </div>
            </div>
        );
    }
}

export default PartenersArea;