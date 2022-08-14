import React from 'react';

function Skills() {;

    return(
        <div className='skills-container'>
            <div className='header'>
                <h1>iman-ai.skills()</h1>
            </div>
            <div className='divider' />
            <div className='skills'>
                <p>Here are some of the technologies that I've worked with:</p>
                <div className='technologies'>
                    <div className='column1'>
                        <p>- Python</p>
                        <p>- TensorFlow and Keras</p>
                    </div>
                    <div className='column2'>
                        <p>- HTML, CSS and JavaScript</p>
                        <p>- React, Django and REST API</p>
                    </div>
                    <div className='column3'>
                        <p>- Java</p>
                    </div>                    
                </div>
            </div>
        </div>
    );
}

export default Skills