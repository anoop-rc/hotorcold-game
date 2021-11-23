import React from 'react'
import TopNav from './top-nav'
import './header.css';


const Header = ({onRestartGame}) => {

    return (
        <header className="header">
            <TopNav onRestartGame={() => onRestartGame()} />
            <h1 className="title">HOT or COLD</h1>
        </header>
    )
}


export default Header
