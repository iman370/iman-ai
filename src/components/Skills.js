import React from 'react';
import { Animator, ScrollPage, batch, Fade, Move, Sticky} from "react-scroll-motion";

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
        <ScrollPage>
        <div className="section">
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <div className='skills-container'>
                <div className='header'>
                    <h1>iman-ai<b>.skills()</b></h1>
                </div>
                <div className='divider' />
                <div className='skills'>
                    <p>Here are some of the technologies that I've worked with:</p>
                    <div className='divider-small' />
                    <div className='technologies'>
                        {tech_stack.map(function (tech_item) {
                        return (
                            <p>⋄ {tech_item}</p>
                        );
                        })}                
                    </div>
                </div>
            </div>
          </Animator>
          </div>
        </ScrollPage>
    );
}

export default Skills