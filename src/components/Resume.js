import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {NavLink} from 'react-router-dom'

import './CSS/Resume.css';
import Nav from './Nav'
import ExternalLinks from './ExternalLinks'
// import Skills from './Skills.js'

import JS from '../imgs/technologies/JS.png'
import API from '../imgs/technologies/API.png'
import CSS from '../imgs/technologies/CSS.png'
import HTML from '../imgs/technologies/HTML.png'
import NODEJS from '../imgs/technologies/NODEJS.png'
import REDUX from '../imgs/technologies/REDUX.png'
import REACT from '../imgs/technologies/REACT.png'
import REACTHOOKS from '../imgs/technologies/REACTHOOKS.png'
import DATASTRUC from '../imgs/technologies/DATASTRUC.png'
import DJG from '../imgs/technologies/DJG.png'
import PYTHON from '../imgs/technologies/PYTHON.png'
import SQL from '../imgs/technologies/SQL.png'
import EXPRESS from '../imgs/technologies/EXPRESS.png'
import TEST from '../imgs/technologies/TEST.png'
import NTF from '../imgs/technologies/NOTFN.png'

import EMAIL from '../imgs/contact/EMAIL.png'
import GITHUB from '../imgs/contact/GITHUB.png'
import LINKENIN from '../imgs/contact/LINKENIN.png'
import LOCATION from '../imgs/contact/LOCATION.png'
import PHONE from '../imgs/contact/PHONE.png'
import WEBSITE from '../imgs/contact/WEBSITE.png'



export default class Resume extends Component {
    constructor(props){
        super(props);
        this.state = {
            tech: [
                {name: 'Javascript', pic:JS},
                {name: 'React', pic:REACT},
                {name: 'React Hooks', pic:REACTHOOKS},
                {name: 'Redux', pic:REDUX},
                {name: 'Python', pic:PYTHON},
                {name: 'RESTful API', pic:API},
                {name: "Data Structure", pic:DATASTRUC},
                {name: 'Express', pic:EXPRESS},
                {name: 'NodeJS', pic:NODEJS},
                {name: 'Django', pic:DJG},
                {name: 'Testing', pic:TEST},
                {name: 'SQL', pic:SQL},
                {name: 'HTML', pic:HTML},
                {name: 'CSS', pic:CSS},
            ],

            contact1: [
                {link:'danheelim @gmail.com', pic:EMAIL},
                {link:'Los Angeles', pic:LOCATION},
                {link:'(213) 500-4646', pic:PHONE},
            ]

        }
    }
    render() {

        return(
            <div className="resume_background">

                <ExternalLinks/>

                <div className="resume_main_con">
                    <div className="resume_inner_con">
                        <div  data-aos="fade">
                            <Nav/>
                        </div>
                        <div className="outter_div" data-aos="fade-up" data-aos-duration="1000">
                            <div className="main_div">

                                <h2 className="contact_me_title"  data-aos="fade-up" data-aos-duration="1200">Contact Me</h2>

                                <div className="media_div_contact"  data-aos="fade-up" data-aos-duration="1400">
                                    <div className="contact_div">
                                        {this.state.contact1.map((contact) =>
                                            <div class="flip-card">
                                                <div class="flip-card-inner">

                                                    <div class="flip-card-front">
                                                        <img alt={NTF} src={contact.pic}/>
                                                    </div>
                                                    <div class="flip-card-back">
                                                        <p>{contact.link}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img  alt={NTF} src={LINKENIN}/>
                                                </div>
                                                <div class="flip-card-back">
                                                    <a 
                                                        className="contact_cardback_link"
                                                        href="https://www.linkedin.com/in/danheelim/" 
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                            LinkedIn
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img  alt={NTF} src={GITHUB}/>
                                                </div>
                                                <div class="flip-card-back">
                                                    <a
                                                        className="contact_cardback_link"
                                                        href="https://github.com/dlimla" 
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                            GitHub
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img  alt={NTF} src={WEBSITE}/>
                                                </div>
                                                <div class="flip-card-back">
                                                    <NavLink to="/">
                                                        <a
                                                            className="contact_cardback_link"
                                                            href="https://github.com/dlimla"
                                                            target="_blank"
                                                            rel="noopener noreferrer">
                                                                Website
                                                        </a>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="hidden_media_contact_list">
                                    <p>danheelim@gmail.com</p>
                                    <p>Los Angeles</p>
                                    <p>(213) 500-4646</p>
                                    <p><a href="https://www.linkedin.com/in/danheelim/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                                    <p><a href="https://github.com/dlimla" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                                    <p><a href="https://github.com/dlimla" target="_blank" rel="noopener noreferrer">Website</a></p>
                                </div>

                                <h2 className="skills_title" data-aos="fade-up" data-aos-duration="1500">Skills</h2>

                                <div className="skills_div"  data-aos="fade-up" data-aos-duration="1700">

                                        {this.state.tech.map((tech) =>
                                            <div className="main_skill_media_list">
                                                <Flippy
                                                className="flip_card"
                                                    flipOnHover={true}
                                                    flipOnClick={false}
                                                    flipDirection="horizontal"
                                                    >
                                                    <FrontSide className="cardFront">
                                                        <img className="skillimgSize" alt={NTF} src={tech.pic}/>
                                                    </FrontSide>
                                                    <BackSide className="cardBack">
                                                        <p className="back_card_p">{tech.name}</p>
                                                    </BackSide>
                                                </Flippy>
                                            </div>
                                        )}

                                    <div className="hidden_meda_skill_list">
                                        {this.state.tech.map((tech) =>
                                            <div>
                                                <p className="back_card_p">{tech.name}</p>
                                            </div>
                                        )}
                                    </div>

                                </div>
                                <div className="work_edu_exp_div">
                                    <div className="edu_div">
                                            <h2>Education</h2>
                                        <div className="sectioned_div">
                                            <h4>Computer Science and Web Development</h4>
                                            <p>Lambda School</p>
                                            <p>08/2018 - present</p>
                                            <ul className="ul_list">
                                                <li>Lambda is a 18+ months Computer Science and Software Engineering Academy that provides an immersive hands-on curriculum with a focus on computer science, software engineering, and web development</li>
                                                <li>Wrote production-ready code using ReactJS, Redux, and HTML/CSS for the front end/UI.  While using NodeJS and Express for the backend server side. </li>
                                                <li>Using the above technologies to create fully immersive single page applications.</li>
                                                <li>Utilized agile software development and Git workflow on all projects</li>
                                                <li>Gained hands-on experience with client and server testing spanning multiple projects.</li>
                                            </ul>
                                        </div>
                                        <div >
                                            <h4>Bachelor of Science - Animation</h4>
                                            <p>Art Institute of California - Hollywood</p>
                                            <p>08/2011-12/2013</p>
                                            <ul className="ul_list">
                                                <li>Gained the knowledge and techincal skills in regards to the entire animation pipeline.</li>
                                                <li>Built production level assets and animation pieces</li>
                                                <li>Gained hands-on experience in regards to internships and the standard production pipeline</li>
                                            </ul>
                                        </div>

                                            <h2>Work Experience</h2>
                                        <div className="sectioned_div">
                                            <div>
                                                <h4>Department Head of Paint (01/2016-present)</h4>
                                                <p>DIY Home Center</p>
                                                <ul className="ul_list">
                                                    <li>Managed paint department staff</li>
                                                    <li>Kept upkeep on relivent technologices requried by the department. (e.g: Calibrated color matching software, color tint dispenser is kept clean and filled when needed)</li>
                                                    <li>Maintained inventory.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4>PetMed (11/2017)</h4>
                                                <p>Freelance Contract</p>
                                                <ul className="ul_list">
                                                    <li>PetMed is a database website which allows owners to keep a digital copy of every medical record of their pets without the need to carry a physical copy.</li>
                                                    <li>Scripted the database validation for both clients and veternarians</li>
                                                    <li>Streamlined data retreival for all RESTful end points</li>
                                                    <li>Designed in part the main landing page as well as personalized the profiles of clients and vets.</li>
                                                    <li>Tech: Ruby on Rails, Postgress, GoogleAPI, HTML, CSS, AWS</li>
                                                    <li>Application: <a href="http://petmedmd.com">PetMed</a></li>
                                                    <li>GitHub: <a href="https://github.com/RandallSnout/PetMed">PetMed</a></li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h4>Portfolio Website for Taylor Ash (07/2017)</h4>
                                                <p>Freelance Contract</p>
                                                <ul className="ul_list">
                                                    <li>A portfolio site to fully showcase his abilities as a 2D animator and storyboard artist</li>
                                                    <li>Shows his reel, animated storyboards, turnarounds of origional characters, along with his software proficiencies, and his personal art</li>
                                                    <li>Tech: HTML/CSS, Javascript, JQuery</li>
                                                    <li>Application: <a href="http://danheelim.com/ashanimation/">Taylor Ash</a></li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h4>3D Generalist (08/2013 - 08/2015)</h4>
                                                <p>Freelance Contract</p>
                                                <ul className="ul_list">
                                                    <li>Storyboarded, animated the character Medic, and modeled asssets for an entire short as well as multiple episodes which, unfortunately, were never release</li>
                                                    <li>Tech: Autodesk Maya, Photoshop, Mental Ray, Unreal Engine</li>
                                                    <li>Animated Short: <a href="h ttps://www.youtube.com/watch?v=BiPfEqEPlPU ">Cl4p VS Tr4p</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

        {/* ================================================================== */}

                                    <div className="rightDiv">
                                            <h2>Personal Projects</h2>
                                        <div className="sectioned_div">
                                            <div>
                                                <h4>Island Adventure(11/2019)</h4>
                                                <ul className="ul_list">
                                                    <li>Island Adventure is a single player dungeon crawler that focuses on timing and item gathering</li>
                                                    <li>
                                                        Was responsible for movement of the player and map layout based of point location on room data
                                                    </li>
                                                    <li>Created an auto move function that allowed the player to move to different locations on the map taking the "cooldown" effect into consideration</li>
                                                    <li>Part of a remote team of 4 taking around 2 weeks to build.</li>
                                                    <li>Tech: React - Graphs - Algorithms - Netlify - Python - React Hooks - useReducer</li>
                                                    <li>Application: </li>
                                                    <li>GitHub: </li>
                                                </ul>
                                            </div>


                                            <div>
                                                <h4>Lambda MUD(09/2019)</h4>
                                                <ul className="ul_list">
                                                    <li>LambdaMUD is a single player dungeon crawler that allows users to navigate a maze and interact with their enviorment</li>
                                                    <li>Was responsible for majority of the FrontEnd and handled most of the main splash page(Login/Register) and display of the created world</li>
                                                    <li>Part of a remote team of 2 taking around 2 weeks to build.</li>
                                                    <li>Tech: React - React Hooks - Django - Pusher - SQLite - Style Components</li>
                                                    <li>Application:</li>
                                                    <li>GitHub: </li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h4>Inquiry (05/2019 - 08/2019) </h4>
                                                <ul className="ul_list">
                                                    <li>A scheduling application that allows users to seemlessly schedule and set up appointments with a local contractor in regards to any work that needs to be done around the house.</li>
                                                    <li>Was responsible for the front end portion of the project that developed the client's ability to edit their own information.  Also gave the option for a user to give feedback to a contractor and allowing the contractor to view it. </li>
                                                    <li>Part of a remote team of 6 completing the project in a 10 week time period</li>
                                                    <li>Tech: React - Redux - React Hooks - NodeJS - Postgres - Stripe - Netilfy - Heroku - Javascript - HTML/CSS + Styled Components - GoogleAPI </li>
                                                    <li>Application:
                                                            <a href="https://affectionate-almeida-c22cb1.netlify.com/"
                                                            target="blank"> Inquiry
                                                            </a>
                                                    </li>
                                                    <li>GitHub:
                                                        <a href="https://github.com/pt3-labs-contractor/PT3Labs_Contractor_FE"
                                                         target="blank"> Inquiry
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4>AtoZ Experiences (04/2019 - 05/2019)</h4>
                                                    <ul className="ul_list">
                                                        <li>An application that allows stay at home parents to connect locally with each other and safely plan events for their young ones.</li>
                                                        <li>Was responsible for the entire backend server side of the project</li>
                                                        <li>Part of a remote team of 5 people taking around 4 weeks</li>
                                                        <li>Tech: React/Redux - HTML/CSS + styled Components - Express - Node - SQLite - GoogleAPI</li>
                                                        <li>Application:</li>
                                                        <li>GitHub</li>
                                                    </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}