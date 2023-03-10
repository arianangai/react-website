import React, {useState, useEffect} from 'react';
import {BiFace} from 'react-icons/bi';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Button} from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import { Link, animateScroll as scroll } from "react-scroll";


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    
    
    return (
        <>
            <IconContext.Provider value = {{color: '#fff'}}>
                <nav className='navbar'>
                    <div className='navbar-container container'>
                        <Link activeClass="active" to='section1' spy={true} smooth={true} offset={-70} duration={500} className='navbar-logo'>
                            <BiFace className='navbar-icon'/>
                            en-Joey
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className ='nav-item'>
                                <Link activeClass="active" to='section1' spy={true} smooth={true} offset={-70} duration={500} className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className ='nav-item'>
                                <Link activeClass="active" to='section2' spy={true} smooth={true} offset={-70} duration={500} className='nav-links' onClick={closeMobileMenu}>
                                    Services
                                </Link>
                            </li>     
                            <li className ='nav-item'>
                                <Link activeClass="active" to='pricing' spy={true} smooth={true} offset={-70} duration={500} className='nav-links' onClick={closeMobileMenu}>
                                    Pricing
                                </Link>
                            </li>
                            <li className ='nav-btn'>
                                {button ? (
                                    <Link activeClass="active" to='form' spy={true} smooth={true} offset={-70} duration={500} className='btn-link' onClick={closeMobileMenu}>
                                        <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                    </Link>
                                ):(
                                    <Link activeClass="active" to='form' spy={true} smooth={true} offset={-70} duration={500} className='btn-link'>
                                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu}>SIGN UP</Button>
                                    </Link>
                                )}
                            </li>         
                        </ul>
                            
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    )
    }

export default Navbar