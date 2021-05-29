import React, { useState, useEffect } from 'react'
import './Navbar.css'
import netflixAvatar from './img/netflix-avatar.png'
import SearchIcon from '@material-ui/icons/Search'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import netflixLogo from "./img/netflix-logo.png";


export default function NavBar() {
    const [scrolled, setScrolled] = useState(false)

    const changeBackground = () => {
        console.log('this bitch scrolled')
        if (window.scrollY > 300) {
            setScrolled(true);
            console.log('this bitch scrolled')
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        console.log('hello')

        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    });


    return (
        <nav className={scrolled ? 'nav nav-scrolled' : 'nav nav-not-scrolled'}>
            <img className="nav__logo" src={netflixLogo} />
            <ul className="primary-navigation">
                <li className="navigation-tab">Home</li>
                <li className="navigation-tab">TV Shows</li>
                <li className="navigation-tab">Movies</li>
                <li className="navigation-tab">Latest</li>
                <li className="navigation-tab">My List</li>
            </ul>
            <ul className="secondary-navigation">
                <SearchIcon fontSize="inherit" className="icons secondary-navigation-item" />
                <li className="navigation-tab secondary-navigation-item">KIDS</li>
                <li className="navigation-tab secondary-navigation-item">DVD</li>
                <CardGiftcardIcon fontSize="inherit" className="icon secondary-navigation-item" />
                <NotificationsIcon fontSize="inherit" className="icon secondary-navigation-item" />
                <img className="nav__avatar secondary-navigation-item" src={netflixAvatar} />
                <div className="empty-div secondary-navigation-item">hello</div>

            </ul>
        </nav>

    )
}
