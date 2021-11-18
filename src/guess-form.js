import React, { useState } from 'react'

const GuessForm = ({ onMakeGuess }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        onMakeGuess(value);
        setValue('');

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                name="userGuess"
                id="userGuess"
                className="text"
                min="1"
                max="100"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" name="submit" id="guessButton">Guess</button>
        </form>
    )
}

export default GuessForm
