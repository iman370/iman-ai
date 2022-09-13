import React from "react";
import githubLogo from './images/github-logo.png';
import codeicon from './images/codeicon.png';

function ProjectsCard({title, desc, type, languages, link, githubLink}) {
  const webLink = [link];
  return (
  <div class="project-card">
    <div class="flip">
        <div class="front">
          <h1 class="text-shadow">{title}</h1>
          <h2>{type}</h2>
        </div>
        <div class="back">
          <h2>{desc}</h2>
          <p>{languages}</p>
          <a href={githubLink}>
            <img className="logos" src={githubLogo} alt="GitHub"/>
          </a>
          {webLink.map(function (link){
            if (link!=='N/A') {
              return (
                <a href={link}>
                  <img className="logos" src={codeicon} alt="Website"/>
                </a>
              )
            }
            return(<div/>)
          })}
        </div>
    </div>
  </div>
  );
};

export default ProjectsCard;