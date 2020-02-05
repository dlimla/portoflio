import React, { Component } from 'react'

import './CSS/MainSplash.css'
import Nav from './Nav'
import Skills from './Skills.js'

import ExternalLinks from './ExternalLinks'
import EMAIL from '../imgs/contact/EMAIL1.png'
import DIVIDER from '../imgs/contact/divider.png'
import profilePic from '../imgs/contact/mainSplashPic.png'

export default class MainSplash extends Component{
    render() {
        return(
            <div className="background">

                <ExternalLinks/>

                <div className="mainCon">
                    <div className="innerCon">
                        <div className="navDiv"  data-aos="fade">
                            <Nav/>
                        </div>

                        <div className="mainSplashInfo" data-aos="zoom-out-up">
                            <div data-aos="fade-right">
                                <img className="mainSplashPic" src={profilePic} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>

                            </div>

                            <div className="mainSplashDivider" data-aos="fade-up">
                                <img src={DIVIDER} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                            </div>

                            <div className="mainSplashInfoText">
                                <h2>Daniel Lim || Full Stack Developer</h2>

                                <p>
                                    Hello there! My name is Daniel and I'm a full stack developer based in Los Angeles.  Ever since I was a kid I was facinated by mods on computer games which allowed people to fully edit their own limitless experiences.
                                </p>

                                <p>
                                    I'm finding that being a full stack developer allows me to constantly create new experiences for people with interactive designs and functionality.
                                </p>

                            </div>
                        </div>
                        <div className="mainSkill_div">
                            <div className="mainSplashSkills">
                                <Skills/>
                            </div>
                        </div>

                        <div className="contactMe_div">
                            <div className="contactME" >
                                <a className="contatme_text" href="mailto:danheelim@gmail.com">
                                    <img src={EMAIL} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                                    <p >Contact Me!</p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}