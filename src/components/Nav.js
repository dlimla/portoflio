import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import './CSS/Nav.css';
import projects from '../imgs/navPics/projects.png'
import profile from '../imgs/navPics/about.png'
import resume from '../imgs/navPics/resume.png'


export default class MainSplash extends Component{

    render() {
        return(

                <div className="navDiv">
                    <NavLink to="/" className="navButtons">
                        <img src={profile} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                    </NavLink>
                    <div className="navButtons">
                        <NavLink to="/projects"  >
                            <img src={projects} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                        </NavLink>
                    </div>
                    <div className="navButtons">
                        <NavLink to="/resume" >
                            <img src={resume} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                        </NavLink>
                    </div>
                </div>

        )
    }
}