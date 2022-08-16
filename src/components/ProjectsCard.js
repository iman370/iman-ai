import React from "react";
//import githubLogo from './images/github-logo.png';

function ProjectsCard({title, desc, type, languages, link, githubLink}) {
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
        </div>
    </div>
  </div>
  );
};

export default ProjectsCard;