import React, { Component } from 'react'

import './CSS/ExternalLinks.css';

import LinkedIn from '../imgs/navPics/linkedin.png'
import GitHub from '../imgs/navPics/github.png'
import email from '../imgs/navPics/email.png'

export default class ExternalLinks extends Component {

    render() {

        return(
            <div>
                <div className="main_nav_div">
                    <a><img className="external_navButtons"src={LinkedIn}/></a>
                    <a><img className="external_navButtons"src={email}/></a>
                    <a><img className="external_navButtons"src={GitHub}/></a>
                </div>
            </div>
        )
    }
}