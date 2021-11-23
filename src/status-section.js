import React from 'react'
import GuessCount from './guess-count';
import GuessList from './guess-list';

const StatusSection = ({guesses}) => {

    const guessCount = guesses.length;

    return (
       <section>
           <GuessCount guessCount={guessCount} />
           <GuessList guesses={guesses} />
       </section>
    )
}

export default StatusSection
