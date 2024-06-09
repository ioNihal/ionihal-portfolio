import React from 'react';
import '../styles/Services.css'

function Services() {
    const icons = {
        webDev: '/coding.png',
        videoEditor: '/videoEditor.png',
        gfxDesign: '/gfxDesign.png',
        photoEditor: '/photoEditing.png'
    }


    return (
        <>
            <section className='services-sec' id='services'>
                <h1>What I Do</h1>
                <div className='services-con'>
                    <span>
                        <img src={icons.webDev} alt='web dev icon' />
                        <h5>WEB DEVELOPMENT</h5>
                    </span>
                    <span>
                        <img src={icons.videoEditor} alt='video editor icon' />
                        <h5>VIDEO EDITING</h5>
                    </span>
                    <span>
                        <img src={icons.gfxDesign} alt='video editor icon' />
                        <h5>GRAPHICS DESIGN</h5>
                    </span>
                    <span>
                        <img src={icons.photoEditor} alt='video editor icon' />
                        <h5>PHOTO EDITING</h5>
                    </span>
                </div>
            </section>
        </>
    )
}

export default Services