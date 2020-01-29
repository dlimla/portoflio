import React, { Component } from 'react'
// import {NavLink} from 'react-router-dom'
import ExternalLinks from './ExternalLinks'

// import './CSS/MainSplash.css'
import Nav from './Nav'
import './CSS/A2Z.css'

import splash from '../imgs/inquirysnaps/splash.JPG'
import splash2 from '../imgs/inquirysnaps/splash2.JPG'

import UserCalander from '../imgs/inquirysnaps/calander.JPG'
import ContrCalander from '../imgs/inquirysnaps/contractorCalender.JPG'


export default class A2Z extends Component{


    render() {
        return(
            <div className="a2z_background">
                <ExternalLinks/>

                <div className="a2z_main_con">
                    <div className="a2z_inner_con">
                        <div className="inq_nav">
                            <Nav/>
                        </div>

                        <div className="div_border">
                            <h2 className="inq_title" data-aos="fade" data-aos-duration="5000">A2Z Experiences</h2>
                            <div className="inq_links" data-aos="flip-up">
                                {/* <p><a href=""target="blank">Go to Site</a></p> */}

                                <p><a
                                    href="https://github.com/a-to-z-experiences-team/build-aToz-FE" target="blank" rel="noopener noreferrer">
                                        Visit the GitHub
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="a2z_technologies_div">
                            <div className="a2z_tech">
                                <div className="a2z_top" data-aos="fade-up">
                                    <p>React</p>
                                    <p>Redux</p>
                                    <p>NodeJS</p>
                                    <p>Express</p>
                                    <p>SQLite Queries</p>
                                    <p>HTML/CSS</p>
                                    <p>GoogleAPI</p>
                                    <p>Heroku</p>
                                </div>
                            </div>
                        </div>

                        <div className="section_div">
                            <div className="sectionText_div">
                                <div data-aos="fade-right">
                                    <h3 >Summary</h3>
                                    <p>A2Z Experiences is a event planning application, where single parents can quickly and safely plan meet ups with other single parents for their children to interact with each other.</p>
                                </div>

                                <div data-aos="fade-left">
                                    <h3>Built by</h3>
                                    <p>This project was built remotely between a team of 5 over the course of 4 weeks.  Work was divided into two teams of two and a single UX/UI member.</p>
                                </div>
                            </div>

                            <div className="img_div">
                                <img src={splash} alt="Smiley face" height="242" width="442" data-aos="fade-right"/>
                                <img src={splash2} alt="Smiley face" height="242" width="442" data-aos="fade-left"/>
                            </div>
                        </div>

                        <div>
                            <h4 className="features">Features</h4>
                            <div className="section_div">
                                <div className="sectionText_div">
                                    <div className="features_div" data-aos="fade-right">
                                        <h4>Easy planning between members</h4>
                                        <p>Search and plan with the local community to plan any meets up for the kids or even for the parents themselves.  This allows the freedom of the member to create an event for their own conviennce</p>
                                    </div>

                                    <div className="features_div" data-aos="fade-left">
                                        <h4>Easy calander interface to create or join an event</h4>
                                        <p>You can see all possible listings in your area to join or even create your own for others to join.</p>
                                    </div>
                                    </div>

                                    <div className="img_div">
                                        <img src={UserCalander} alt="Smiley face" height="242" width="442" data-aos="fade-right"/>
                                        <img src={ContrCalander} alt="Smiley face" height="242" width="442" data-aos="fade-left"/>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        )
    }
}