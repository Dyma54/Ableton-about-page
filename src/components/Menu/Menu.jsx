import React, { useState } from 'react'
import stylesMenu from './Menu.module.scss'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import downArrow from '../../assets/icons/down-arrow-solid-24.png'
import upArrow from '../../assets/icons/up-arrow-solid-24.png'

export default function VerticalMenu() {
    const  [isMenuVisible, setIsMenuVisible] = useState(true)
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible)
    }

  return (
    <>
        <div className={stylesMenu.menu}>
            <img src={logo} alt="Logo" />
            <span onClick={toggleMenu}>
                Menu
                {isMenuVisible ? <img src={upArrow} alt=''/> : <img src={downArrow} alt=''/>}
            </span>
        </div>
        {isMenuVisible && (
        <div className={stylesMenu.mainNavBarVertical}>
            <nav className={stylesMenu.topLinks}>
               <p><NavLink to='live/'>Live</NavLink></p>
               <p><NavLink to='push/'>Push</NavLink></p>
               <p><NavLink to='note/'>Note</NavLink></p>
               <p><NavLink to='link/'>Link</NavLink></p>
               <p><NavLink to='shop/'>Shop</NavLink></p>
               <p><NavLink to='packs/'>Packs</NavLink></p>
               <p><NavLink to='help/'>Help</NavLink></p>
               <p><NavLink to='more/'>More +</NavLink></p>
               <p><NavLink to='trial/'>Try Live 12 for free</NavLink></p>
               <p><NavLink to='login/'>Log in or register</NavLink></p>
           </nav>
   
             <div>
   
               <h1>More on Ableton.com:</h1>
   
               <nav className={stylesMenu.middleLinks}>
                 <p><NavLink>Blog</NavLink></p>
                 <p><NavLink>Ableton for the Classroom</NavLink></p>
                 <p><NavLink>Ableton for Colleges and Universities</NavLink></p>
                 <p><NavLink>Certified Training</NavLink></p>
                 <p><NavLink to='en/about'>About</NavLink></p>
                 <p><NavLink to='en/jobs'>Jobs</NavLink></p>
                 <p><NavLink to='en/ausbuilding/'>Apprenticeships</NavLink></p>
               </nav>
   
               <div>
                 <h1>More from Ableton:</h1>
   
                 <div className={stylesMenu.bottomLinks}>
                   <nav>
                     <p><NavLink to=''>Loop</NavLink></p>
                     <NavLink to=''>Watch Talks, Performances and Features from Ableton's Summit for Music Makers</NavLink>
                   </nav>
   
                   <nav>
                     <p><NavLink to=''>Learning Music</NavLink></p>
                     <NavLink to=''>Learn the fundamentals of music making right in your browser.</NavLink>
                   </nav>
   
                   <nav>
                     <p><NavLink to=''>Learning Synths</NavLink></p>
                     <NavLink to=''>Get started with synthesis using a web-based synth and accompanying lessons.</NavLink>
                   </nav>
   
                   <nav>
                     <p><NavLink to=''>Making Music</NavLink></p>
                     <NavLink to=''>Some tips from 74 Creative Strategies for Electronic Producers.</NavLink>
                   </nav>
                 </div>
                   
               </div>
             </div>
   
           </div>
        )}
    </>
  )
}
