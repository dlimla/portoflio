import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import './CSS/MainSplash.css'
import './CSS/Nav.css';
import Nav from './Nav'

export default class TaylorAsh extends Component{


    render() {
        return(
            <div>
                <Nav/>

                <div>
                    <h2>Taylor Ash</h2>
                    <div>
                        <p>LINK</p>
                        <p>GitHub</p>
                    </div>
                </div>

                <div>
                    <h3>Summary</h3>
                    <p>This is a simple portfolio website that showcases this artists ability to create character sheets, animatics, as well as his skill sets with particular programs</p>
                </div>
                <div>
                    <h3>Built by</h3>
                    <p>This project was built in about a week as a freelance web designer</p>
                </div>

                <div>
                    <h4>Features</h4>

                    <div>
                        <h4>Portfolio Reel</h4>
                        <p>All projects relevant to the artist is shown on the backround on a loop as you browse his work.</p>
                    </div>

                    <div>
                        <h4>Character Sheets</h4>
                        <p>Taylor has a large number of work regarding origional characters which he has placed into animatics with turnarounds.</p>
                    </div>

                    <div>
                        <h4>Personal Artwork</h4>
                        <p>This showcases his abilities outside of world of animation and shows that he dives into other styles of art which increases his skillset and experiences.</p>
                    </div>

                </div>

                <div>
                    <h4>Technologies</h4>
                    <div>
                        <p>HTML/CSS</p>
                        <p>Javascript</p>
                        <p>JQuery</p>
                    </div>

                </div>

            </div>
        )
    }
}