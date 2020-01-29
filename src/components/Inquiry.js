import React, { Component } from 'react'
import ExternalLinks from './ExternalLinks'

// import './CSS/MainSplash.css'
import './CSS/Inquiry.css';
import Nav from './Nav'

import splash from '../imgs/inquirysnaps/splash.JPG'
import splash2 from '../imgs/inquirysnaps/splash2.JPG'

import UserCalander from '../imgs/inquirysnaps/calander.JPG'
import ContrCalander from '../imgs/inquirysnaps/contractorCalender.JPG'

import userFeed from '../imgs/inquirysnaps/feedbackUser.JPG'
// import contrFeed from '../imgs/inquirysnaps/contractorRating.JPG'

// import member1 from '../imgs/inquirysnaps/subscription.JPG'
import member2 from '../imgs/inquirysnaps/subscription2.JPG'


export default class MainSplash extends Component{


    render() {
        return(
            <div className="inq_background">

                <ExternalLinks/>

                <div className="inq_main_con">

                    <div className= "inq_inner_con">

                        <div className="inq_nav">
                            <Nav/>
                        </div>

                        <div className="div_border">
                            <h2 className="inq_title" data-aos="fade">INQUIRY</h2>
                            <div className="inq_links" data-aos="flip-up">
                                <p><a href="https://affectionate-almeida-c22cb1.netlify.com/"target="blank">Go to Site</a></p>
                                <p><a href="https://github.com/pt3-labs-contractor/PT3Labs_Contractor_FE" target="blank">Visit the GitHub</a></p>
                            </div>
                        </div>

                        <div className="technologies_div">
                            <div>
                                <div className="tech">
                                    <div className="top" data-aos="fade-up">
                                        <p>React</p>
                                        <p>Redux</p>
                                        <p>NodeJS</p>
                                        <p>Express</p>
                                        <p>Postgres</p>
                                    </div>
                                    <div className="bottom" data-aos="fade-down">
                                        <p>Netlify</p>
                                        <p>Heroku</p>
                                        <p>PassportJS</p>
                                        <p>StripeJS</p>
                                        <p>Twilio</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section_div">
                            <div className="sectionText_div">
                                <div data-aos="fade-right" data-aos-duration="2000">
                                    <h3>Summary</h3>
                                    <p>Inquiry is a scheudling application in where a user and contractor can quickly and easily schedule an appointment.  This takes out the guess work in reliable contractors and scheduling conflicts.</p>
                                </div>

                                <div data-aos="fade-left" data-aos-duration="2000">
                                    <h3>Built by</h3>
                                    <p>This project was built remotely between a team of 6 over the course of 10 weeks.  Work was divided into teams of two to tackle different aspects of the project in a more seemless fashion.</p>
                                </div>
                            </div>

                            <div className="img_div">
                                <img src={splash} alt="Smiley face" height="242" width="442" data-aos="fade-right"/>
                                <img src={splash2} alt="Smiley face" height="242" width="442" data-aos="fade-left"/>
                            </div>
                        </div>

                        <div>
                            <h4 className="features">Features</h4>
                                <div className="section_div">
                                    <div className="sectionText_div">
                                        <div className="features_div" data-aos="fade-right" data-aos-duration="2000">
                                            <h4>Easy way to schedule</h4>
                                            <p>Search and schedule local contractors for any job needed around a house or jobsite.  You can even specify the job requirements before a call is even made and you can cancel at any time</p>
                                        </div>

                                        <div className="features_div"  data-aos="fade-left">
                                            <h4>Access to a custom calander</h4>
                                            <p>See all scheduled appointments as either a contractor or client to keep track of all jobs and time listings.  Can edit any change in plans quickly, seemlessly, with live feedback to the user and contractor.</p>
                                        </div>
                                    </div>

                                    <div className="img_div">
                                        <img src={UserCalander} alt="Smiley face" height="242" width="442" data-aos="fade-right" />
                                        <img src={ContrCalander} alt="Smiley face" height="242" width="442" data-aos="fade-left"/>
                                    </div>
                                </div>

                                <div className="sectionText_div">
                                    <div className="features_div">
                                        <h4>Leave feedback of a contractor</h4>
                                        <p>This feature allows users to give star ratings as well as comments in regards to the contractors performance to the job.  A contractor can also search their feedback and know in real time how satisfied or dissatisfied the customer was.</p>
                                    </div>

                                    <div className="features_div">
                                        <h4>Become a memeber</h4>
                                        <p>Members has access to unlimited scheduling hours which as a passive user only has access to 5 per week.  Autopay is featured so a member doesn't have to keep track of when to pay and can cancel at any time.</p>
                                    </div>
                                </div>

                                <div className="img_div">
                                    <img src={userFeed} alt="Smiley face" height="242" width="442" data-aos="fade-right"/>
                                    <img src={member2} alt="Smiley face" height="242" width="442" data-aos="fade-left"/>
                                    {/* <img src={contrFeed} alt="Smiley face" height="242" width="442" data-aos="fade-left"/> */}
                                </div>

                                {/* <div className="sectionText_div">
                                </div> */}

                                {/* <div className="img_div">
                                    <img src={member1} alt="Smiley face" height="242" width="442" data-aos="fade-right"/>
                                </div> */}

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}