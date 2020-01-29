import React, { Component } from 'react'

import './CSS/ExternalLinks.css';

import LinkedIn from '../imgs/navPics/linkedin.png'
import GitHub from '../imgs/navPics/github.png'
// import email from '../imgs/navPics/email.png'

export default class ExternalLinks extends Component {
    render() {

        return(
            <div>
                <div className="main_nav_div">
                    <a 
                        href="https://www.linkedin.com/in/danheelim/"
                        target="_blank"
                        rel="noopener noreferrer">
                            <img 
                                className="external_navButtons"src={LinkedIn}
                                alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                    </a>

                    <a
                     href="https://github.com/dlimla"
                     target="_blank"
                     rel="noopener noreferrer">
                         <img 
                            className="external_navButtons"
                            src={GitHub}
                            alt="https://images.app.goo.gl/S8Rj6VwVrQmm6DN96"/>
                    </a>
                </div>
            </div>
        )
    }
}