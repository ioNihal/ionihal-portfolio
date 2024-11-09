import React, { useEffect, useState } from 'react';
import '../styles/Works.css';

function Works() {
    const [projects, setProjects] = useState([]);

    const myProjects = [
        {
            id: '0',
            workMockup: 'images/gameCom.png',
            workTitle: 'GameCom',
            workDesc: 'GameCom is a Website built on ReactJS for a SA-MP gaming community',
            workLink: 'https://gamecom-react.vercel.app'
        },
        {
            id: '1',
            workMockup: 'images/lyrics.png',
            workTitle: 'Project Lyrics',
            workDesc: 'Project Lyrics has 3 preloaded song which users can play and control',
            workLink: 'https://lyrics.ionihal.xyz'
        },
        {
            id: '2',
            workMockup: 'images/pixels.png',
            workTitle: 'Project Pixels',
            workDesc: 'Pixels is an art inspired webpage built using Vanilla JS, HTML, CSS',
            workLink: 'https://ionihal.github.io/Pixels-art'
        },
        {
            id: '3',
            workMockup: 'images/splitter.png',
            workTitle: 'Splitter',
            workDesc: 'Splitter is a Website built on ReactJS for calculating and splitting group expenses',
            workLink: 'https://budget-splitter.vercel.app'
        },

    ];

    useEffect(() => {
        // Fetch projects from the backend
        const fetchProjects = async () => {
            try {
                const response = await fetch('api/projects');
                const data = await response.json();
                console.log(response);
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
                    {/*
                        myProjects.map(project => {
                            return (
                                <div key={project.id} className='works-card'>
                                    <img src={project.workMockup} alt='mockup' />
                                    <div className='card-title'>
                                        <div className='card-text'>
                                            <h5>{project.workTitle}</h5>
                                            <p>{project.workDesc}</p>
                                        </div>
                                        <a href={project.workLink} target='_blank'>VIEW</a>
                                    </div>
                                </div>
                            )
                        })
                    */}
                </div>
            </section>
        </>
    );
}

export default Works;
