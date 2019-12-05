import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

// import './CSS/MainSplash.css'
// import './CSS/Nav.css';
// import './CSS/Projects.css'

import projects from '../imgs/navPics/projects.png'
import profile from '../imgs/navPics/about.png'
import resume from '../imgs/navPics/resume.png'

// import Nav from './components/Nav'


export default class MainSplash extends Component{
    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render() {
        return(
            <div className="mainCon">
                <div className="innerCon">
                    <h2>Daniel Lim</h2>
                    <h2>Web/Software Developer</h2>
                    <p>Dependable . Practical . Resourceful</p>

                    {this.state.on &&(
                        <div>
                            <div>PICTURE</div>
                            <p>
                                A Full Stack Web/Software Developer with 2+ years working as a contractual website designer and 3D Generalist.
                            </p>
                            <p>
                                An Additional 4+ years as a department head for the DIY Home Center.  Managing employee work ethic and communicating with vendors to have relevent items to sell.
                            </p>
                        </div>
                    )}
                    <div className="navDiv">
                        <div className="navButtons">
                            <img onClick={this.toggle}  src={profile} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                        </div>
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
                </div>
            </div>
        )
    }
}