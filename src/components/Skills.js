import React from 'react';

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
    );
}

export default Skills