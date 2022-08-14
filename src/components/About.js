import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

function About() {

    return (
        <AnimatePresence exitBeforeEnter>
        <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
        viewport={{once:false}}
        >
            <div className='header'>
                <h1>iman-ai.about()</h1>
            </div>
            <div className='divider' />
            <div className='about-me'>
                <p>Hi, <b>Iman</b> here!</p>
                <div className='divider-small' />
                <p>I am currently a third year student studying a bachelors in <b>Computer Science</b> at the <b>University of Birmingham</b>.</p>
                <p>I am heavily interested in software engineering, full-stack development (mainly back-end development) and AI/ML.</p>
                <div className='divider-small' />
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
                <div className='divider-small' />
                <p>Outside of work, I love to spend my time skateboarding or playing video games.</p>
            </div>
        </motion.div>
        </AnimatePresence>
    );
}

export default About