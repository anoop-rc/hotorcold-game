import React from 'react'
import TopNav from './top-nav'


const Header = ({onRestartGame}) => {

    return (
        <header>
            <TopNav onRestartGame={() => onRestartGame} />
            <h1>HOT or COLD</h1>
        </header>
    )
}


export default Header
