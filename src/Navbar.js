import React from "react";
import logoCara from './media/logocara.png';
function Navbar() {
    return (
        <div className="container-fluid p-0 navigation">
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#"><img src={logoCara}></img> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#team-section-anchor">Team</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#sponsors-section">Sponsors</a>
                        </li>


                    </ul>
                </div>
            </div>

        </div>
    )    
}

export default Navbar;