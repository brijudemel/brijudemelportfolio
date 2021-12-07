import React from 'react'
import "./about.css";
import {Typography} from "@mui/material"
import aboutimg from "../../images/about1.jpg"
function About() {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                <img
                    src={aboutimg}
                    alt=""
                    className="a-img"
                />
                </div>
            </div>
            <div className="a-right">
                <Typography variant="h3" component="h3" fontWeight="400">About Me</Typography>
                <Typography variant="subtitle1" className="a-sub">
                    Want to know more about me? Give it a read. It won't take more than a minute &#128521;.
                </Typography>
                <Typography varian="subtitle1" fontWeight="300" className="a-desc">
                    Being in Computer Science I'm always interested in learning new skills, improving my skills and understanding new technologies. The field of 
                    Computer Science has always interested me and made me keep learning new things and try to keep myself updated in this filed.
                     And I am personally so much interested in Web development and Data Analytics.
                        <br/>
                        <br/>
                     I've worked on multiple projects on App/Web development using Nodejs , Python, Reactjs, Nextjs, React Native and with much more technologies.
                        <br/>
                        <br/>
                     I am also developing my skills towards Data Science and gaining more knowledge on working with spreadsheets, SQL, Tableau, and much more.
                     I am also pursuing a course to obtain Google Data Analytics Certificate.
                </Typography>
                {/* <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">International Design Awards 2021</h4>
                    <p className="a-award-desc">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                    and fugit.
                    </p>
                </div>
                </div> */}
            </div>
        </div>
    )
}

export default About
