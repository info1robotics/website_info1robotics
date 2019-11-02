import React from "react";
import ytLogo from "./media/yt_logo.png";
import fbLogo from "./media/fb_logo.png";
import instaLogo from "./media/insta_logo.png";
import gmailLogo from "./media/gmail_logo.png";

class Footer extends React.Component {
    
    render() {
        return(
            <div className="footer-area">
                <div className="separator"></div>
                <a href="https://www.youtube.com/channel/UC6PkNCRNEQOfKuciVltqzTQ"><img border="0" src={ytLogo}></img></a>
                <div className="separator"></div>
                <a href="https://www.facebook.com/info1robotics/"><img border="0" src={fbLogo}></img></a>
                <div className="separator"></div>
                <a href="https://www.instagram.com/info1robotics"><img border="0" src={instaLogo}></img></a>
                <div className="separator"></div>
                <a href="mailto:info1robotics@gmail.com"><img border="0" src={gmailLogo}></img></a>
                <div className="separator"></div>
            </div>
        );
    }
}

export default Footer;

