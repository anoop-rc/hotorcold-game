import React from 'react'

const GuessList = (props) => {
    return (
        <ul id="guessList" className="clearfix">
            {props.guesses.map((guess, index) => (
                <li key={index}>{guess}</li>
            ))}
        </ul>
    )
}

export default GuessList
