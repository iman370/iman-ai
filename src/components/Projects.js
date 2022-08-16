import React from 'react';
//import { Animator, ScrollPage, batch, FadeIn, Move, Sticky } from "react-scroll-motion";
import ProjectsCard from './ProjectsCard';

function Projects() {

  const project_stack = [
    {
      title: 'klabber',
      desc: 'This is a twitter-like social media website where you can also host and join events.',
      type: 'Full-Stack',
      languages: 'Django, React.js, REST API',
      link: 'N/A',
      githubLink: 'https://github.com/iman370/klabber',
    },
    {
      title: 'Cat and Dog Image Classifier',
      desc: 'Using a convolutional neural network to classify images of cats and dogs.',
      type: 'Machine Learning',
      languages: 'Tensorflow, keras',
      link: 'https://colab.research.google.com/drive/1TcI-iIH7O9mSr3-lEgcjvNF9tAAs4LDX?usp=sharing',
      githubLink: 'https://github.com/iman370/FCC-ML-with-python/blob/main/Projects/Copy_of_fcc_cat_dog.ipynb',
    },
    {
      title: 'Book Recommendation using KNN',
      desc: 'Uses K-Nearest Neighbours to recommend books that are similar to the given book.',
      type: 'Machine Learning',
      languages: 'sklearn, pandas',
      link: 'https://colab.research.google.com/drive/1Shs7fQQDav5nhUpQ7AMwUBjSEiM48iVJ?usp=sharing',
      githubLink: 'https://github.com/iman370/FCC-ML-with-python/blob/main/Projects/fcc_book_recommendation_knn.ipynb',
    },
    {
      title: 'Health Costs Calculator using Linear Regression',
      desc: 'Uses Linear Regression to predict healthcare costs of different people.',
      type: 'Machine Learning',
      languages: 'Tensorflow, keras, pandas',
      link: 'https://colab.research.google.com/drive/1cJhYNmL2vRwwvaM4L5nctsUYk0gMnNt8?usp=sharing',
      githubLink: 'https://github.com/iman370/FCC-ML-with-python/blob/main/Projects/Copy_of_fcc_predict_health_costs_with_regression.ipynb',
    },
    {
      title: 'Neural Network SMS Classifier',
      desc: 'Uses Neural Networks and NLP to classify whether a text message is spam.',
      type: 'Machine Learning, NLP',
      languages: 'Tensorflow, keras, pandas',
      link: 'https://colab.research.google.com/drive/1x5jd2pliPuutha7SsmJn0haVti-59-t_?usp=sharing',
      githubLink: 'https://github.com/iman370/FCC-ML-with-python/blob/main/Projects/Copy_of_fcc_sms_text_classification.ipynb',
    },
  ]

  return(
    <div className="projects-container">
            <div className='header'>
              <h1>iman-ai<b>.projects()</b></h1>
              <div className='divider' />
              <div className='divider' />
              <div className='divider' />
            </div>
        <div className="project-stack">
          {project_stack.map(function (project){
            return(
                <ProjectsCard
                title={project.title}
                desc={project.desc}
                type={project.type}
                languages={project.languages}
                link={project.link}
                githubLink={project.githubLink} />
            )
          })}
        </div>
    </div>
  );
}

export default Projects