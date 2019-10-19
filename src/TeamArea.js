import React from 'react';

class TeamArea extends React.Component {

    state = {
        teamMembers: [
            {
                imgName: "iulia.jpeg",
                name: "Stanciu Iulia-Cristina",
                description: 'Team leader of the 3D Design team. Silver medalist at Romanian National Olympics in Astronomy and Astrophysics. ++(Custom clothing painter)'
            },
            {
                imgName: "",
                name: "Mihalcea-Simoniu Agatha",
                description: ""
            },
            {
                imgName: "",
                name: "Raicu Ana",
                description: ""
            },
            {
                imgName: "",
                name: "Avram Rares Stefan",
                description: ""
            },
            {
                imgName: "",
                name: "Bobo",
                description: ""
            },
            {
                imgName: "",
                name: "Cîrnici David",
                description: ""
            },
            {
                imgName: "",
                name: "Rosu Delia",
                description: ""
            },
            {
                imgName: "",
                name: "Dumitru Horia",
                description: ""
            },
            {
                imgName: "",
                name: "Andronache Madalina",
                description: ""
            },
            {
                imgName: "",
                name: "Sandulescu Alexandru Nicolae",
                description: ""
            },
            {
                imgName: "",
                name: "Georgescu Sebastian Andrei",
                description: ""
            },
            {
                imgName: "",
                name: "Staicu Matei",
                description: ""
            },
            {
                imgName: "",
                name: "Marussi",
                description: ""
            },
            {
                imgName: "",
                name: "Soare Stefan",
                description: ""
            },
            {
                imgName: "",
                name: "Delia",
                description: ""
            },

        ],
        teamMembersHTML: [

        ]
    }

    componentDidMount() {
        var result = [];
        for(var i of this.state.teamMembers) {
            var card = (
                <div className="member-card-col col-lg-4 col-md-6 col-offset-2 mt-2 pb-3">
                    <div className="card">
                        <img src={process.env.PUBLIC_URL + i.imgName} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title text-center">{i.name}</h5>
                            <p className="card-text text-center">{i.description}</p>
                        </div>
                    </div>
                </div>
            );
            result.push(card);
        }
        this.setState({ teamMembersHTML: result });

    }

    render() {
        return (
            <div className="team-area container-fluid pl-lg-5 pr-lg-5">
                <div className="row">
                    <div id="team-section" className="col display-1 text-center">
                        Our Team
                </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <p>We are the infO(1)Robotics Team – RO 140 / 15993 - from “Ion Luca Caragiale” High -
                        School, Ploiesti, Romania. Our team started its actions on April 2018, and it is
                        coordinated by our main mentor Daniela Lica, a computer – programming teacher.
                        Our team is composed of 15 members and 3 volunteers and each of them is currently
                        working in the STEM fields with extracurricular activities which fit their sub-teams.
                        Our team started with no budget and has been gradually building up its financial
                        resources.
                </p>
                    </div>
                    <div className="col-md-6">
                        <p>infO(1)Robotics is currently participating at FIRST Tech Challenge and expects to
                        develop a greater knowledge for the future’s main goal: Robots and Artificial
                        Intelligence.
                        We combine work and pleasure, we always train hard but in an enjoyable way. By
                        sharing opinions and learning about team work, we believe we can get creative
                        enough to someday find a revolutionary and feasible idea of a robot that could
                    unbelievably save humanity in its own way.</p>
                    </div>
                </div>
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
                <div className="row mt-4 justify-content-center m-3">
                    {this.state.teamMembersHTML}
                </div>
            </div>
        );
    }
}

export default TeamArea;