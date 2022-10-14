import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Fade from 'react-reveal/Fade';
//import { Animator, ScrollPage, batch, Fade, Move, Sticky } from "react-scroll-motion";

//images
import djangologo from "./images/django-logo.png";
import linuxlogo from "./images/linux-logo.png";
import manjarologo from "./images/manjaro-logo.png";
import pythonlogo from "./images/python-logo.png";
import reactlogo from "./images/react-logo.png";
import restlogo from "./images/rest-logo.webp";
import tensorflowlogo from "./images/tensorflow-logo.png";

function Skills() {;

    const tech_stack = [
        {
            img: pythonlogo,
            title: 'Python',
        },
        {
            img: tensorflowlogo,
            title: 'TensorFlow',
        },
        {
            img: linuxlogo,
            title: 'Linux',
        },
        {
            img: manjarologo,
            title: 'Manjaro (Currently using as a daily driver)',
        },
        {
            img: djangologo,
            title: 'Django',
        },
        {
            img: reactlogo,
            title: 'React.js',
        },
        {
            img: restlogo,
            title: 'REST API',
        },
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
                        <ImageList sx={{ width: 500 }}>
                            {tech_stack.map((item) => (
                                <Fade top>
                                    <ImageListItem key={item.img}>
                                    <img
                                        className="logo"
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={item.title}
                                        position="below"
                                    />
                                    </ImageListItem>
                                </Fade>
                            ))}
                        </ImageList>             
                    </div>
                </div>
            </div>
            </div>
    );
}

export default Skills