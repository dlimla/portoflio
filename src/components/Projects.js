import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'

// import a2z from '../imgs/projectThumbs/a2zIMG.png'
// import inq from '../imgs/projectThumbs/INQ.jpg'
// import pm from '../imgs/projectThumbs/PETMED.jpg'
// import ta from '../imgs/projectThumbs/TA.jpg'
// import stone from '../imgs/projectThumbs/stone.jpg'
// import reel from '../imgs/projectThumbs/reel.jpg'
import Nav from './Nav'
import ProjectCard from './ProjectsCard'

// import projects from '../imgs/navPics/projects.png'
// import profile from '../imgs/navPics/home.png'
// import resume from '../imgs/navPics/resume.png'
import ExternalLinks from './ExternalLinks'
// import actualResume from '../imgs/resume.pdf'

import './CSS/Projects.css';
import './CSS/Nav.css';


export default class MainSplash extends Component {
    render() {
        return(
            <div className="projects_background">
                <ExternalLinks/>

                <div className="mainContainer" >
                    <div className="innerContent">

                        <div className="navDiv"  data-aos="fade">
                            <Nav/>
                        </div>

                        <h2 className="title" data-aos="fade-down">MY WORK</h2>

                        <div className="displayDiv">
                            <ProjectCard/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}