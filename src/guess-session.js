import React from 'react'
import Feedback from './feedback'
import GuessForm from './guess-form'

const GuessSection = ({ feedback, guessCount, onMakeGuess }) => {
    return (
        <section>
            <Feedback feedback={feedback} guessCount={guessCount} />
            <GuessForm onMakeGuess={onMakeGuess} />
        </section>
    )
}

export default GuessSection
