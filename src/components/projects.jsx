import projects from '../projects.json';
import ProjectCard from './projectCard';

const Projects = () => {
  return (
    <div className="projects">
      <div className="page-description text">
        Here are a selection of my public projects on GitHub. These range from
        school assignments to hobby projects, and include things written in
        Java, Python, Javascript and C++.
      </div>
      <div>&#8203;</div>
      <div className="project-cards-container">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            image={project.image || 'placeholder.png'}
            title={project.name || 'Untitled Project'}
            description={project.description || 'No description provided.'}
            tags={project.tags || []}
            link={project.link || undefined}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
