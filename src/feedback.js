import React from 'react'

const Feedback = ({ guessCount, feedback }) => {
    let key = guessCount;

    return (
        <h2
            key={key}
            id='feedback'
            role='status'
        >
            {feedback}
        </h2>
    )
}

export default Feedback
