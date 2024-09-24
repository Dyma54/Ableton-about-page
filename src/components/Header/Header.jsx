import React from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import stylesHeader from './Header.module.scss'
import classNames from 'classnames'
import VerticalMenu from '../Menu/Menu'
import stylesApp from '../../App.module.scss'

export default function Header() {
  return (
    <header>

        <div className={classNames(stylesHeader.mainNavBarHorizontal)}>

          <div className={stylesHeader.navBarLeft}>

            <img src={logo} alt="Logo" />

            <nav className={stylesHeader.navBarLeftLinks}>
              <NavLink to='live/'>Live</NavLink>
              <NavLink to='push/'>Push</NavLink>
              <NavLink to='note/'>Note</NavLink>
              <NavLink to='link/'>Link</NavLink>
              <NavLink to='shop/'>Shop</NavLink>
              <NavLink to='packs/'>Packs</NavLink>
              <NavLink to='help/'>Help</NavLink>
              <NavLink to='more/'>More +</NavLink>
            </nav>

          </div>

          <nav className={stylesHeader.navBarRight}>
            <NavLink to='trial/'>Try Live 12 for free</NavLink>
            <NavLink to='login/'>Log in or register</NavLink>
          </nav>

        </div>

        <VerticalMenu/>

        <div className={stylesApp.line}></div>

        <nav className={stylesHeader.subNavBar}>
          <NavLink to='en/about'>About</NavLink>
          <NavLink to='en/jobs'>Jobs</NavLink>
          <NavLink to='en/ausbuilding/'>Apprenticeships</NavLink>
        </nav>
    </header>
  )
}
