import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import '../styles/Header.css'

const Header = (props) => {
    const [page, setPage] = useState('')
    const [navOut, setNavOut] = useState(false)
    const [smallNav, setSmallNav] = useState(props.isSmall)
    const path = useLocation().pathname

    useEffect(() => {
        if (path === '/') {
            setPage('home')
        } else {
            setPage(path.replace('/', ''))
        }
    }, [])

    useEffect(() => {
        setSmallNav(props.isSmall)
    }, [props.isSmall]);

    const handlePage = (newPage) => {
        setPage(newPage)
        setNavOut(false)
    }

    const toggleActive = () => {
        setNavOut(navOut => !navOut)
    }

    const tagActiveStyle = {
        fontWeight: 'bold',
        pointerEvents: 'none',
        color: 'black',
    }

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__label">
                    {page === 'home' ? <></> : <>pat.{page}</>}
                </div>
                <div className='header__hamburger' onClick={toggleActive}>
                    <div id="hamburger__content" className={navOut ? 'header__hamburger__content active' : 'header__hamburger__content'}/>
                </div>
                <ul id="navList" style={navOut || !smallNav ? {opacity: 1, visibility: 'visible'} : {
                    opacity: 0,
                    visibility: 'hidden'
                }}>
                    <li><Link to="/" onClick={() => handlePage('home')}
                              style={page === 'home' ? tagActiveStyle : {}}>home()</Link>
                    </li>
                    <li><Link to="/project" onClick={() => handlePage('project')}
                              style={page === 'project' ? tagActiveStyle : {}}>project()</Link>
                    </li>
                    <li><Link to="/life" onClick={() => handlePage('life')}
                              style={page === 'life' ? tagActiveStyle : {}}>life()</Link>
                    </li>
                    <li><Link to="/social" onClick={() => handlePage('social')}
                              style={page === 'social' ? tagActiveStyle : {}}>social()</Link>
                    </li>
                    <li><a href="mailto:patrickxunuo@hotmail.com">Contact()</a></li>
                </ul>
            </div>
            {
                smallNav &&
                <div className="header__canvas" style={navOut ? {opacity: 0.5, zIndex: 2, display: 'block'} : {
                    opacity: 0,
                    zIndex: -1,
                    display: 'none'
                }}/>
            }
        </header>
    )
}
export default Header
