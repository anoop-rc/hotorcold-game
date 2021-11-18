import React from 'react'

const TopNav = ({ onRestartGame }) => {
    return (
        <nav className="top-row-header">
            <ul className='float-right new-game-container'>
                <li><a href="#what">What?!</a></li>
                <li><a href="#feedback" onClick={()=>onRestartGame()}>+ New Game</a></li>
            </ul>
        </nav>
    )
}

export default TopNav
