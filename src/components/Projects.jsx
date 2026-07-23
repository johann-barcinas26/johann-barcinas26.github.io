import { useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import projects from '../data/projects.js'
import './Projects.css'

function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="section">
      <p className="section-label">Projects</p>
      <h2>What I've built</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            onView={() => setActiveProject(project)}
          />
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          key={activeProject.id}
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  )
}

export default Projects
