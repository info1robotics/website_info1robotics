import React from 'react';
import yaml from 'js-yaml';
import fs from 'fs';


class EventsArea extends React.Component {

    state = {
        pastEvents: []
    }

    componentDidMount() {
        /*try {
            for (var i = 0; i < doc.pastEvents.length; i++) {
                let card = (
                    <div className="card">
                        <div className="card-header" id={"heading" + i.toString()}>
                            <div className="row justify-content-center">
                            </div>
                            <div className="row justify-content-center">
                                <h2 className="mb-0"> <button className="btn btn-link text-center" type="button" data-toggle="collapse" data-target={"#collapse" + i} aria-expanded="true" aria-controls={"collapse" + i}> {doc.pastEvents[i].title} </button> </h2>
                            </div>
                        </div>
                        <div id={"collapse" + i} className="collapse show" aria-labelledby={"heading" + i} data-parent="#pastEventsAccordion">
                            <div className="card-body">
                                {doc.pastEvents[i].desc} </div>
                        </div>
                    </div>
                );
                this.pastEvents.push(card);
            }
        } catch (e) {
            console.log(e);
        }*/
        
        
    }
    render() {
        return (
            <div id="events-area" className="events-area container-fluid p-0">
                <div className="past-events">
                    <div className="row">
                        <div id="team-section" className="col display-1 text-center">
                            Past Events </div>
                    </div>
                    <div className="row m-0">
                        <div className="accordion m-0 mt-4" id="pastEventsAccordion">
                            {this.state.pastEvents}
                        </div>
                    </div>
                </div>


                <div className="upcoming-events pb-4">
                    <div className="row">
                        <div id="team-section" className="col display-1 text-center">
                            Upcoming Events
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="accordion m-0 mt-4" id="accordionExample1">
                            <div className="card">
                                <div className="card-header" id="headingSix">
                                    <div className="row justify-content-center">
                                        <h2 className="mb-0"> <button className="btn btn-link text-center" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix"> Evenimentul Never Ever Risking Failing (N. E. R. F.) </button> </h2>
                                    </div>
                                </div>
                                <div id="collapseSix" className="collapse show" aria-labelledby="headingSix" data-parent="#accordionExample1">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventsArea;