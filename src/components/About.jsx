import React from 'react';
import '../styles/About.css';

function About() {

    const myPotrait = '../nihalPortrait.png'
    return (
        <>
            <section className='about-sec' id='about'>
                <div className='about-name-con'>
                    <h1 className='text-name-bg'>NIHAL K</h1>
                    <h1 className='text-name-fg'>NIHAL K</h1>
                    <h1 className='text-name-dev'>WEB DEVELOPER</h1>
                </div>
                <div className='about-img-con'>
                    <img className='about-img' src={myPotrait} alt='My Portrait' />
                    <div className='about-para-con'>
                        <p>
                            My name is Nihal K. I am a web developer,
                            and I am very passionate and dedicated to my work.
                        </p>
                        <p>
                            I am a student at Srinivas University,
                            pursuing a Bachelor's degree in Computer Applications.
                            I enjoy coding and creating designs in the form of web, graphics, and video.
                        </p>
                        <span>HIRE ME</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
