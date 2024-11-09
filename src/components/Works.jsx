import React, { useEffect, useState } from 'react';
import '../styles/Works.css';

function Works() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch projects from the backend
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            <section className='works-sec' id='works'>
                <h1>MY PROJECTS</h1>
                <div className='works-con'>
                    {
                        projects.map(project => {
                            return (
                                <div key={project._id} className='works-card'>
                                    <img src={project.workMockup} alt='mockup' />
                                    <div className='card-title'>
                                        <div className='card-text'>
                                            <h5>{project.workTitle}</h5>
                                            <p>{project.workDesc}</p>
                                        </div>
                                        <a href={project.workLink} target='_blank' rel='noopener noreferrer'>VIEW</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default Works;
