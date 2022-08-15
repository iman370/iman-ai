import React from "react";
import githubLogo from './images/github-logo.png';

function ProjectsCard({title, desc, type, languages, link, githubLink}) {
  return (
    <div className="card">
      <div className="card-info">
        <p className="title">{title}</p>
        <p className="subtitle">{type}</p>
      </div>
      <div className="card-bio">
        <p className="description">{desc}</p>
        <p className="languages">{languages}</p>
        <div className="links-box">
            <a href={githubLink}>
                <img className="logos" src={githubLogo} alt="GitHub"/>
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;