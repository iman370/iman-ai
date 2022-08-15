import React from 'react';

import { Animator, ScrollPage, batch, Fade, Sticky} from "react-scroll-motion";

function About() {

    return (
        <ScrollPage>
        <div className="section">
          <Animator animation={batch(Fade(), Sticky())}>
          <div className='about-container'>
            <div className='header'>
                <h1>iman-ai<b>.about()</b></h1>
            </div>
            <div className='divider' />
            <div className='about-me'>
                <p>Hi, <b>Iman</b> here!</p>
                <div className='divider-small' />
                <p>I am currently a third year student studying a bachelors in <b>Computer Science</b> at the <b>University of Birmingham</b>.</p>
                <p>I am heavily interested in software engineering, full-stack development (mainly back-end development) and AI/ML.</p>
                <div className='divider-small' />
                <p>Outside of work, I love to spend my time skateboarding or playing video games.</p>
            </div>
        </div>
          </Animator>
          </div>
        </ScrollPage>
    );
}

export default About