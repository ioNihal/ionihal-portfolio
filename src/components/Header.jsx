import React from "react"
import '../styles/Header.css'

function Header() {

    const headerNavLinks = [
        { id: '0', Name: 'HOME', Direction: '#home' },
        { id: '1', Name: 'ABOUT', Direction: '#about' },
        { id: '2', Name: 'SERVICES', Direction: '#services' },
        { id: '3', Name: 'WORKS', Direction: '#works' },
        { id: '4', Name: 'CONTACT', Direction: '#contact' }
    ]

    const scrollTo = (scrollLoc) => {
        if (scrollLoc === 'HOME') {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }
        else if (scrollLoc === 'ABOUT') {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        }
        else if (scrollLoc === 'SERVICES') {
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        }
        else if (scrollLoc === 'WORKS') {
            document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
        }
        else if (scrollLoc === 'CONTACT') {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }

        else console.log('Error scrolling');
    }

    return (
        <>
            <header id='home'>
                <h1 onClick={() => { location.href = 'home'}}>ioNihal Portfolio</h1>
                <div className="header-nav-con">
                    {
                        headerNavLinks.map(headerNavLink => {
                            return (
                                <span key={headerNavLink.id} className='header-nav-link' onClick={() => { scrollTo(headerNavLink.Name) }}> {headerNavLink.Name} </span>
                            )
                        })
                    }
                </div>
            </header>
        </>
    )
}

export default Header