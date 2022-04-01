import React from 'react'

function ProjectList({ filteredList }) {
  return (
    <div className="projectList-container">
        {filteredList.map((project, index) => (
            <img 
                src={project.img} 
                alt={project.category} 
                key={project + index} 
                className="project-image"
            >
            </img>
        ))}
    </div>
  )
}

export default ProjectList
