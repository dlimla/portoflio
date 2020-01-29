import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import a2z from '../imgs/projectThumbs/a2zIMG.png'
import inq from '../imgs/projectThumbs/INQ.jpg'
import ta from '../imgs/projectThumbs/TA.jpg'
// import pm from '../imgs/projectThumbs/PETMED.jpg'
// import stone from '../imgs/projectThumbs/stone.jpg'
// import reel from '../imgs/projectThumbs/reel.jpg'

import './CSS/Projects.css';

export default class MainSplash extends Component {
    render() {
        return(
            <div className="displayDiv">
                <div className="cardStyle" data-aos="zoom-out-up">
                    <NavLink to="/inquiry">
                        <div className = "front">
                            <h2>Inquiry</h2>
                            <img className="proj_img" src={inq} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                        </div>
                    </NavLink>
                </div>

                <div className="cardStyle" data-aos="zoom-out-up">
                    <NavLink to="/a2z">
                        <div className = "front">
                            <h2>AtoZ Experiences</h2>
                            <img src={a2z} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                        </div>
                    </NavLink>
                </div>

                <div className="cardStyle" data-aos="zoom-out-up">
                    <NavLink to="taylorAsh">
                        <div className = "front">
                            <h2>Taylor Ash</h2>
                            <img src={ta} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                        </div>
                    </NavLink>
                </div>

                {/* <div className="cardStyle">
                    <NavLink to="petmed">
                        <div className = "front">
                            <h2>PetMed</h2>
                            <img src={pm} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                        </div>
                    </NavLink>
                </div> */}

                {/* <div className="cardStyle" data-aos="zoom-out-up">
                    <div className = "front">
                        <h2>Python MUD</h2>
                        <img src={stone} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                    </div>
                </div> */}

                {/* <div className="cardStyle" data-aos="zoom-out-up">
                    <div className = "front">
                        <h2>Generalist Reel</h2>
                        <img src={reel} alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                    </div>
                </div> */}
            </div>
        )
    }
}