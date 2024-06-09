import React from 'react';
import TextAni from './TextAni'

import '../styles/Home.css';


function Home() {

    

    return (
        <>
            <section className='landing-sec'>
                <div className='landing-text-con'>
                    <span>Welcome!</span> <br />
                    <span>I am a <TextAni
                        texts={
                            [
                                "WEB DEVELOPER",
                                "WEB DESIGNER",
                                "GFX DESIGNER",
                                "PHOTO EDITOR",
                                "VIDEO EDITOR"
                            ]
                        }
                        duration={1000}  /> </span><br />
                        <span>I COOK</span><br />
                        <span>BE MY GUEST</span><br />
                        <span>I BLAH! BLAAH!</span>

                </div>
            </section >
        </>

    )
}

export default Home;