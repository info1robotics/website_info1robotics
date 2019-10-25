import React from 'react';
import { Waypoint } from 'react-waypoint';
import defaultImg from './media/default.jpeg';
import agathaImg from './media/agatha.jpg';
import anaImg from './media/ana.jpeg';
import boboImg from './media/bobo.jpeg';
import deliaImg from './media/delia.jpeg';
import horiaImg from './media/horia.JPG';
import iuliaImg from './media/iulia.jpeg';
import luminitaImg from './media/luminita.jpg';
import madaImg from './media/mada.jpeg';
import raresImg from './media/rares.JPG';
import razvanImg from './media/razvan.jpeg';
import sebyImg from './media/seby.jpeg';
import soareImg from './media/soare.jpeg';
import tudorImg from './media/tudor.jpg';

class TeamArea extends React.Component {

    state = {
        teamMembers: [
            {
                img: iuliaImg,
                name: "Iulia Stanciu",
                description: ""
            },
            {
                img: agathaImg,
                name: "Agatha Mihalcea",
                description: ""
            },
            {
                img: anaImg,
                name: "Ana Raicu",
                description: ""
            },
            {
                img: raresImg,
                name: "Rares Avram",
                description: ""
            },
            {
                img: boboImg,
                name: "Vlad Stefanescu",
                description: ""
            },
            {
                img: null,
                name: "David Cirnici",
                description: ""
            },
            {
                img: deliaImg,
                name: "Delia Rosu",
                description: ""
            },
            {
                img: horiaImg,
                name: "Horia Dumitru",
                description: ""
            },
            {
                img: madaImg,
                name: "Madalina Andronache",
                description: ""
            },
            {
                img: null,
                name: "Alexandru Sandulescu",
                description: ""
            },
            {
                img: sebyImg,
                name: "Sebastian Georgescu",
                description: ""
            },
            {
                img: null,
                name: "Matei Staicu",
                description: ""
            },
            {
                img: null,
                name: "Matei Marussi",
                description: ""
            },
            {
                img: soareImg,
                name: "Stefan Soare",
                description: ""
            },
            {
                img: razvanImg,
                name: "Razvan Toma",
                description: ""
            }

        ],
        teamMentors: [
            {
                img: null,
                name: "Dana Lica",
                description: ""
            },
            {
                img: tudorImg,
                name: "Tudor Avram",
                description: ""
            },
            {
                img: luminitaImg,
                name: "Luminita Avram",
                description: ""
            },
        ],
        teamMembersHTML: [

        ],
        teamMentorsHTML: [

        ]
    }

    componentDidMount() {
        var result1 = [];
        for(var i of this.state.teamMembers) {
            var source = defaultImg;
            if(i.img !== null) source = i.img;
            var card = (
                <div className="member-card-col col-lg-4 col-md-6 col-offset-2 mt-2 pb-3">
                    <div className="card">
                        <img src={source} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title text-center">{i.name}</h5>
                            <p className="card-text text-center">{i.description}</p>
                        </div>
                    </div>
                </div>
            );
            result1.push(card);
        }
        var result2 = [];
        for (var i of this.state.teamMentors) {

            var card = (
                <div className="member-card-col col-lg-4 col-md-6 col-offset-2 mt-2 pb-3">
                    <div className="card-member">
                        <img src={(i.img !== null) ? i.img : defaultImg} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title text-center">{i.name}</h5>
                            <p className="card-text text-center">{i.description}</p>
                        </div>
                    </div>
                </div>
            );
            result2.push(card);
        }
        this.setState({ teamMembersHTML: result1 , teamMentorsHTML: result2});

    }

    enteredArea = () => {
        this.props.onEnter();
    }

    render() {
        return (
            <div className="team-area container-fluid pl-lg-5 pr-lg-5">
                <div className="row">
                    <a id="team-section-anchor"></a>
                    <div id="team-section" className="col display-1 text-center">
                        Team
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <p>We are the infO(1)Robotics Team – RO 140 - from “Ion Luca Caragiale” High -
                        School, Ploiesti, Romania. Our team started its actions on April 2018, and it is
                        coordinated by our main mentor Daniela Lica, a Computer – Programming teacher.
                        Our team is composed of 15 members and 36 volunteers and each of them is currently
                        working in the STEM fields with extracurricular activities which fit their sub-teams.
                        Our team started with no budget and has been gradually building up its financial
                        resources.
                </p>
                    </div>
                    <div className="col-md-6">
                        <p>infO(1)Robotics is currently participating for the second time at FIRST Tech Challenge and expects to
                        consolidate the knowledge accumulated over the course of the first year. At the Regionals competition, we were awarded with the 2<sup>nd</sup> place of Inspire Award, but also with the title of the 2<sup>nd</sup> pick in the Winning Alliance. We qualified as the 3<sup>rd</sup> team to the National Stage at which we won the 2<sup>nd</sup> place of the Control Award.
                        </p>
                    </div>
                </div>
                <div className="row-mt-4">
                    <p>
                        We combine work and pleasure, we always train hard but in an enjoyable way. By
                        sharing opinions and learning about team work, we believe we can get creative
                        enough to someday find a revolutionary and feasible idea of a robot that could
                    unbelievably save humanity in its own way.</p>
                </div>


                <Waypoint
                    onEnter={this.enteredArea}></Waypoint>
                <div className="row justify-content-center mt-4">
                    <img id="big-img" className="responsive-img-h" src="https://scontent-otp1-1.cdninstagram.com/vp/abefd2c716da6c7c052f3b3bb82fcc6b/5E398BA5/t51.2885-15/sh0.08/e35/s640x640/52818309_1113481905520234_3358653585660069194_n.jpg?_nc_ht=scontent-otp1-1.cdninstagram.com&_nc_cat=110 640w,https://scontent-otp1-1.cdninstagram.com/vp/2997baf02802987f4b927ec09373e58a/5E176161/t51.2885-15/sh0.08/e35/s750x750/52818309_1113481905520234_3358653585660069194_n.jpg?_nc_ht=scontent-otp1-1.cdninstagram.com&_nc_cat=110 750w,https://scontent-otp1-1.cdninstagram.com/vp/cabee04b94469911c90353a14dc8d171/5E383A1F/t51.2885-15/e35/52818309_1113481905520234_3358653585660069194_n.jpg?_nc_ht=scontent-otp1-1.cdninstagram.com&_nc_cat=110 1080w" />
                </div>
                <div className="row mt-4">
                    <div className="col">
                        “infO(1)Robotics” Team started as a group of students having the same desires,
                        wishes and expectations in relation to the core and foundations of FTC and of
                        robotics as a whole field of mind and soul.
                        Our opinion regarding FTC is that it represents a perfect way for each and every one
                        of us to display and develop their skills in a competitive and educative environment
                        that FTC offers towards its outlines, management and Gracious Professionalism.
                        Our whole experience in FTC revolves around this core value of the competition
                        because we sure believe that adopting such an attitude is a great way for us not only
                        to perform better during FTC, but also to realize that we may become better people
                and colleagues, no matter the context or situation.</div>
                </div>
                <div className="display-1 text-center mt-4">Members</div>
                <div className="row mt-4 justify-content-center m-3">
                    {this.state.teamMembersHTML}
                </div>

                <div className="display-1 text-center mt-4">Mentors</div>
                <div className="row mt-4 justify-content-center m-3">
                    {this.state.teamMentorsHTML}
                </div>
            </div>
        );
    }
}

export default TeamArea;