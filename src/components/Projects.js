import React from 'react';
import Fade from 'react-reveal/Fade';
//import { Animator, ScrollPage, batch, FadeIn, Move, Sticky } from "react-scroll-motion";
import ProjectsCard from './ProjectsCard';

function Projects() {

  const project_stack = [
    {
      title: 'Social Media Website',
      desc: 'This is a twitter-like social media website where you can also host and join events.',
      type: 'Full-Stack',
      languages: 'Django, React.js, REST API',
      link: 'N/A',
      githubLink: 'https://github.com/iman370/klabber',
    },
    {
      title: 'tic-tac-toe',
      desc: 'An AI that plays tic-tac-toe using the minimax algorithm.',
      type: 'AI',
      languages: 'React.js, javascript',
      link: '../tictactoe',
      githubLink: 'https://github.com/iman370/iman-ai/tree/main/src/projects/tictactoe',
    },
    {
      title: 'Live Digit Recogniser',
      desc: 'Draw a number and let the website guess the number!',
      type: 'Machine Learning',
      languages: 'React.js, javascript',
      link: '../digit-recogniser',
      githubLink: 'https://github.com/iman370/iman-ai/tree/main/src/projects/LiveDigitRecogniser',
    },
    {
      title: 'Tutoring Website',
      desc: 'Commissioned to make a personal website for a friend so that he can advertise his tutoring business.',
      type: 'Front-end Development',
      languages: 'React.js, javascript',
      link: 'https://ghufran.vercel.app',
      githubLink: 'https://github.com/iman370/ghufran-tutoring/tree/main/ghufran',
    },
    {
      title: 'Cat and Dog Image Classifier',
      desc: 'Using a convolutional neural network to classify images of cats and dogs.',
      type: 'Machine Learning',
      languages: 'Tensorflow, keras',
      link: 'https://colab.research.google.com/drive/1TcI-iIH7O9mSr3-lEgcjvNF9tAAs4LDX?usp=sharing',
      githubLink: 'https://github.com/iman370/FCC-ML-with-python/tree/main/Projects',
    },
    {
      title: 'Book Recommendation using KNN',
      desc: 'Uses K-Nearest Neighbours to recommend books that are similar to the given book.',
      type: 'Machine Learning',
      languages: 'scikit-learn, pandas',
      link: 'https://colab.research.google.com/drive/1Shs7fQQDav5nhUpQ7AMwUBjSEiM48iVJ?usp=sharing',
      githubLink: 'https://github.com/iman370/FCC-ML-with-python/tree/main/Projects',
    },
    {
      title: 'Health Costs Calculator using Linear Regression',
      desc: 'Uses Linear Regression to predict healthcare costs of different people.',
      type: 'Machine Learning',
      languages: 'Tensorflow, keras, pandas',
      link: 'https://colab.research.google.com/drive/1cJhYNmL2vRwwvaM4L5nctsUYk0gMnNt8?usp=sharing',
      githubLink: 'https://github.com/iman370/FCC-ML-with-python/tree/main/Projects',
    },
    {
      title: 'Neural Network SMS Classifier',
      desc: 'Uses Neural Networks and NLP to classify whether a text message is spam.',
      type: 'Machine Learning, NLP',
      languages: 'Tensorflow, keras, pandas',
      link: 'https://colab.research.google.com/drive/1x5jd2pliPuutha7SsmJn0haVti-59-t_?usp=sharing',
      githubLink: 'https://github.com/iman370/FCC-ML-with-python/tree/main/Projects',
    },
    {
      title: 'Stroke Prediction',
      desc: 'Predicts whether a user has or has not had a stroke.',
      type: 'Machine Learning',
      languages: 'Tensorflow, scikit-learn, pandas',
      link: 'N/A',
      githubLink: 'https://github.com/iman370/ML-Projects/tree/main/StrokePrediction',
    },
  ]

  return(
    <div className="projects-container">
      <div className='header'>
        <Fade top>
          <h1>iman-ai<b>.projects()</b></h1>
        </Fade>
        <div className='divider' />
      </div>
      <div className="project-stack">
        {project_stack.map(function (project){
          return(
            <Fade top>
              <ProjectsCard
              title={project.title}
              desc={project.desc}
              type={project.type}
              languages={project.languages}
              link={project.link}
              githubLink={project.githubLink} />
            </Fade>
          )
        })}
      </div>
    </div>
  );
}

export default Projects
