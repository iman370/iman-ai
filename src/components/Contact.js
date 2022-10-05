import React from 'react';
import githubLogo from './images/github-logo.png';
import linkedInLogo from './images/linkedin-logo.png';
import kaggleLogo from './images/kaggle-logo.webp';
import Fade from 'react-reveal/Fade';
//import { Animator, ScrollPage, batch, FadeIn, Move, Sticky } from "react-scroll-motion";

function Contact() {
    return(
    <div className="contacts-container">
      <div className='header'>
        <Fade top>
          <h1>iman-ai<b>.links()</b></h1>
        </Fade>
        <div className='divider' />
      </div>
      <div className='logos-tray'>
        <Fade top>
          <a href="https://github.com/iman370">
            <img className="logos" src={githubLogo} alt="GitHub logo"/>
          </a>
          <div className='divider-width' />
          <a href="https://www.linkedin.com/in/iman-iqbal-7133851b3">
            <img className="logos" src={linkedInLogo} alt="LinkedIn logo"/>
          </a>
          <div className='divider-width' />
          <a href="https://www.kaggle.com/iman1733">
            <img className="logos" src={kaggleLogo} alt="Kaggle logo"/>
          </a>
        </Fade>
      </div>
    </div>
    );
}

export default Contact