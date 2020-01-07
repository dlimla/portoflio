import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import a2z from '../imgs/projectThumbs/a2zIMG.png'
import inq from '../imgs/projectThumbs/INQ.jpg'
import pm from '../imgs/projectThumbs/PETMED.jpg'
import ta from '../imgs/projectThumbs/TA.jpg'
import stone from '../imgs/projectThumbs/stone.jpg'
import reel from '../imgs/projectThumbs/reel.jpg'

import projects from '../imgs/navPics/projects.png'
import profile from '../imgs/navPics/about.png'
import resume from '../imgs/navPics/resume.png'
import ExternalLinks from './ExternalLinks'

import './CSS/Projects.css';
import './CSS/Nav.css';


export default class MainSplash extends Component {
    render() {
        return(
            <div className="projects_background">
                <ExternalLinks/>

                <div className="mainContainer">
                    <div className="innerContent">
                        <div className="navDiv">
                            <NavLink to="/" className="navButtons">
                            <img src={profile} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                            </NavLink>
                            <div to="/projects" className="navButtons">
                                {/* <button>Projects</button> */}
                            <img src={projects} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>

                            </div>
                            <NavLink to="/resume" className="navButtons">
                                <img src={resume} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                            </NavLink>
                        </div>

                            <h2 className="title">MY PROJECTS</h2>
                        <div className="displayDiv">

                            <div className="cardStyle">
                                <NavLink to="/inquiry">
                                    <div className = "front">
                                        <h2>Inquiry</h2>
                                        <img className="proj_img" src={inq} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                                    </div>
                                </NavLink>
                            </div>

                            <div className="cardStyle">
                                <NavLink to="/a2z">
                                    <div className = "front">
                                        <h2>AtoZ Experiences</h2>
                                        <img src={a2z} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                                    </div>
                                </NavLink>
                            </div>

                            <div className="cardStyle">
                                <NavLink to="petmed">
                                    <div className = "front">
                                        <h2>PetMed</h2>
                                        <img src={pm} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="cardStyle">
                                <NavLink to="taylorAsh">
                                    <div className = "front">
                                        <h2>Taylor Ash</h2>
                                        <img src={ta} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="cardStyle">
                                <div className = "front">
                                    <h2>Python MUD</h2>
                                    <img src={stone} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                                </div>
                            </div>
                            <div className="cardStyle">
                                <div className = "front">
                                    <h2>Generalist Reel</h2>
                                    <img src={reel} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}