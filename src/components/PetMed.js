import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import './CSS/MainSplash.css'
import './CSS/Nav.css';
import Nav from './Nav'

export default class PetMed extends Component{


    render() {
        return(
            <div>
                <Nav/>

                <div>
                    <h2>PetMed</h2>
                    <div>
                        <p>LINK</p>
                        <p>GitHub</p>
                    </div>
                </div>

                <div>
                    <h3>Summary</h3>
                    <p>PetMed is an online service which allows both clients and vetenarians keeps a record of all relevent medical information regarding the animals.  This allows clients to keep an updated record of their pet's medical information on hand.  Which is generally required for any service such as grooming or pet motels.</p>
                </div>
                <div>
                    <h3>Built by</h3>
                    <p>This project was built remotely between a team of 3 over the course of 2 weeks. Work was divided equally between with all members handing both sides of the front end and back end.</p>


                </div>

                <div>
                    <h4>Features</h4>

                    <div>
                        <h4>Easy set up and record keeping</h4>
                        <p>Personalized profiles lets you keep track of all your pets and relevant medical information.</p>
                    </div>

                    <div>
                        <h4>Find local vets and clinics without fumbling around</h4>
                        <p>Utilizing GoogleAPI with maps and locations we can easily find any number of local vets and clinics that would suit your current needs.</p>
                    </div>

                    <div>
                        <h4>Information on the vetentarian</h4>
                        <p>This allows you to quickly search up a vetenarian you might have questions about.  Everything that is relevant from track record, career years, and how long they have been with a particular clinic.  No more guess work and wondering if this vet is good for your pet.</p>
                    </div>

                </div>

                <div>
                    <h4>Technologies</h4>
                    <div>
                        <p>Ruby</p>
                        <p>Rails</p>
                        <p>PostGress</p>
                        <p>Express</p>
                        <p>AWS</p>
                        <p>CSS + Style compoennts</p>
                        <p>GoogleAPI</p>
                    </div>

                </div>

            </div>
        )
    }
}