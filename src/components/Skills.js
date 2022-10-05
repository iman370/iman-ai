import React from 'react';
import Fade from 'react-reveal/Fade';
//import { Animator, ScrollPage, batch, Fade, Move, Sticky } from "react-scroll-motion";

function Skills() {;

    const tech_stack = [
        "Python",
        "Tensorflow & Keras",
        "HTML & CSS",
        "React.js",
        "Django",
        "REST API",
        "Java",
        "Linux (using Manjaro as a daily driver)"
    ]

    return(
        <div className="section">
            <div className='skills-container'>
                <div className='header'>
                    <Fade top>
                        <h1>iman-ai<b>.skills()</b></h1>
                    </Fade>
                </div>
                <div className='divider' />
                <div className='skills'>
                    <Fade top>
                        <p>Here are some of the technologies that I've worked with:</p>
                    </Fade>
                    <div className='divider-small' />
                    <div className='technologies'>
                        {tech_stack.map(function (tech_item) {
                        return (
                            <Fade top>
                                <p>⋄ {tech_item}</p>
                            </Fade>
                        );
                        })}                
                    </div>
                </div>
            </div>
            </div>
    );
}

export default Skills