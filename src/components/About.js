import React from 'react';
import imanpic from './images/imanpic.png'

//import { Animator, ScrollPage, batch, Fade, Move, Sticky} from "react-scroll-motion";

function About() {

    return (
        <div className="section">
        <div className='about-container'>
            <div id='about-content'>
                <div className='column1'>
                    <div className='divider-smaller-vh' />
                    <img src={imanpic} className="aboutmeImage" alt="Iman in Scotland" />
                    <p>Outside of work, I love to go skateboarding and play video games! My favourite game is Assassins Creed Syndicate. I'm a huge fan of Industrial and Victorian England.</p>
                </div>
                <div className='column2'>
                    <p>Hi, <b>Iman</b> here!</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default About
