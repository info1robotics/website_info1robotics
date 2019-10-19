import React from "react";


class LandingArea extends React.Component { 
    componentDidMount = async () => {

        String.prototype.replaceAt = function (index, replacement) {
            return this.substr(0, index) + replacement + this.substr(index + replacement.length);
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function genNumbers(text) {
            var res = [], sel = new Map();
            var num = "";
            for (var i = 0; i < text.length; i++) {
                if (text.charAt(i) === " ") {
                    num += " ";
                    continue;
                }
                if (Math.random() > 0.5) {
                    num += "1";
                } else {
                    num += "0";
                }
            }

            res.push(num);

            while (sel.size !== num.length) {
                if (i >= num.length) {
                    i = 0;
                }
                if (num.charAt(i) === "0" || num.charAt(i) === "1" || num.charAt(i) === " ") {
                    if (Math.random() > 0.95) {
                        num = num.replaceAt(i, text.charAt(i));
                        res.push(num);
                        sel.set(i, true);
                    }
                }
                i++;
            }
            return res;
        }

        var landingTitle = this.refs.landingTitle;
        let finalText = "THIS IS INFO(1) ROBOTICS";

        let words = genNumbers(finalText);

        for (var i = 0; i < words.length; i++) {
            landingTitle.innerText = words[i];
            await sleep(50);
        }
        landingTitle.innerText = finalText;



    }
    render() {
        return (
            <div className="landing-area container-fluid">
                <video autoPlay muted loop id="vid-background">
                    <source src="../resources/vid.mp4" type="video/mp4" />
                </video>
                <div id="vid-background-dark" />
                <div className="cont">
                    <div id="landingTitle" className="main-title" ref="landingTitle">.</div>
                    <p className="slogan">something something</p>
                </div>
            </div>
        );
    }
}

export default LandingArea;

