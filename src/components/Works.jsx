import React from 'react';
import '../styles/Works.css'

function Works() {
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
            workMockup: 'images/lyricsProject.jpg',
            workTitle: 'Project Lyrics',
            workDesc: 'Project Lyrics has 3 preloaded song which users can play and control',
            workLink: 'https://lyrics.ionihal.xyz'
        },
        {
            id: '2',
            workMockup: 'images/gameCom.png',
            workTitle: 'GameCom',
            workDesc: 'GameCom is a Website built on ReactJS for a SA-MP gaming community',
            workLink: 'https://gamecom-react.vercel.app'
        },
        {
            id: '3',
            workMockup: 'images/gameCom.png',
            workTitle: 'GameCom',
            workDesc: 'GameCom is a Website built on ReactJS for a SA-MP gaming community',
            workLink: 'https://gamecom-react.vercel.app'
        },

    ]
    return (
        <>
            <section className='works-sec' id='works'>
                <h1>MY PROJECTS</h1>
                <div className='works-con'>
                    {
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
                    }
                </div>
            </section>
        </>
    )
}

export default Works
