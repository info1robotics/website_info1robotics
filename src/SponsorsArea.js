import React from 'react';

class SponsorsArea extends React.Component {
    render() {
        return (

            <div className="sponsors-area container-fluid">
                <div className="row">
                    <div id="sponsors-section" className="col display-1 text-center">
                        Our Sponsors
                    </div>
                </div>
                <div className="row align-content-center mt-4">
                    <div id="sponsorsCarousel" className="col carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active text-center">
                                <img src="https://via.placeholder.com/1920x1920" alt="First slide"></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h4>Beautiful sponsor</h4>
                                    <p>Thx for all chips</p>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <img src="https://via.placeholder.com/1920x1920" alt="First slide"></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h4>Beautiful sponsor</h4>
                                    <p>Thx for all chips</p>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <img src="https://via.placeholder.com/1920x1920" alt="First slide"></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h4>Beautiful sponsor</h4>
                                    <p>Thx for all chips</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#sponsorsCarousel" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a>
                        <a className="carousel-control-next" href="#sponsorsCarousel" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SponsorsArea;