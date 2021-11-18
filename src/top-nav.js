import React from 'react'

const TopNav = ({ onRestartGame }) => {
    return (
        <nav>
            <ul className='clearfix'>
                <li><a href="#what">What?!</a></li>
                <li><a href="#feedback" onClick={()=>onRestartGame()}>+ New Game</a></li>
            </ul>
        </nav>
    )
}

export default TopNav
