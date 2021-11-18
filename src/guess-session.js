import React from 'react'
import Feedback from './feedback'
import GuessForm from './guess-form'

const GuessSection = ({ feedback, guessCount, onMakeGuess }) => {
    return (
        <section className="new-game-container">
            <Feedback feedback={feedback} guessCount={guessCount} />
            <GuessForm onMakeGuess={onMakeGuess} />
        </section>
    )
}

export default GuessSection
