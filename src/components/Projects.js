import React, { Component } from 'react'
import Nav from './Nav'
import ProjectCard from './ProjectsCard'

import ExternalLinks from './ExternalLinks'

import './CSS/Projects.css';
import './CSS/Nav.css';


export default class MainSplash extends Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
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