import React from "react";
import logoCara from './media/logocara.png';
function Navbar() {
    return (
        <div className="navbar">
            <img className="navbar-logo" src={logoCara}></img>
            <a className="navbar-link" href="#team-section-anchor">Team</a>
            <a className="navbar-link" href="#sponsors-section">Sponsors</a>
        </div>
//#   #
    )     
}

export default Navbar;