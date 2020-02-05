import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import './CSS/Resume.css';


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
import LOCATION from '../imgs/contact/LOCATION.png'
import PHONE from '../imgs/contact/PHONE.png'

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
                <div className="main_div">

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
                </div>
            </div>
        )
    }
}