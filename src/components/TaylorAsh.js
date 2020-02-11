import React, { Component } from 'react'
// import {NavLink} from 'react-router-dom'

import ExternalLinks from './ExternalLinks'

// import './CSS/MainSplash.css'
// import './CSS/Nav.css';
import './CSS/TA.css'
import Nav from './Nav'

import charturn from '../imgs/TA_port/char_turn.JPG'
import life from '../imgs/TA_port/life.JPG'

import reel from '../imgs/TA_port/reel.JPG'
import storyboard from '../imgs/TA_port/storyboard_anim.JPG'

import about from '../imgs/TA_port/about.JPG'
import Summary from '../imgs/TA_port/Summary.JPG'

export default class TaylorAsh extends Component{
    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return(
            <div className="ta_background">
                <ExternalLinks/>

                <div className="ta_main_con">
                    <div className="ta_inner_con">
                        <div className="inq_nav">
                            <Nav/>
                        </div>

                        <div className="div_border">

                            <h2 className="inq_title" data-aos="fade">Taylor Ash Portfolio Site</h2>
                            <div className="inq_links" data-aos="flip-up">
                                <p><a href="http://danheelim.com/ashanimation/"target="blank">Go to Site</a></p>
                                {/* <p><a href="https://github.com/pt3-labs-contractor/PT3Labs_Contractor_FE" target="blank">Visit the GitHub</a></p> */}
                            </div>

                        </div>

                        <div className="a2z_technologies_div">
                            <div>
                                <div className="a2z_tech">
                                    <div className="a2z_top" data-aos="fade-up">
                                    <p>HTML/CSS</p>
                                    <p>Javascript</p>
                                    <p>JQuery</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section_div">
                            <div className="sectionText_div">
                                <div>
                                    <h3>Summary</h3>
                                    <p>This is a simple portfolio website that showcases this artists ability to create character sheets, animatics, as well as his skill sets with particular programs</p>
                                </div>
                                <div>
                                    <h3>Built for</h3>
                                    <p>This project was built in about a week as a freelance project for an artist trying to make it into the animation industry.  The site required a simple flow and the art must be easily seen so a recruiter can glance and gauge his skill level.</p>
                                </div>
                            </div>

                            <div className="img_div">
                                <img src={Summary} alt="Smiley face" height="242" width="442" data-aos="fade-right"/>
                                <img src={about} alt="Smiley face" height="242" width="442" data-aos="fade-left"/>
                            </div>

                        </div>

                        <div>
                            <h4 className="features">Features</h4>

                            <div className="section_div">
                                <div className="sectionText_div">
                                    <div>
                                        <h4>Portfolio Reel</h4>
                                        <p>All projects relevant to the artist is shown on the backround on a loop as you browse his work.</p>
                                    </div>

                                    <div>
                                        <h4>Character Sheets</h4>
                                        <p>Taylor has a large number of work regarding origional characters which he has placed into animatics with turnarounds.</p>
                                    </div>
                                </div>
                                <div className="img_div">
                                    <img src={reel} alt="Smiley face" height="242" width="442" data-aos="fade-right"/>
                                    <img src={charturn} alt="Smiley face" height="242" width="442" data-aos="fade-left"/>
                                </div>

                            </div>

                            <div className="section_div">
                                <div className="sectionText_div">
                                    <div>
                                        <h4>Animatics</h4>
                                        <p>Showcasing his ability to not only storyboard but create animatics to bring life to the story and give a better overall picture on the outlook of the work.</p>
                                    </div>
                                    <div>
                                        <h4>Personal Artwork</h4>
                                        <p>This showcases his abilities outside of world of animation and shows that he dives into other styles of art which increases his skillset and experiences.</p>
                                    </div>
                                </div>
                                <div className="img_div">
                                    <img src={storyboard} alt="Smiley face" height="242" width="442" data-aos="fade-right"/>
                                    <img src={life} alt="Smiley face" height="242" width="442" data-aos="fade-left"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}