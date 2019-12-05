import React, { Component } from 'react'

import './CSS/Nav.css';
import './CSS/Resume.css';
import Nav from './Nav'

export default class Resume extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.isLoaded();
    }

    isLoaded() {
        this.setState({
            loaded:true
        })
    }
    render() {
        if (!this.state.loaded) {
            return <div/>
        }
        return(
            <div>
                <Nav/>

                <div>
                    PDF OF RESUME
                </div>

                <div className="outter_div">
                    <div className="main_div">
                        <div className="my_desc_div">
                            <p>
                                A Full Stack Web/Software Developer with 4+ years working as a contractual website designer and 3D Generalist.
                            </p>
                            <p>
                                An Additional 4+ years as a department head for the DIY Home Center.  Managing employee work ethic and communicating with vendors to have relevent items to sell.
                            </p>
                        </div>
                        <div className="contact_div">
                            <p>Email</p>
                            <p>Location</p>
                            <p>Phone</p>
                            <p>LinkedIn</p>
                            <p>GitHub</p>
                            <p>Website</p>
                        </div>

                        <div className="skills_div">
                            <h2>Skills</h2>
                            <p>Javascript</p>
                            <p>React</p>
                            <p>Redux</p>
                            <p>React Hooks</p>
                            <p>NodeJS</p>
                            <p>Python</p>
                            <p>RESTful API</p>
                            <p>Express</p>
                            <p>Django</p>
                            <p>Python</p>
                            <p>Testing</p>
                            <p>HTML/CSS</p>
                        </div>

                        <div className="work_edu_exp_div">
                            <div className="edu_div">
                            <h2>Education</h2>
                                <div>
                                    <h4>Computer Science and Web Development</h4>
                                    <p>Lambda School</p>
                                    <p>08/2018 - present</p>
                                    <ul>
                                        <li>Lambda is a 18+ months Computer Science and Software Engineering Academy that provides an immersive hands-on curriculum with a focus on computer science, software engineering, and web development</li>
                                        <li>Wrote production-ready code using ReactJS, Redux, and HTML/CSS for the front end/UI.  While using NodeJS and Express for the backend server side. </li>
                                        <li>Using the above technologies to create fully immersive single page applications.</li>
                                        <li>Utilized agile software development and Git workflow on all projects</li>
                                        <li>Gained hands-on experience with client and server testing spanning multiple projects.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>Bachelor of Science - Animation</h4>
                                    <p>Art Institute of California - Hollywood</p>
                                    <p>08/2011-12/2013</p>
                                    <ul>
                                        <li>Gained the knowledge and techincal skills in regards to the entire animation pipeline.</li>
                                        <li>Built production level assets and animation pieces</li>
                                        <li>Gained hands-on experience in regards to internships and the standard production pipeline</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2>Work Experience</h2>
                                    <div>
                                        <h4>Department Head of Paint (01/2016-present)</h4>
                                        <p>DIY Home Center</p>
                                        <ul>
                                            <li>Managed paint department staff</li>
                                            <li>Kept upkeep on relivent technologices requried by the department. (e.g: Calibrated color matching software, color tint dispenser is kept clean filled when needed)</li>
                                            <li>Maintained inventory.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4>PetMed (11/2017)</h4>
                                        <p>Freelance Contract</p>
                                        <ul>
                                            <li>PetMed is a database website which allows owners to keep a digital copy of every medical record of their pets without the need to carry a physical copy.</li>
                                            <li>Scripted the database validation for both clients and veternarians</li>
                                            <li>Streamlined data retreival for all RESTful end points</li>
                                            <li>Designed in part the main landing page as well as personalized the profiles of clients and vets.</li>
                                            <li>Tech: Ruby on Rails, Postgress, GoogleAPI, HTML, CSS, AWS</li>
                                            <li>Application: <a href="http://petmedmd.com">PetMed</a></li>
                                            <li>GitHub: <a href="https://github.com/RandallSnout/PetMed">https://github.com/RandallSnout/PetMed</a></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4>Portfolio Website for Taylor Ash (07/2017)</h4>
                                        <p>Freelance Contract</p>
                                        <ul>
                                            <li>A portfolio site to fully showcase his abilities as a 2D animator and storyboard artist</li>
                                            <li>Shows his reel, animated storyboards, turnarounds of origional characters, along with his software proficiencies, and his personal art</li>
                                            <li>Tech: HTML/CSS, Javascript, JQuery</li>
                                            <li>Application: <a href="http://danheelim.com/ashanimation/">Taylor Ash</a></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4>3D Generalist (08/2013 - 08/2015)</h4>
                                        <p>Freelance Contract</p>
                                        <ul>
                                            <li>Storyboarded, animated the character Medic, and modeled asssets for an entire short as well as multiple episodes which, unfortunately, were never release</li>
                                            <li>Tech: Autodesk Maya, Photoshop, Mental Ray, Unreal Engine</li>
                                            <li>Animated Short: <a href="h ttps://www.youtube.com/watch?v=BiPfEqEPlPU ">Cl4p VS Tr4p</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* =========================== */}
                            <div className="rightDiv">
                                <div>
                                    <h2>Personal Projects</h2>
                                    <div>
                                        <h4>Lambda MUD(09/2019)</h4>
                                        <ul>
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
                                        <ul>
                                            <li>A scheduling application that allows users to seemlessly schedule and set up appointments with a local contractor in regards to any work that needs to be done around the house.</li>
                                            <li>Was responsible for the front end portion of the project that handled the client side of the website.</li>
                                            <li>Part of a remote team of 6 completing the project in a 10 week time period</li>
                                            <li>Tech: React - Redux - React Hooks - NodeJS - Postgres - Stripe - Netilfy - Heroku - Javascript - HTML/CSS + Styled Components - GoogleAPI </li>
                                            <li>Application: </li>
                                            <li>GitHub:</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4>AtoZ Experiences (04/2019 - 05/2019)</h4>
                                            <ul>
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
        )
    }
}