import React, { Component } from 'react'
// import {NavLink} from 'react-router-dom'
import ExternalLinks from './ExternalLinks'

import './CSS/MainSplash.css'
import './CSS/PetMed.css'
import './CSS/Nav.css';
import Nav from './Nav'

import one from '../imgs/petMedsnaps/1.JPG'
import two from '../imgs/petMedsnaps/2.JPG'
import three from '../imgs/petMedsnaps/3.JPG'
import four from '../imgs/petMedsnaps/4.JPG'
import five from '../imgs/petMedsnaps/5.JPG'
import six from '../imgs/petMedsnaps/6.JPG'

export default class PetMed extends Component{

    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return(
            <div>
                <div className="pet_background">
                    <ExternalLinks/>

                    <div className="pet_main_con">
                        <div className="pet_inner_con">
                            <div>
                                <Nav/>
                            </div>

                            <div className="div_border">
                                <h2 className="inq_title" data-aos="fade">Pet Med</h2>
                                <div className="inq_links" data-aos="flip-up">
                                    <p><a href="http://petmedmd.com"target="blank">Go to Site</a></p>
                                    <p><a href="https://github.com/RandallSnout/PetMed" target="blank" rel="noopener noreferrer">Visit the GitHub</a></p>
                                </div>
                            </div>

                            <div className="a2z_technologies_div">
                                <div className="a2z_tech">
                                    <div className="a2z_top" data-aos="fade-up">
                                        <p>Ruby</p>
                                        <p>Rails</p>
                                        <p>PostGress</p>
                                        <p>Express</p>
                                        <p>AWS</p>
                                        <p>CSS + Style compoennts</p>
                                        <p>GoogleAPI</p>
                                    </div>
                                </div>
                            </div>

                            <div className="section_div">
                                <div className="sectionText_div">
                                    <div>
                                        <h3>Summary</h3>
                                        <p>PetMed is an online service which allows both clients and vetenarians keeps a record of all relevent medical information regarding the animals.  This allows clients to keep an updated record of their pet's medical information on hand.  Which is generally required for any service such as grooming or pet motels.</p>
                                    </div>
                                    <div>
                                        <h3>Built by</h3>
                                        <p>This project was built remotely between a team of 3 over the course of 2 weeks. Work was divided equally between with all members handing both sides of the front end and back end.</p>
                                    </div>
                                </div>

                                <div className="img_div">
                                    <img src={one} alt="Smiley face" height="242" width="442" data-aos="fade-right"/>
                                    <img src={two} alt="Smiley face" height="242" width="442" data-aos="fade-left"/>
                                </div>
                            </div>

                            <div>
                                <h4 className="features">Features</h4>

                                <div className="section_div">
                                    <div className="sectionText_div">
                                        <div className="features_div">
                                            <h4>Easy set up and record keeping</h4>
                                            <p>Personalized profiles lets you keep track of all your pets and relevant medical information to each pet and their specific needs.</p>
                                            <img src={three} alt="Smiley face" height="242" width="442" data-aos="fade-right"/>
                                        </div>
                                    <div className="features_div">
                                            <h4>Personalized Veternarian profiles.</h4>
                                            <p>Keep track of all your clients and in turn all their pets and all relivent data.</p>
                                            <img src={four} alt="Smiley face" height="242" width="442" data-aos="fade-left"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="section_div">
                                    <div className="sectionText_div">
                                        <div className="features_div">
                                            <h4>Moblie Friendly</h4>
                                            <p>No longer need to carry a large binder of paperwork. Just simply load the app.</p>
                                            <img src={six} alt="Smiley face" height="242" width="442" data-aos="fade-right"/>
                                        </div>

                                        <div className="features_div">
                                            <h4>Find local vets and clinics without fumbling around</h4>
                                            <p>Utilizing GoogleAPI with maps and locations we can easily find any number of local vets and clinics that would suit your current needs.</p>
                                            <img src={five} alt="Smiley face" height="242" width="442" data-aos="fade-left"/>
                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>


                <div>
                    <div>
                    </div>

                    <div>
                    </div>

                    <div>
                    </div>

                </div>

            </div>
        )
    }
}