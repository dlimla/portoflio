import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import './CSS/MainSplash.css'
import './CSS/Nav.css';
import Nav from './Nav'

export default class A2Z extends Component{


    render() {
        return(
            <div>
                <Nav/>

                <div>
                    <h2>A2Z Experiences</h2>
                    <div>
                        <p>LINK</p>
                        <p>GitHub</p>
                    </div>
                </div>

                <div>
                    <h3>Summary</h3>
                    <p>A2Z Experiences is a event planning application, where single parents can quickly and safely plan meet ups with other single parents for their children to interact with each other.</p>
                </div>
                <div>
                    <h3>Built by</h3>
                    <p>This project was built remotely between a team of 5 over the course of 4 weeks.  Work was divided into two teams of two and a single UX/UI member.</p>


                </div>

                <div>
                    <h4>Features</h4>

                    <div>
                        <h4>Easy planning between members</h4>
                        <p>Search and plan with the local community to plan any meets up for the kids or even for the parents themselves.  This allows the freedom of the member to create an event for their own conviennce</p>
                    </div>

                    <div>
                        <h4>Easy calander interface to create or join an event</h4>
                        <p>You can see all possible listings in your area to join or even create your own for others to join.</p>
                    </div>

                </div>

                <div>
                    <h4>Technologies</h4>
                    <div>
                        <p>React</p>
                        <p>Redux</p>
                        <p>NodeJS</p>
                        <p>Express</p>
                        <p>SQLite Queries</p>
                        <p>CSS + Style compoennts</p>
                        <p>GoogleAPI</p>
                        <p>Heroku</p>
                    </div>

                </div>

            </div>
        )
    }
}