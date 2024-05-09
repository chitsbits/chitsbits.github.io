import { Chip } from '@react-md/chip';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';

function githubLink(link) {
  if (link) {
    return (
      <a
        className="github-icon project"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-github"></i>
      </a>
    );
  }
}

export default function ProjectCard({ image, title, description, tags, link }) {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <div>
          <img src={require('../img/' + image)} alt="project"></img>
          <div className="project-description text">
            <h3>{title}</h3>
            <span>{description}</span>
          </div>
        </div>
        <div className="tags">
          {tags.map((tag, i) => {
            return (
              <Chip noninteractable theme="solid" key={i}>
                {tag}
              </Chip>
            );
          })}
        </div>
      </div>
      {githubLink(link)}
    </div>
  );
}
