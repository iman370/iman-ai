import React from 'react';
import imanpic from './images/imanpic.png'
import Fade from 'react-reveal/Fade';

//import { Animator, ScrollPage, batch, Fade, Move, Sticky} from "react-scroll-motion";

function About() {

    return (
        <div className="section">
        <div className='about-container'>
            <div id='about-content'>
                <div className='column1'>
                    <div className='divider-smallest-vh' />
                    <Fade top>
                        <img src={imanpic} className="aboutmeImage" alt="Iman in Scotland" />
                    </Fade>
                    <div className='divider-smallest-vh' />
                    <Fade top>
                        <p>Outside of work, I love to go skateboarding and play video games! My favourite game is Assassins Creed Syndicate. I'm a huge fan of Industrial and Victorian England.</p>
                    </Fade>
                </div>
                <div className='column2'>
                    <div className='header'>
                        <Fade top>
                            <h1>iman-ai<b>.about()</b></h1>
                        </Fade>
                    </div>
                    <Fade top>
                        <div className='divider-smaller-vh' />
                        <p>Hi 👋🏽 <b>Iman</b> here!</p>
                        <div className='divider-smaller-vh' />
                        <p>I'm a final year <b>Computer Science</b> student studying a Bachelors at the <b>University of Birmingham</b>.</p>
                        <div className='divider-smaller-vh' />
                        <p>I'm interested in Software Engineering, Full-Stack Development (mainly back-end development) and most importantly, Artificial Intelligence and Machine Learning.</p>
                        <div className='divider-smaller-vh' />
                        <p>I regularly check Twitter and read up on recent news articles so that I can keenly follow the advancements made in AI.</p>
                        <div className='divider-smaller-vh' />
                        <p>I have a passion for learning new skills and technologies. I'm currently learning about Natural Language Processing as well as how to use AWS (Amazon Web Services).</p>
                    </Fade>
                </div>
            </div>
        </div>
        </div>
    );
}

export default About
