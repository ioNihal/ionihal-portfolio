
import React from 'react';
import UpdateWork from './UpdateWork';
import DeleteWork from './DeleteWork';

function WorkList({ projects }) {
    return (
        <div className="project-list">
            {projects.length === 0 ? (
                <p>No projects found.</p>
            ) : (
                projects.map((project) => (
                    <div key={project._id} className="project-item">
                        <h3>{project.workTitle}</h3>
                        <p>{project.workDesc}</p>
                        <a href={project.workLink} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                        <UpdateWork projectId={project._id} />
                        <DeleteWork projectId={project._id} />
                    </div>
                ))
            )}
        </div>
    );
}

export default WorkList;
