import React from 'react';
import githubLogo from './images/github-logo.png';
import { Animator, ScrollPage, batch, FadeIn, Move, Sticky } from "react-scroll-motion";

function Contact() {
    return(
    <div className="contacts-container">
        <ScrollPage>
        <Animator animation={batch(FadeIn(), Move(), Sticky())}>
            <div className='header'>
                <h1>iman-ai<b>.links()</b></h1>
              <div className='divider' />
            </div>
            <div className='logos-tray'>
              <a href="https://github.com/iman370">
                <img className="logos" src={githubLogo} alt="GitHub"/>
              </a>
            </div>
        </Animator>
      </ScrollPage>
    </div>
    );
}

export default Contact