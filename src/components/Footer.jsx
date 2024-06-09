import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const socialIcons = [
        { id: '0', Name: 'Github', Link: '/github.png' },
        { id: '1', Name: 'Instagram', Link: '/instagram.png' },
        { id: '2', Name: 'Twitter', Link: '/twitter.png' },
        { id: '3', Name: 'DevCom', Link: '/devCom.png' },
        { id: '4', Name: 'LinkedIn', Link: '/linkedin.png' },
    ]

    const footerNavLinks = [
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
            document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
        }

        else console.log('Error scrolling');
    }

    const redirectSocial = (socialName) => {
        if (socialName === 'Github') {
            window.open('https://github.com/ioNihal', '_blank');
        }
        else if (socialName === 'Instagram') {
            window.open('https://www.instagram.com/io.nihal/', '_blank');
        }
        else if (socialName === 'Twitter') {
            window.open('https://x.com/twNihal', '_blank');
        }
        else if (socialName === 'DevCom') {
            window.open('https://dev.to/ionihal', '_blank');
        }
        else if (socialName === 'LinkedIn') {
            window.open('https://www.linkedin.com/in/nihal-k-24b8b12b1', '_blank');
        }
        else console.log('Error redirecting');
    }



    return (
        <>
            <footer>
                <div className='footer-sec'>
                    <img className='mylogo' src='/myLogoW.png' alt='ioNihal Logo' />
                    <p>
                        © 2024 ioNihal. All rights reserved.
                        All content on this portfolio, including text, images, graphics,
                        and code, is the intellectual property of Nihal.
                        Unauthorized use or reproduction of any materials is strictly prohibited.
                        For permissions or inquiries, please contact Nihal directly.
                    </p>
                    <div className='social-icons-con'>
                        {
                            socialIcons.map(socialIcon => {
                                return (
                                    <img key={socialIcon.id} className='social-icon' src={socialIcon.Link} alt={socialIcon.Name} onClick={() => { redirectSocial(socialIcon.Name) }} />
                                )
                            })
                        }
                    </div>
                    <div className='footer-nav'>
                        {
                            footerNavLinks.map(footerNavLink => {
                                return (
                                    <span key={footerNavLink.id} className='footer-nav-links' onClick={() => { scrollTo(footerNavLink.Name) }}> {footerNavLink.Name} </span>
                                )
                            })
                        }
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;