import React from 'react';
import '../styles/Works.css'

function Works() {
    const myProjects = [
        {
            id: '0',
            workMockup: 'src/assets/gameCom.png',
            workTitle: 'GameCom',
            workDesc: 'GameCom is a Website built on ReactJS for a SA-MP gaming community',
            workLink: 'https://gamecom-react.vercel.app'
        },
        {
            id: '1',
            workMockup: 'src/assets/gameCom.png',
            workTitle: 'GameCom',
            workDesc: 'GameCom is a Website built on ReactJS for a SA-MP gaming community',
            workLink: 'https://gamecom-react.vercel.app'
        },
        {
            id: '2',
            workMockup: 'src/assets/gameCom.png',
            workTitle: 'GameCom',
            workDesc: 'GameCom is a Website built on ReactJS for a SA-MP gaming community',
            workLink: 'https://gamecom-react.vercel.app'
        },
        {
            id: '3',
            workMockup: 'src/assets/gameCom.png',
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
                                        <a href={project.workLink}>VIEW</a>
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
