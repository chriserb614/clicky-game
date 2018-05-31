import React from 'react'
import './Header.css'

const Header = props => (
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">Clicky Game</a>
        <span>Score: {props.score} | Top Score: {props.highScore}</span>
    </nav>
)

export default Header