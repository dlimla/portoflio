import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import './CSS/Nav.css';
import projects from '../imgs/navPics/projects.png'
import profile from '../imgs/navPics/home.png'
import resume from '../imgs/navPics/resume.png'
import actualResume from '../imgs/resume.pdf'


export default class MainSplash extends Component{

    render() {
        return(

                <div className="navDiv">
                    <div className="navButtons">
                        <NavLink to="/">
                            <img src={profile} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                            <h4 className="navTitle">Home</h4>
                        </NavLink>
                    </div>
                    <div className="navButtons">
                        <NavLink to="/projects"  >
                            <img src={projects} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                            <h4 className="navTitle">Work</h4>
                        </NavLink>
                    </div>
                    <div className="navButtons">
                        {/* <NavLink to="/resume" > */}
                        <div>
                            <a
                                href={actualResume}
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={resume} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                                    <h4 className="navTitle">Resume</h4>
                            </a>
                        </div>
                        {/* </NavLink> */}
                    </div>
                </div>

        )
    }
}