import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import './CSS/MainSplash.css'
import './CSS/Nav.css';
import Nav from './Nav'

export default class MainSplash extends Component{


    render() {
        return(
            <div>
                <Nav/>

                <div>
                    <h2>INQUIRY</h2>
                    <div>
                        <p>LINK</p>
                        <p>GitHub</p>
                    </div>
                </div>

                <div>
                    <h3>Summary</h3>
                    <p>Inquiry is a scheudling application in where a user and contractor can quickly and easily schedule an appointment.  This takes out the guess work in reliable contractors and the back and forth between scheduling conflicts.</p>
                </div>
                <div>
                    <h3>Built by</h3>
                    <p>This project was built remotely between a team of 6 over the course of 10 weeks.  Work was divided into teams of two to tackle different aspects of the project in a more seemless fashion.</p>


                </div>

                <div>
                    <h4>Features</h4>

                    <div>
                        <h4>Easy schedule an appointment with a local contractor</h4>
                        <p>Search and schedule local contractors for any job needed around a house or jobsite.  You can even specify the job requirements before a call is even made and you can cancel at any time</p>
                    </div>

                    <div>
                        <h4>Access to a custom calander</h4>
                        <p>See all scheduled appointments as either a contractor or client to keep track of all jobs and time listings</p>
                    </div>

                    <div>
                        <h4>Can leave feedback of a contractor</h4>
                        <p>This feature allows users to give star ratings as well as comments in regards to the contractors performance to the job.  A contractor can also search their feedback and know in real time how satisfied or dissatisfied the customer was.</p>
                    </div>


                    <div>
                        <h4>Become a memeber</h4>
                        <p>Members has access to unlimited scheduling hours which as a passive user only has access to 5 per week.  Autopay is featured so a member doesn't have to keep track of when to pay and can cancel at any time.</p>
                    </div>
                </div>

                <div>
                    <h4>Technologies</h4>
                    <div>
                        <p>React</p>
                        <p>Redux</p>
                        <p>NodeJS</p>
                        <p>Express</p>
                        <p>Postgres RDBMS</p>
                        <p>SASS</p>
                        <p>No Styling Libraries</p>
                        <p>Netlify</p>
                        <p>Heroku</p>
                        <p>PassportJS</p>
                        <p>StripeJS</p>
                        <p>Twilio</p>
                    </div>

                </div>

            </div>
        )
    }
}