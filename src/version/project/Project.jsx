import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="project-card">
        <img src="path_to_project_image.jpg" alt="Project" />
        <h3 className="project-title">Project Title</h3>
        <p className="project-description">Project Description</p>
        <p className="project-tech-stack">Tech Stack Used</p>
        <a className="project-github-link" href="GitHub_repository_link">GitHub Repository</a>
        <a className="project-deployed-link" href="Deployed_link_or_video_link">Deployed Link</a>
      </div>
      {/* Repeat the above structure for each project card */}
    </section>
  );
};

export default Projects;
